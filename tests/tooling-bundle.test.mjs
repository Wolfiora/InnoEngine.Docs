import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { moduleInputs } from '../scripts/tooling-bundle.mjs';

test('checker inputs follow static and dynamic imports, handle cycles and exclude unrelated modules', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'inno-checker-inputs-'));
  t.after(() => rm(root, { recursive:true, force:true }));
  await writeFile(path.join(root,'entry.mjs'), "import './shared.mjs'; await import('./dynamic.mjs');");
  await writeFile(path.join(root,'shared.mjs'), "export * from './entry.mjs';");
  await writeFile(path.join(root,'dynamic.mjs'), 'export const value = 1;');
  await writeFile(path.join(root,'unrelated.mjs'), 'unrelated');
  const first = await moduleInputs(['entry.mjs'], root);
  assert.deepEqual(first.map(([file])=>file), ['dynamic.mjs','entry.mjs','shared.mjs']);
  await writeFile(path.join(root,'unrelated.mjs'), 'unrelated change');
  assert.deepEqual(await moduleInputs(['entry.mjs'], root), first);
  await writeFile(path.join(root,'dynamic.mjs'), 'export const value = 2;');
  assert.notDeepEqual(await moduleInputs(['entry.mjs'], root), first);
  await writeFile(path.join(root,'dynamic.mjs'), "import '../outside.mjs';");
  await assert.rejects(moduleInputs(['entry.mjs'], root), /escaped/);
});
