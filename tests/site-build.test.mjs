import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { selectSdk, verifySdkArchive } from '../scripts/documentation-sdk.mjs';
import { prepareCatalog, validateBinding } from '../scripts/prepare-catalog.mjs';
import { siteOrigin, assertPublicationBranch } from '../scripts/site-environment.mjs';
import { nestSite, buildSite } from '../scripts/build-site.mjs';
import { run } from '../scripts/tooling-process.mjs';
import { readExampleReceipts } from '../scripts/check-projection.mjs';

const binding = { repository: 'https://github.com/Wolfiora/InnoEngine', toolingRevision: 'a'.repeat(40), revision: 'b'.repeat(40), sourceTree: 'c'.repeat(40) };
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'inno-site-bootstrap-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test('production domain needs no user token or hardcoded project name', () => {
  assert.equal(siteOrigin({ VERCEL: '1', VERCEL_PROJECT_PRODUCTION_URL: 'assigned.vercel.app' }), 'https://assigned.vercel.app');
  assert.equal(siteOrigin({ DOCS_SITE_URL: 'https://docs.example.org' }), 'https://docs.example.org');
  assert.throws(() => siteOrigin({ VERCEL: '1' }), /system environment/);
  for (const value of ['http://docs.example.org', 'https://name:secret@example.org', 'https://example.org/path', 'https://example.org/?x=y']) {
    assert.throws(() => siteOrigin({ DOCS_SITE_URL: value }), /HTTPS origin/);
  }
});

test('only main production can enter the hosting build, even through manual redeploy', async () => {
  assertPublicationBranch({});
  assertPublicationBranch({ VERCEL: '1', VERCEL_ENV: 'production', VERCEL_GIT_COMMIT_REF: 'main' });
  for (const branch of ['draft', 'feature/test', undefined]) {
    await assert.rejects(buildSite('does-not-exist', { VERCEL: '1', VERCEL_ENV: 'production', VERCEL_GIT_COMMIT_REF: branch }), /main production/);
  }
  assert.throws(() => assertPublicationBranch({ VERCEL: '1', VERCEL_ENV: 'preview', VERCEL_GIT_COMMIT_REF: 'main' }), /main production/);
});

test('mutable tooling refs and another source repository cannot bootstrap', () => {
  validateBinding(binding);
  for (const patch of [{ repository: 'https://example.org/InnoEngine' }, { toolingRevision: 'master' }, { revision: '../source' }]) {
    assert.throws(() => validateBinding({ ...binding, ...patch }), /exact approved/);
  }
});

test('SDK selection uses exact version, platform and digest without executing a fetched installer', async t => {
  const root = await fixture(t);
  const bytes = Buffer.from('verified sdk fixture');
  const hash = createHash('sha512').update(bytes).digest('hex');
  const file = { rid: 'linux-x64', url: 'https://builds.dotnet.microsoft.com/dotnet/Sdk/10.0.402/sdk.tar.gz', hash };
  const releases = { releases: [{ sdks: [{ version: '10.0.402', files: [file] }] }] };
  assert.equal(selectSdk(releases, '10.0.402', 'linux', 'x64'), file);
  assert.throws(() => selectSdk(releases, '10.0.403', 'linux', 'x64'), /No verified/);
  assert.throws(() => selectSdk(releases, '10.0.402', 'linux', 'arm64'), /No verified/);
  const archive = path.join(root, 'sdk.tar.gz');
  await writeFile(archive, bytes);
  await verifySdkArchive(archive, hash);
  await writeFile(archive, Buffer.alloc(bytes.length));
  await assert.rejects(verifySdkArchive(archive, hash), /SHA-512/);
  file.url = 'https://untrusted.example/sdk.tar.gz';
  assert.throws(() => selectSdk(releases, '10.0.402', 'linux', 'x64'), /approved Microsoft/);
});

test('an active preparation lock preserves existing catalog and lock bytes', async t => {
  const root = await fixture(t);
  await mkdir(path.join(root, 'reference'));
  await writeFile(path.join(root, 'reference/engine.lock.json'), JSON.stringify(binding));
  const workspace = path.join(root, 'artifacts/tooling-bootstrap');
  await mkdir(workspace, { recursive: true });
  await writeFile(path.join(workspace, 'prepare.lock'), 'active-owner');
  await writeFile(path.join(root, 'artifacts/canonical-catalog.json'), 'previous snapshot');
  await assert.rejects(prepareCatalog({ root }), /Another catalog preparation/);
  assert.equal(await readFile(path.join(root, 'artifacts/canonical-catalog.json'), 'utf8'), 'previous snapshot');
  assert.equal(await readFile(path.join(workspace, 'prepare.lock'), 'utf8'), 'active-owner');
});

test('static host output retains base-path deep links, bytes and no second copy', async t => {
  const root = await fixture(t);
  const site = path.join(root, 'dist');
  await mkdir(path.join(site, 'api/type'), { recursive: true });
  await writeFile(path.join(site, 'index.html'), 'home');
  await writeFile(path.join(site, 'api/type/index.html'), 'member');
  await nestSite(site);
  assert.equal(await readFile(path.join(site, 'InnoEngine.Docs/api/type/index.html'), 'utf8'), 'member');
  await assert.rejects(readFile(path.join(site, 'index.html')), /ENOENT/);
  await assert.rejects(readFile(site + '.vercel-staging/index.html'), /ENOENT/);
});

test('tool failures and cancellation stop preparation instead of falling through to a stale build', async () => {
  await assert.rejects(run(process.execPath, ['-e', 'process.exit(7)'], { capture: true }), /failed \(7\)/);
  const cancellation = new AbortController();
  cancellation.abort();
  await assert.rejects(run(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { signal: cancellation.signal }), /abort/i);
});

test('the shared build reads exact CI receipt bytes and rejects missing or escaping inputs', async t => {
  const root = await fixture(t);
  await mkdir(path.join(root, 'artifacts/examples/reports'), { recursive: true });
  const bytes = Buffer.from('{"status":"Passed"}');
  const identity = createHash('sha256').update(bytes).digest('hex');
  const manifest = 'artifacts/examples/manifest.json';
  const report = { path: `reports/${identity}.json`, identity };
  await writeFile(path.join(root, 'artifacts/examples', report.path), bytes);
  await writeFile(path.join(root, manifest), JSON.stringify({ schema: 'inno-example-receipts/1', reports: [report] }));
  assert.deepEqual(await readExampleReceipts(root, manifest), [{ identity, bytes }]);
  await assert.rejects(readExampleReceipts(root, 'artifacts/missing.json'), /ENOENT/);
  await writeFile(path.join(root, manifest), JSON.stringify({ schema: 'inno-example-receipts/1', reports: [{ ...report, path: '../outside.json' }] }));
  await assert.rejects(readExampleReceipts(root, manifest), /content-addressed/);
});
