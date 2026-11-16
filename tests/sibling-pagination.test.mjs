import test from 'node:test';
import assert from 'node:assert/strict';
import { sharedNavigation } from '../scripts/shared-navigation.mjs';
test('pagination stays within immediate siblings, including type members and singleton groups', () => {
  const result = sharedNavigation([
    {label:'Manual',items:[{slug:'manual/a',label:'A'}]},
    {label:'Architecture',items:[{slug:'architecture/overview',label:'Overview'},{slug:'architecture/next',label:'Next'}]},
    {label:'API',items:[{label:'Value',items:[{slug:'api/value',label:'Value',attrs:{'data-group-home':'true'}},{slug:'api/value/one',label:'One'},{slug:'api/value/two',label:'Two'}]}, {slug:'api/other',label:'Other'}]},
  ],{pages:[]});
  const at=route=>result.pagination.get('/InnoEngine.Docs/'+route+'/');
  assert.equal(at('manual/a').prev,undefined); assert.equal(at('manual/a').next,undefined);
  assert.equal(at('architecture/overview').prev,undefined);
  assert.equal(at('architecture/overview').next.href,'/InnoEngine.Docs/architecture/next/');
  assert.equal(at('api/value').next.href,'/InnoEngine.Docs/api/other/');
  assert.equal(at('api/value/one').prev,undefined);
  assert.equal(at('api/value/two').next,undefined);
  assert.equal(at('api/value/one').next.href,'/InnoEngine.Docs/api/value/two/');
});
