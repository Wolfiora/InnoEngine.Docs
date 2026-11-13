import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, writeFile, readFile, rm, mkdir, link } from 'node:fs/promises';
import { createPublication, verifyPublication } from '../scripts/publication-artifact.mjs';
import { createHash } from 'node:crypto';

async function fixture(t) {
  const site = await mkdtemp(path.join(os.tmpdir(), 'inno-publication-'));
  t.after(() => rm(site, { recursive: true, force: true }));
  await writeFile(path.join(site, 'index.html'), '<h1>Engine</h1>');
  await mkdir(path.join(site, 'manual'));
  await writeFile(path.join(site, 'manual/index.html'), '<h1>Manual</h1>');
  const catalog = { snapshot: 'a'.repeat(64), contentIdentity: 'b'.repeat(64), sourceApiStatus: 'Verified',
    references: [{ model: 'source-clr', configuration: 'Debug', target: null, identity: 'f'.repeat(64) }],
    repository: 'https://github.com/Wolfiora/InnoEngine', revision: 'c'.repeat(40), sourceTree: 'd'.repeat(40) };
  const completion = { status: 'Passed', scope: 'CompleteProjection', sourceApiStatus: 'Verified', errors: [],
    exampleEvidence: { status: 'Passed', required: 1, covered: 1 },
    snapshot: catalog.snapshot, contentIdentity: catalog.contentIdentity, api: { missingSourceCaptures: [] },
    apiInputsIdentity: createHash('sha256').update(JSON.stringify(catalog.references.map(reference => [reference.model, reference.configuration, reference.target, reference.identity]))).digest('hex'),
    exampleReceiptsIdentity: 'f'.repeat(64) };
  return { site, catalog, completion, repository: 'Wolfiora/InnoEngine.Docs', commit: 'e'.repeat(40), run: '123', attempt: 2 };
}

test('promotes exactly the verified files without rebuilding and preserves their bytes', async (t) => {
  const f = await fixture(t);
  const original = await readFile(path.join(f.site, 'index.html'));
  const created = await createPublication(f);
  assert.deepEqual(await verifyPublication(f), created);
  assert.deepEqual(await readFile(path.join(f.site, 'index.html')), original);
  await assert.rejects(createPublication(f), /EEXIST/);
});

test('a verification label cannot replace the exact selected API input set', async (t) => {
  const f = await fixture(t);
  f.catalog.references[0].identity = 'a'.repeat(64);
  await assert.rejects(createPublication(f), /exact API inputs/);
  f.catalog.references = [];
  await assert.rejects(createPublication(f), /exact API inputs/);
});

for (const state of ['Failed', 'Blocked', 'Skipped', 'Cancelled']) {
  test(`rejects ${state} completion`, async (t) => {
    const f = await fixture(t);
    f.completion.status = state;
    await assert.rejects(createPublication(f), /Only complete/);
  });
}

test('rejects missing captured owners, stale or partial completion', async (t) => {
  const f = await fixture(t);
  await assert.rejects(createPublication({ ...f, completion: { ...f.completion, api: { missingSourceCaptures: ['Owner'] } } }), /Only complete/);
  await assert.rejects(createPublication({ ...f, completion: { ...f.completion, snapshot: 'f'.repeat(64) } }), /exact catalog/);
  await assert.rejects(createPublication({ ...f, completion: { ...f.completion, scope: 'AvailableProjection' } }), /Only complete/);
});

for (const change of ['same-length', 'missing', 'extra', 'escape', 'run', 'attempt', 'commit', 'hard-link']) {
  test(`rejects ${change} artifact changes`, async (t) => {
    const f = await fixture(t);
    await createPublication(f);
    if (change === 'same-length') await writeFile(path.join(f.site, 'index.html'), '<h1>Broken</h1>');
    if (change === 'missing') await rm(path.join(f.site, 'index.html'));
    if (change === 'extra') await writeFile(path.join(f.site, 'extra.js'), 'unverified');
    if (change === 'hard-link') await link(path.join(f.site, 'index.html'), path.join(f.site, 'linked.html'));
    if (change === 'escape') {
      const manifest = JSON.parse(await readFile(path.join(f.site, 'publication.json'), 'utf8'));
      manifest.files['../outside'] = 'a'.repeat(64);
      await writeFile(path.join(f.site, 'publication.json'), JSON.stringify(manifest));
    }
    if (change === 'run') f.run = '124';
    if (change === 'attempt') f.attempt = 1;
    if (change === 'commit') f.commit = 'f'.repeat(40);
    await assert.rejects(verifyPublication(f), /differ|Invalid|another|unsupported link/);
  });
}
