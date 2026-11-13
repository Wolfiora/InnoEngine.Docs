import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { documentationLinks } from '../scripts/documentation-links.mjs';
import { contentEntryId, contentRoute } from '../scripts/documentation-routes.mjs';

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

test('nested type punctuation has the same identity in loaders, links and rendered paths', () => fixture((root, transform) => {
  const entry = 'manual/SDL.Constants.md';
  writeFileSync(path.join(root, entry), '# SDL.Constants');
  assert.equal(contentEntryId(entry), 'manual/SDL.Constants');
  assert.equal(contentRoute(entry), 'manual/SDL.Constants');
  assert.equal(contentRoute('manual/index.md'), 'manual');
  assert.equal(contentEntryId('manual/index.md'), 'manual');
  assert.equal(contentEntryId('index.md'), 'index');
  const tree = { children: [{ type: 'link', url: entry }] };
  transform(tree, { path: path.join(root, 'index.md') });
  assert.equal(tree.children[0].url, '/InnoEngine.Docs/manual/SDL.Constants/');
  assert.throws(() => contentEntryId('../outside.md'));
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

test('public license and image links remain portable source paths with correct site routes', () => fixture((root) => {
  const assets = path.join(root, 'public');
  mkdirSync(assets);
  writeFileSync(path.join(assets, 'License.txt'), 'Original legal bytes');
  writeFileSync(path.join(assets, 'Diagram.svg'), '<svg/>');
  const transform = documentationLinks({ contentRoot: root, publicRoot: assets, base: '/InnoEngine.Docs' });
  const tree = { children: [{ type: 'link', url: '../public/License.txt' }, { type: 'image', url: '../public/Diagram.svg#view' }] };
  transform(tree, { path: path.join(root, 'manual', 'page.md') });
  assert.deepEqual(tree.children.map((item) => item.url), ['/InnoEngine.Docs/License.txt', '/InnoEngine.Docs/Diagram.svg#view']);
  assert.throws(() => transform({ children: [{ type: 'link', url: 'public/Absent.txt' }] }, { path: path.join(root, 'index.md') }), /Missing public/);
}));
