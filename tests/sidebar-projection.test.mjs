import test from 'node:test';
import assert from 'node:assert/strict';
import { sharedNavigation } from '../scripts/shared-navigation.mjs';
import { sidebarProjection } from '../scripts/sidebar-projection.mjs';

test('sidebar hides members, keeps real nested types, and does not change pagination', () => {
  const home = slug => ({slug, label:slug, attrs:{'data-group-home':'true'}});
  const input = [{label:'API',items:[home('api'),
    {label:'Outer',items:[home('api/outer'),{slug:'api/outer/a'},{slug:'api/outer/b'}]},
    {label:'Inner',items:[home('api/inner'),{slug:'api/inner/read'}]},
    {slug:'api/leaf',label:'Leaf'},
  ]}];
  const members=['api/outer/a','api/outer/b','api/inner/read'];
  const pages=[...members,...['api/outer','api/inner','api/leaf']].map(slug=>({path:`content/en/${slug}.md`,title:slug,kind:'api',
    symbols:{[`${members.includes(slug)?'M':'T'}:${slug}`]:{}}}));
  const parents=new Map([['api/inner','api/outer']]);
  const before=JSON.stringify(input);
  const result=sharedNavigation(input,{pages},'/InnoEngine.Docs',parents);
  const unfiltered=sharedNavigation(input,{pages:pages.map(p=>({...p,kind:'ordinary'}))});
  assert.deepEqual(result.pagination,unfiltered.pagination);
  assert.equal(result.pagination.get('/InnoEngine.Docs/api/outer/a/').next.href,'/InnoEngine.Docs/api/outer/b/');
  const all=[...result.chunks.values()].join('');
  for(const member of members)assert.equal(all.includes(member+'/'),false);
  assert.deepEqual(result.trails.get('/InnoEngine.Docs/api/inner/'),['/InnoEngine.Docs/api/','/InnoEngine.Docs/api/outer/']);
  const projected=sidebarProjection(input,{pages},parents)[0].items;
  assert.equal(projected.find(i=>i.label==='Leaf').items,undefined);
  const outer=projected.find(i=>i.label==='Outer');
  assert.equal(outer.items.length,2);
  assert.equal(outer.items[1].slug,'api/inner');
  assert.equal(outer.items[1].items,undefined);
  assert.equal(JSON.stringify(input),before);
  assert.throws(()=>sidebarProjection(input,{pages},new Map([['api/outer','api/inner'],['api/inner','api/outer']])),/Cyclic/);
});
