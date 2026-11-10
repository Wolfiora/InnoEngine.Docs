import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { checkProjection } from '../scripts/check-projection.mjs';

const digest = (text) => createHash('sha256').update(text).digest('hex');

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'inno-doc-projection-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const write = async (name, text) => {
    const target = path.join(root, name);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, text);
  };
  const body = '# Probe\n\nA useful introduction.\n';
  const projects = JSON.stringify([{ name: 'Probe', path: 'src/Probe.csproj', entry: null, surfaces: [] }]);
  const binding = { repository: 'https://github.com/Wolfiora/InnoEngine', revision: 'a'.repeat(40),
    sourceTree: 'b'.repeat(40), toolingRevision: 'c'.repeat(40), projectManifest: 'reference/projects.json', projectManifestIdentity: digest(projects) };
  const page = { id: 'probe', path: 'content/en/index.md', contentIdentity: digest(body), title: 'Probe', kind: 'project',
    owners: ['Probe'], surface: null, sections: { probe: 1 }, symbols: {}, contracts: [], includes: [] };
  const catalog = { ...binding, snapshot: 'd'.repeat(64), contentIdentity: digest(`${page.path}\0${page.contentIdentity}`),
    sourceApiStatus: 'Unverified', projects: { Probe: 'probe' }, pages: [page] };
  await write('content/en/index.md', body);
  await write('reference/engine.lock.json', JSON.stringify(binding));
  await write('reference/projects.json', projects);
  await write('navigation/en.yml', '- slug: ""\n');
  await write('dist/index.html', '<!doctype html><html lang="en"><body><h1 id="probe">Probe</h1></body></html>');
  return { root, site: path.join(root, 'dist'), catalog, write };
}

test('available projection is distinct from source API and complete publication acceptance', async (t) => {
  const f = await fixture(t);
  assert.equal((await checkProjection(f)).status, 'Passed');
  const complete = await checkProjection({ ...f, complete: true });
  assert.equal(complete.status, 'Failed');
  assert.match(complete.errors.join('\n'), /Unverified/);
});

test('same-size edits and new files invalidate canonical content without timestamps', async (t) => {
  const f = await fixture(t);
  await f.write('content/en/index.md', '# Probe\n\nA useful introductioN.\n');
  await f.write('content/en/added.md', '# Added\n');
  const result = await checkProjection(f);
  assert.match(result.errors.join('\n'), /exact current Markdown file set/);
  assert.match(result.errors.join('\n'), /Stale canonical content/);
});

test('missing rendered contracts, duplicate H1 and base path escapes fail', async (t) => {
  const f = await fixture(t);
  await f.write('dist/index.html', '<h1>Probe</h1><h1>Duplicate</h1><a href="/manual/">Manual</a>');
  const result = await checkProjection(f);
  assert.match(result.errors.join('\n'), /one rendered H1/);
  assert.match(result.errors.join('\n'), /Canonical anchor missing/);
  assert.match(result.errors.join('\n'), /base path/);
});

test('navigation, binding and project manifest tampering fail independently', async (t) => {
  const f = await fixture(t);
  f.catalog.sourceTree = 'e'.repeat(40);
  await f.write('navigation/en.yml', '- slug: absent\n');
  await f.write('reference/projects.json', '[{"name":"Other"}]');
  const result = await checkProjection(f);
  assert.match(result.errors.join('\n'), /binding differs: sourceTree/);
  assert.match(result.errors.join('\n'), /Project manifest identity differs/);
  assert.match(result.errors.join('\n'), /project coverage differs/);
  assert.match(result.errors.join('\n'), /Missing navigation route/);
});

test('missing project coverage remains visible and cannot certify complete publication', async (t) => {
  const f = await fixture(t);
  f.catalog.projects.Probe = null;
  const available = await checkProjection(f);
  assert.deepEqual(available.missingProjects, ['Probe']);
  assert.equal(available.status, 'Passed');
  const complete = await checkProjection({ ...f, complete: true });
  assert.equal(complete.status, 'Failed');
  assert.match(complete.errors.join('\n'), /lack an authoritative entry/);
});

test('a supplied catalog cannot read outside the explicit source root', async (t) => {
  const f = await fixture(t);
  f.catalog.pages[0].path = '../outside.md';
  await assert.rejects(checkProjection(f), /escapes its root/);
});
