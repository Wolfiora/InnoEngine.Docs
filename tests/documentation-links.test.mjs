import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { documentationLinks } from '../scripts/documentation-links.mjs';

function fixture(run) {
  const root = mkdtempSync(path.join(tmpdir(), 'inno-doc-links-'));
  try {
    mkdirSync(path.join(root, 'manual'));
    writeFileSync(path.join(root, 'index.md'), '# Home');
    writeFileSync(path.join(root, 'manual', 'index.md'), '# Manual');
    writeFileSync(path.join(root, 'manual', 'page.md'), '# Page');
    run(root, documentationLinks({ contentRoot: root, base: '/InnoEngine.Docs' }));
  } finally { rmSync(root, { recursive: true, force: true }); }
}

test('source and reference-style links preserve anchors and the Pages base path', () => fixture((root, transform) => {
  const tree = { children: [{ type: 'link', url: 'manual/index.md#tasks' }, { type: 'definition', url: 'manual/page.md' }] };
  transform(tree, { path: path.join(root, 'index.md') });
  assert.deepEqual(tree.children.map(item => item.url), ['/InnoEngine.Docs/manual/#tasks', '/InnoEngine.Docs/manual/page/']);
}));

test('links back to the home page do not create an index route', () => fixture((root, transform) => {
  const tree = { children: [{ type: 'link', url: '../index.md' }] };
  transform(tree, { path: path.join(root, 'manual', 'page.md') });
  assert.equal(tree.children[0].url, '/InnoEngine.Docs/');
}));

test('missing and escaping links fail without rewriting unrelated URLs', () => fixture((root, transform) => {
  for (const url of ['absent.md', '../outside.md', '%2e%2e/outside.md']) {
    assert.throws(() => transform({ children: [{ type: 'link', url }] }, { path: path.join(root, 'index.md') }));
  }
  const urls = ['https://example.com/readme.md', '#local', 'image.svg'];
  const tree = { children: urls.map(url => ({ type: 'link', url })) };
  transform(tree, { path: path.join(root, 'index.md') });
  assert.deepEqual(tree.children.map(item => item.url), urls);
}));
