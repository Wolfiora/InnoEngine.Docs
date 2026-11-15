import test from 'node:test';
import assert from 'node:assert/strict';
import { bootstrapPlan, selectPages, modeFor, reconcile } from '../scripts/ci-plan.mjs';
import { inputIdentity, eligible, passedJob } from '../scripts/ci-evidence.mjs';
const page = (id, extra = {}) => ({ id, path: `content/en/${id}.md`, title: id, kind: 'explanation', links: [], includes: [], contracts: [], codeBlocks: [], symbols: {}, sections: {}, markdown: id, contentIdentity: id, ...extra });
const catalog = { snapshot: 'snapshot', sourceFiles: {}, pages: [page('index'), page('a'), page('b', { links: ['a.md#heading'] }), page('c')] };
const plan = changed => bootstrapPlan({ mode: 'Incremental', changed, baseline: 'old', candidate: 'new' });
test('one-page edits render its inbound relationship and preview entry without unrelated pages or search', () => {
  const selected = selectPages(plan(['content/en/a.md']), catalog);
  assert.deepEqual(selected.pages.map(p => p.id), ['a', 'b', 'index']);
  assert.equal(selected.search, false); assert.equal(selected.browser, 'None');
});
test('removed pages still select their unchanged inbound callers', () => {
  const selected = selectPages(plan(['content/en/a.md']), { ...catalog, pages: catalog.pages.filter(p => p.id !== 'a') });
  assert.ok(selected.pages.some(p => p.id === 'b'));
});
test('records and README do not select a renderer, but unknown input expands conservatively', () => {
  assert.equal(plan(['README.md', '.agents/records/history/x.md']).prepare, false);
  assert.equal(plan(['unexpected.config']).prepare, true);
});
test('release, manual mode and required-result reconciliation fail closed', () => {
  assert.equal(modeFor({ pull_request: { base: { ref: 'main' } } }, 'pull_request', ''), 'Release');
  assert.throws(() => modeFor({ inputs: {} }, 'workflow_dispatch', ''), /require/);
  const selected = selectPages({ ...plan([]), mode: 'Release' }, catalog);
  assert.equal(selected.pages.length, 4); assert.equal(selected.search, true);
  assert.equal(reconcile(selected, []).status, 'Blocked');
  assert.equal(reconcile(selected, selected.checks.map(c => ({ id: c.id, status: 'Passed' }))).status, 'Passed');
});
test('publication identities exclude records but include tools, API bindings and page contents', () => {
  const inputs = [['content/en/a.md', 'one'], ['scripts/build-site.mjs', 'tool'], ['reference/engine.lock.json', 'api']];
  const key = inputIdentity(inputs);
  assert.equal(inputIdentity([...inputs, ['README.md', 'changed']]), key);
  for (let i = 0; i < inputs.length; i++) assert.notEqual(inputIdentity(inputs.map((v,j) => j === i ? [v[0], 'new'] : v)), key);
});
test('producer eligibility is not completion; an independently completed required job is explicit', () => {
  const run = { repository:{full_name:'Wolfiora/InnoEngine.Docs'},head_repository:{full_name:'Wolfiora/InnoEngine.Docs'},event:'pull_request',path:'.github/workflows/documentation.yml' };
  assert.equal(eligible(run), true);
  assert.equal(eligible({ ...run, head_repository:{full_name:'fork/docs'} }), false);
  assert.equal(passedJob([], 'check'), false);
  assert.equal(passedJob([{name:'check',status:'completed',conclusion:'success'}], 'check'), true);
});

test('API input changes select changed canonical composition and preserve exact-input page receipts',()=>{
 const previous={pages:Object.fromEntries(catalog.pages.map(p=>[p.path,{content:p.contentIdentity}]))};
 const changed={...catalog,pages:catalog.pages.map(p=>p.id==='a'?{...p,contentIdentity:'changed'}:p)};
 let selected=selectPages(plan(['reference/api/context.json']),changed,{previous,renderer:'renderer'});
 assert.ok(selected.pages.some(p=>p.id==='a'));assert.ok(!selected.pages.some(p=>p.id==='c'));
 for(const p of selected.pages) previous.pages[p.path]={content:changed.pages.find(x=>x.path===p.path).contentIdentity,input:p.input,render:'Passed',browser:'Passed'};
 selected=selectPages(plan(['content/en/a.md']),changed,{previous,renderer:'renderer'});
 assert.equal(selected.pages.length,0);assert.ok(selected.reusedPages.length>0);
 selected=selectPages(plan(['content/en/a.md']),changed,{previous,renderer:'changed-tool'});
 assert.ok(selected.pages.length>0);
});
