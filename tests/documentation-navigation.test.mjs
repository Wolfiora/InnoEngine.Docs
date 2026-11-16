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
    { label: 'API Reference', apiDirectories: true }], { pages }, {entries:[
      {symbol:'type.alpha',type:'type.alpha',path:'content/en/api/scripting/authoring/alpha/index.md'},
      {symbol:'member',type:'type.alpha',path:'content/en/api/scripting/authoring/alpha/read.md'},
    ]});
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

test('registered member containment and secondary guides receive their own navigable entries', () => {
  const pages = ['engine', 'scripting'].map(category => ({ id: `api.directory.${category}`,
    path: `content/en/api/${category}/index.md`, title: category }));
  pages.push({id:'type',kind:'api',title:'Value',path:'content/en/api/engine/value/index.md',symbols:{'T:Value':{}}},
    {id:'member',kind:'api',title:'Value.Read',path:'content/en/api/engine/member.md',symbols:{'M:Value.Read':{}},contracts:['type']},
    {id:'overview',title:'Architecture',path:'content/en/architecture/index.md'},
    {id:'projects',title:'Projects',path:'content/en/architecture/projects/index.md'},
    {id:'project',title:'Example',path:'content/en/architecture/projects/example.md'});
  const result=documentationNavigation([{label:'API Reference',apiDirectories:true},
    {label:'Architecture',items:[{slug:'architecture'}]}],{pages},{entries:[
      {symbol:'type',type:'type',path:'content/en/api/engine/value/index.md'},
      {symbol:'member',type:'type',path:'content/en/api/engine/member.md'},
    ]});
  const type=result[0].items[1].items[1];
  assert.equal(type.items[0].slug,'api/engine/value');
  assert.equal(type.items[1].slug,'api/engine/member');
  assert.equal(result[1].items[0].items[1].items[1].slug,'architecture/projects/example');
});

test('nested type members use their registered owner instead of an earlier ancestor contract', () => {
  const pages = ['engine', 'scripting'].map(category => ({id:`api.directory.${category}`,
    path:`content/en/api/${category}/index.md`,title:category}));
  pages.push({id:'outer',kind:'api',title:'Outer',path:'content/en/api/engine/outer/index.md',symbols:{'T:Outer':{}}},
    {id:'inner',kind:'api',title:'Outer.Inner',path:'content/en/api/engine/inner/index.md',symbols:{'T:Outer.Inner':{}}},
    {id:'member',kind:'api',title:'Outer.Inner.Read',path:'content/en/api/engine/inner/read.md',symbols:{'M:Outer.Inner.Read':{}},contracts:['outer','inner']});
  const registry={entries:[{symbol:'inner',type:'inner',path:'content/en/api/engine/inner/index.md'},
    {symbol:'member',type:'inner',path:'content/en/api/engine/inner/read.md'}]};
  const navigation=documentationNavigation([{label:'API',apiDirectories:true}],{pages},registry);
  const engine=navigation[0].items[1];
  assert.equal(engine.items[1].slug,'api/engine/outer');
  assert.equal(engine.items[2].items[1].slug,'api/engine/inner/read');
  assert.throws(()=>documentationNavigation([{label:'API',apiDirectories:true}],{pages}),/no registered declaring type/);
});
