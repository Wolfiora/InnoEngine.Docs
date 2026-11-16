import test from 'node:test';
import assert from 'node:assert/strict';
import {sharedNavigation} from '../scripts/shared-navigation.mjs';
test('disclosure rank precedes names and member cards follow the rendered table',()=>{
 const home=slug=>({slug,attrs:{'data-group-home':'true'},label:slug});
 const input=[{label:'Root',items:[{slug:'leaf',label:'A leaf'},
 {label:'Z linked',items:[home('linked'),{slug:'linked/child',label:'Child'}]},
 {label:'Z disclosure',items:[{slug:'plain/child',label:'Child'}]}]}];
 const nav=sharedNavigation(input,{pages:[]});
 const items=JSON.parse([...nav.chunks.values()].at(-1));
 assert.deepEqual(items.map(i=>i.label),['Z disclosure','Z linked','A leaf']);
 assert.equal(nav.pagination.get('/InnoEngine.Docs/linked/').next.href,'/InnoEngine.Docs/leaf/');
 const pages=[{path:'content/en/api/type/index.md',kind:'api',title:'Type',symbols:{'T:Type':{}},markdown:'## Members\n\n| Kind | Element | Description |\n| --- | --- | --- |\n| Constructors | [Z](z.md) | X |\n| Methods | [A](a.md) | X |'}];
 const result=sharedNavigation([{label:'Type',items:[home('api/type'),{slug:'api/type/a',label:'A'},{slug:'api/type/z',label:'Z'}]}],{pages});
 assert.equal(result.pagination.get('/InnoEngine.Docs/api/type/z/').next.href,'/InnoEngine.Docs/api/type/a/');
 assert.equal(result.pagination.get('/InnoEngine.Docs/api/type/z/').prev,undefined);
});
