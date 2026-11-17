import test from 'node:test';
import assert from 'node:assert/strict';
import { documentationNavigation } from '../scripts/documentation-navigation.mjs';
import { sharedNavigation } from '../scripts/shared-navigation.mjs';

test('script scopes use canonical project links without moving existing type URLs', () => {
  const categories = ['engine','scripting','scripting/runtime','scripting/runtime/_projects/scene','scripting/runtime/_projects/core','scripting/runtime/_projects/core/collections'];
  const pages = categories.map(category => ({id:`api.directory.${category}`,path:`content/en/api/${category}/index.md`,title:category.split('/').at(-1),links:[]}));
  pages.find(p=>p.path.includes('/_projects/scene/')).links=['../../scenemanager/index.md','../../scenestate/index.md'];
  pages.find(p=>p.path.includes('/_projects/core/collections/')).links=['../../../graph/index.md'];
  for(const name of ['SceneManager','SceneState','Graph']) pages.push({id:`api.${name}`,kind:'api',title:name,path:`content/en/api/scripting/runtime/${name.toLowerCase()}/index.md`,symbols:{[`T:Example.${name}`]:{}}});
  const navigation=documentationNavigation([{label:'API Reference',apiDirectories:true}],{pages});
  const scope=navigation[0].items[2].items[1];
  assert.deepEqual(scope.items.slice(1).map(x=>x.label),['core','scene']);
  const scene=scope.items[2];
  assert.deepEqual(scene.items.slice(1).map(x=>x.label),['SceneManager','SceneState']);
  assert.equal(scene.items[1].slug,'api/scripting/runtime/scenemanager');
  const shared=sharedNavigation(navigation,{pages});
  const peers=shared.pagination.get('/InnoEngine.Docs/api/scripting/runtime/scenemanager/');
  assert.equal(peers.prev,undefined);
  assert.equal(peers.next.href,'/InnoEngine.Docs/api/scripting/runtime/scenestate/');
});
