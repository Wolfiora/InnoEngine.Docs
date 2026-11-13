import test from 'node:test';
import assert from 'node:assert/strict';
import { documentationNavigation } from '../scripts/documentation-navigation.mjs';

test('custom content roots generate clickable category homes at arbitrary depth', () => {
  const categories = ['engine', 'engine/aaa', 'engine/aaa/bbb', 'engine/aaa/bbb/ccc', 'scripting', 'scripting/runtime'];
  const catalog = { pages: categories.map(category => ({ id: `api.directory.${category.replaceAll('/', '.')}`,
    path: `content/en/api/${category}/index.md`, title: category.split('/').at(-1) })) };
  catalog.pages.push({ id: 'api.some-type', path: 'content/en/api/engine/aaa/value/index.md', title: 'Value' });
  const navigation = documentationNavigation([{ label: 'API Reference', apiDirectories: true }], catalog);
  const engine = navigation[0].items[1];
  assert.equal(engine.label, 'Engine');
  assert.equal(engine.items[0].slug, 'api/engine');
  assert.equal(engine.items[0].attrs['data-group-home'], 'true');
  assert.equal(engine.items[1].items[1].items[1].slug, 'api/engine/aaa/bbb/ccc');
  assert.ok(!JSON.stringify(navigation).includes('/value'));
  assert.equal(navigation[0].items[2].items[1].slug, 'api/scripting/runtime');
});

test('missing or duplicate API directories fail instead of producing empty menus', () => {
  const authored = [{ label: 'API Reference', apiDirectories: true }];
  assert.throws(() => documentationNavigation(authored, { pages: [] }), /Missing API directory/);
  const page = { id: 'api.directory.engine', path: 'content/en/api/engine/index.md' };
  assert.throws(() => documentationNavigation(authored, { pages: [page, page] }), /Duplicate API category/);
  assert.throws(() => documentationNavigation([{ autogenerate: { directory: 'api' } }], { pages: [] }), /filesystem guessing/);
});
