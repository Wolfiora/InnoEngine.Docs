import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { sharedNavigation } from '../scripts/shared-navigation.mjs';

test('shared navigation retains linked and disclosure-only groups without embedding descendants', () => {
  const pages = [{ path: 'content/en/manual/index.md', title: 'Manual' }, { path: 'content/en/api/type/index.md', title: 'Value' }];
  const input = [{ label: 'Manual', items: [{ slug: 'manual' }] }, { label: 'API', items: [
    { slug: 'api', label: 'API', attrs: { 'data-group-home': 'true' } }, { slug: 'api/type' },
  ] }];
  const result = sharedNavigation(input, { pages });
  assert.equal(result.roots[0].href, undefined);
  assert.equal(result.roots[1].href, '/InnoEngine.Docs/api/');
  assert.equal(JSON.stringify(result.roots).includes('Value'), false);
  assert.equal(result.chunks.size, 2);
  for (const [id, body] of result.chunks) assert.equal(createHash('sha256').update(body).digest('hex'), id);
  const api = JSON.parse(result.chunks.get(result.roots[1].children.split('/').pop().replace('.json','')));
  assert.deepEqual(api, [{ label: 'Value', href: '/InnoEngine.Docs/api/type/' }]);
  assert.deepEqual(sharedNavigation(input, { pages }).roots, result.roots);
});
