import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm, symlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { checkMigration } from '../scripts/check-migration.mjs';

async function fixture(t) {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'inno-migration-'));
  const owner = path.resolve(temporary);
  t.after(async () => {
    if (!owner.startsWith(path.resolve(os.tmpdir()) + path.sep)) throw new Error('Fixture escaped its temporary owner.');
    await rm(owner, { recursive: true, force: true });
  });
  const engineRoot = path.join(owner, 'engine'), root = path.join(owner, 'documentation');
  const write = async (base, name, bytes) => {
    const target = path.join(base, name);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, bytes);
  };
  const originals = [
    ['docs/guide.md', Buffer.from('# Original guide\n')],
    ['docs/backends/Native/Inno.Native.Probe.Api/ABI-01.md', Buffer.from('# Original binding\n')],
    ['docs/images/probe.png', Buffer.from([137, 80, 78, 71, 0, 255])]
  ];
  for (const [name, bytes] of originals) await write(engineRoot, name, bytes);
  const git = (...args) => execFileSync('git', ['-C', engineRoot, ...args], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  git('init', '-q'); git('config', 'core.autocrlf', 'false'); git('add', '.');
  git('-c', 'user.name=Aaron Liao', '-c', 'user.email=hsuankailiao@gmail.com', 'commit', '-qm', 'Original documentation fixture');
  const registry = { baseline: git('rev-parse', 'HEAD'), files: originals.map(([source, bytes]) => ({
    source, sha256: 'preserved earlier checkout identity',
    baselineBlobSha256: createHash('sha256').update(bytes).digest('hex'), baselineBlobBytes: bytes.length
  })) };
  for (const [name] of originals) await rm(path.join(engineRoot, name));
  Object.assign(registry.files[0], { disposition: 'ReviewedDestinationCutOver', target: 'InnoEngine.Docs/content/en/guide.md' });
  Object.assign(registry.files[1], { disposition: 'ApprovedNativeApiRetirementCutOver', scopeAmendment: 'User-approved engine-only scope.', target: 'decision' });
  Object.assign(registry.files[2], { disposition: 'PreservedHistoricalEvidence', target: '.agents/records/history/probe.png' });
  await write(engineRoot, '.agents/records/history/probe.png', originals[2][1]);
  await write(root, 'content/en/guide.md', '# Current guide\n\nRead this task.\n');
  const projects = JSON.stringify([{ name: 'Inno.Native.Probe', path: 'backends/Native/native/Inno.Native.Probe/Inno.Native.Probe.csproj', apiDocumentation: 'backend-native' }]);
  await write(root, 'reference/engine.lock.json', JSON.stringify({ projectManifest: 'reference/projects.json', projectManifestIdentity: createHash('sha256').update(projects).digest('hex') }));
  await write(root, 'reference/projects.json', projects);
  const save = () => write(engineRoot, '.agents/records/plans/english-documentation-baseline.json', JSON.stringify(registry));
  await save();
  return { root, engineRoot, registry, write, save };
}

test('exact dispositions and historical bytes do not assert source certification', async (t) => {
  const f = await fixture(t), result = await checkMigration(f);
  assert.equal(result.status, 'DispositionVerified');
  assert.deepEqual([result.reviewed, result.retired, result.archived], [1, 1, 1]);
  assert.equal(result.sourceApiStatus, 'Unverified');
});

for (const mutation of ['missing', 'duplicate', 'wrong-blob', 'changed-evidence', 'wrong-retirement', 'missing-destination', 'escape', 'retained-source']) {
  test(`reject ${mutation} migration evidence`, async (t) => {
    const f = await fixture(t);
    switch (mutation) {
      case 'missing': f.registry.files.pop(); break;
      case 'duplicate': f.registry.files.push(f.registry.files[0]); break;
      case 'wrong-blob': f.registry.files[0].baselineBlobSha256 = 'a'.repeat(64); break;
      case 'changed-evidence': await f.write(f.engineRoot, '.agents/records/history/probe.png', 'different bytes'); break;
      case 'wrong-retirement': f.registry.files[0].disposition = 'ApprovedNativeApiRetirementCutOver'; break;
      case 'missing-destination': f.registry.files[0].target = 'content/en/missing.md'; break;
      case 'escape': f.registry.files[0].target = 'content/en/../../../outside.md'; break;
      case 'retained-source': await f.write(f.engineRoot, 'docs/guide.md', '# Still duplicated'); break;
    }
    await f.save();
    assert.equal((await checkMigration(f)).status, 'Failed');
  });
}

test('delegated source reviews require exact matches, arrays and an acyclic destination', async (t) => {
  const f = await fixture(t), source = f.registry.files[0].source;
  f.registry.files[0].target = 'InnoEngine.Docs/reference/provenance/review.json';
  await f.save();
  const review = (destinations) => f.write(f.root, 'reference/provenance/review.json', JSON.stringify({ reviews: [{ source, destinations }] }));
  await review(['content/en/guide.md']);
  assert.equal((await checkMigration(f)).status, 'DispositionVerified');
  await review('content/en/guide.md');
  assert.match((await checkMigration(f)).errors.join('\n'), /explicit array/);
  await review(['reference/provenance/review.json']);
  assert.match((await checkMigration(f)).errors.join('\n'), /cycle/);
  await f.write(f.root, 'reference/provenance/review.json', JSON.stringify({ reviews: [] }));
  assert.match((await checkMigration(f)).errors.join('\n'), /exactly one/);
});

test('a linked destination cannot read another owner', async (t) => {
  const f = await fixture(t);
  await symlink(f.engineRoot, path.join(f.root, 'content/en/linked'), 'junction');
  f.registry.files[0].target = 'content/en/linked/docs/guide.md';
  await f.save();
  assert.match((await checkMigration(f)).errors.join('\n'), /traverses a link/);
});

test('retirement cannot use a substituted project-scope manifest', async (t) => {
  const f = await fixture(t);
  await f.write(f.root, 'reference/projects.json', '[]');
  await assert.rejects(checkMigration(f), /bound inventory/);
});

test('subsequent relocation preserves historical provenance and requires complete current destinations', async (t) => {
  const f = await fixture(t);
  const originalHash = 'a'.repeat(64), docsCommit = 'b'.repeat(40);
  const baseline = { docsCommit, pages: [{ path: 'content/en/guide.md', hash: originalHash, owners: [] }] };
  const migration = { schema: 'inno-api-migration/1', baseline: docsCommit, dispositions: [
    { from: 'content/en/guide.md', originalHash, action: 'MoveProjectGuide', destinations: ['content/en/manual/task.md'] },
  ] };
  const record = '.agents/records/acceptance/api-draft-migration/';
  await f.write(f.root, record + 'baseline.json', JSON.stringify(baseline));
  const save = () => f.write(f.root, record + 'migration.json', JSON.stringify(migration));
  await save();
  await f.write(f.root, 'content/en/manual/task.md', '# Preserved task\n');
  await rm(path.join(f.root, 'content/en/guide.md'));
  assert.equal((await checkMigration(f)).status, 'DispositionVerified');
  migration.dispositions[0].destinations = ['content/en/guide.md'];
  await save();
  assert.equal((await checkMigration(f)).status, 'Failed');
  migration.dispositions[0].originalHash = 'c'.repeat(64);
  await save();
  await assert.rejects(checkMigration(f), /Invalid or repeated/);
  migration.dispositions = [];
  await save();
  await assert.rejects(checkMigration(f), /omits an inventoried page/);
});

test('API scope retirement cannot discard an ordinary human guide', async (t) => {
  const f = await fixture(t);
  const originalHash = 'a'.repeat(64), docsCommit = 'b'.repeat(40);
  const record = '.agents/records/acceptance/api-draft-migration/';
  await f.write(f.root, record + 'baseline.json', JSON.stringify({ docsCommit, pages: [
    { path: 'content/en/guide.md', hash: originalHash, owners: ['Inno.Native.Probe'] },
  ] }));
  await f.write(f.root, record + 'migration.json', JSON.stringify({ schema: 'inno-api-migration/1', baseline: docsCommit, dispositions: [
    { from: 'content/en/guide.md', originalHash, action: 'ExcludedApiReference', destinations: [] },
  ] }));
  assert.match((await checkMigration(f)).errors.join('\n'), /out-of-scope owner/);
});
