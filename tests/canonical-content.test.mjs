import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCanonicalContent } from '../scripts/canonical-content.mjs';

const hash = (value) => createHash('sha256').update(value).digest('hex');
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'inno-canonical-content-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const write = async (file, text) => {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), text);
  };
  const type = 'content/en/api/engine/probe/value/index.md';
  const member = 'content/en/api/engine/probe/value/value.read.md';
  const registry = 'reference/api/content.json';
  const sources = { [type]: 'Type prose', [member]: 'Manual member prose', [registry]: '{}' };
  const composed = '# Value.Read\n\npublic long Read()\n\nManual member prose\n';
  const catalog = { sourceFiles: Object.fromEntries(Object.entries(sources).map(([file, text]) => [file, hash(text)])),
    pages: [{ path: type, markdown: '# Value\n', contentIdentity: hash('# Value\n') },
      { path: member, markdown: composed, contentIdentity: hash(composed) }] };
  for (const [file, text] of Object.entries(sources)) await write(file, text);
  const save = () => write('artifacts/canonical-catalog.json', JSON.stringify(catalog));
  await save();
  return { root, write, save, catalog, member, type };
}

test('renders the canonical independent type and member pages', async (t) => {
  const f = await fixture(t);
  const result = await readCanonicalContent(f.root);
  assert.equal(result.pages.length, 2);
  assert.match(result.pages[1].markdown, /public long Read\(\)/);
  assert.match(result.pages[1].markdown, /Manual member prose/);
});

test('same-length member edits and removed registry inputs invalidate the prepared projection', async (t) => {
  const f = await fixture(t);
  await f.write(f.member, 'Manual member prosE');
  await assert.rejects(readCanonicalContent(f.root), /Stale documentation snapshot/);
});

test('new files cannot silently escape catalog coverage', async (t) => {
  const f = await fixture(t);
  await f.write('content/en/manual/new-task.md', '# New task');
  await assert.rejects(readCanonicalContent(f.root), /file set changed/);
});

test('composed-content corruption and path escape are rejected', async (t) => {
  const f = await fixture(t);
  f.catalog.pages[0].markdown += 'corrupt';
  await f.save();
  await assert.rejects(readCanonicalContent(f.root), /Invalid canonical page/);
  f.catalog.sourceFiles['content/en/../../../outside.md'] = 'a'.repeat(64);
  await f.save();
  await assert.rejects(readCanonicalContent(f.root), /Noncanonical/);
});
