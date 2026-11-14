import test from 'node:test';
import assert from 'node:assert/strict';
import { documentationNavigation } from '../scripts/documentation-navigation.mjs';

test('custom content roots generate clickable category homes at arbitrary depth', () => {
  const categories = ['engine', 'engine/aaa', 'engine/aaa/bbb', 'engine/aaa/bbb/ccc', 'scripting', 'scripting/runtime'];
  const catalog = { pages: categories.map(category => ({ id: `api.directory.${category.replaceAll('/', '.')}`,
    path: `content/en/api/${category}/index.md`, title: category.split('/').at(-1) })) };
  catalog.pages.push({ id: 'api.some-type', kind: 'api', symbols: { 'T:Example.Value': {} }, path: 'content/en/api/engine/aaa/value/index.md', title: 'Value' });
  const navigation = documentationNavigation([{ label: 'API Reference', apiDirectories: true }], catalog);
  const engine = navigation[0].items[1];
  assert.equal(engine.label, 'Engine');
  assert.equal(engine.items[0].slug, 'api/engine');
  assert.equal(engine.items[0].attrs['data-group-home'], 'true');
  assert.equal(engine.items[1].items[1].items[1].slug, 'api/engine/aaa/bbb/ccc');
  assert.equal(engine.items[1].items[2].label, 'Value');
  assert.equal(navigation[0].items[2].items[1].slug, 'api/scripting/runtime');
});

test('all groups collapse by default and scope types sort alphabetically using canonical identities', () => {
  const pages = ['engine', 'scripting', 'scripting/authoring'].map(category => ({ id: `api.directory.${category}`,
    path: `content/en/api/${category}/index.md`, title: category.split('/').at(-1) }));
  for (const title of ['Zebra', 'Alpha.Nested', 'alpha']) pages.push({ id: `type.${title}`, kind: 'api', title,
    path: `content/en/api/scripting/authoring/${title}/index.md`, symbols: { [`T:Example.${title}`]: {} } });
  pages.push({ id: 'member', kind: 'api', title: 'alpha.Read', path: 'content/en/api/scripting/authoring/alpha/read.md', symbols: { 'M:Example.alpha.Read': {} } });
  const result = documentationNavigation([{ label: 'Manual', items: [{ label: 'Nested', items: [{ slug: 'manual' }] }] },
    { label: 'API Reference', apiDirectories: true }], { pages });
  function collapsed(items) { for (const item of items) if (item.items) { assert.equal(item.collapsed, true); collapsed(item.items); } }
  collapsed(result);
  const scope = result[1].items[2].items[1];
  assert.deepEqual(scope.items.slice(1).map(item => item.label), ['alpha', 'Alpha.Nested', 'Zebra']);
  assert.equal(scope.items[0].attrs['data-group-home'], 'true');
  assert.throws(() => documentationNavigation([], { pages: [{ kind: 'api', id: 'lost', title: 'Lost', path: 'content/en/unknown/index.md', symbols: { 'T:Lost': {} } }] }), /no canonical category/);
});

test('missing or duplicate API directories fail instead of producing empty menus', () => {
  const authored = [{ label: 'API Reference', apiDirectories: true }];
  assert.throws(() => documentationNavigation(authored, { pages: [] }), /Missing API directory/);
  const page = { id: 'api.directory.engine', path: 'content/en/api/engine/index.md' };
  assert.throws(() => documentationNavigation(authored, { pages: [page, page] }), /Duplicate API category/);
  assert.throws(() => documentationNavigation([{ autogenerate: { directory: 'api' } }], { pages: [] }), /filesystem guessing/);
});
