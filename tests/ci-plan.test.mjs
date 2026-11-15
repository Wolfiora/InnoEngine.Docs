import test from 'node:test';
import assert from 'node:assert/strict';
import { bootstrapPlan, selectPages, modeFor, reconcile } from '../scripts/ci-plan.mjs';
import { inputIdentity, eligible, passedJob, trustedProducer, controlsIdentity, pageReceipts } from '../scripts/ci-evidence.mjs';
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
test('unrelated completed page checks survive subsequent partial runs without changing their provenance', () => {
  const previous = {pages:{'content/en/c.md':{content:'c',input:'original-input',render:'Passed',browser:'NotApplicable'}}};
  const selected = selectPages(plan(['content/en/a.md']), catalog);
  assert.deepEqual(pageReceipts(selected,catalog,previous)['content/en/c.md'],previous.pages['content/en/c.md']);
  const changed = {...catalog,pages:catalog.pages.map(p=>p.id==='c'?{...p,contentIdentity:'changed'}:p)};
  assert.deepEqual(pageReceipts(selected,changed,previous)['content/en/c.md'],{content:'changed'});
});
test('presentation browser checks use representatives rather than every linked context page', () => {
  const selected = selectPages(plan(['src/styles/documentation.css']), {...catalog,
    pages:[...catalog.pages, page('context', {links:['index.md']})]});
  assert.equal(selected.browser, 'Selected');
  assert.equal(selected.search, false);
  assert.ok(selected.browserPages.length > 0);
  assert.ok(selected.browserPages.length < selected.pages.length);
  assert.ok(selected.browserPages.every(p => selected.pages.some(rendered => rendered.path === p.path)));
});
test('records and README do not select a renderer, but unknown input expands conservatively', () => {
  assert.equal(plan(['README.md', '.agents/records/history/x.md']).prepare, false);
  assert.equal(plan(['unexpected.config']).prepare, true);
  assert.equal(plan(['.agents/tools/check.mjs']).prepare, true);
});
test('rendering entry points and browser configuration cannot select an empty validation plan', () => {
  for (const file of ['scripts/build-site.mjs','scripts/prepare-catalog.mjs','scripts/tooling-bundle.mjs',
    'playwright.config.ts','tests/browser/reading.spec.ts','tsconfig.json','.node-version']) {
    const selected = selectPages(plan([file]),catalog);
    assert.equal(selected.pages.length,catalog.pages.length,file);
    assert.equal(selected.browser,'Full',file);
    assert.equal(selected.search,true,file);
  }
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

test('API binding revisions do not invalidate an unchanged canonical tool', () => {
  const current = {...catalog, documentationToolIdentity:'tool', pages:catalog.pages.map(p=>p.id === 'a' ? {...p,contentIdentity:'new'} : p)};
  const previous = {tool:'tool',pages:Object.fromEntries(catalog.pages.map(p=>[p.path,{content:p.contentIdentity}]))};
  const selected = selectPages(plan(['reference/engine.lock.json','reference/api/context.json']),current,{previous});
  assert.ok(selected.pages.some(p=>p.id==='a'));
  assert.ok(!selected.pages.some(p=>p.id==='c'));
  assert.equal(selected.browser,'None');
  assert.equal(selectPages(plan(['reference/engine.lock.json']),{...current,documentationToolIdentity:'changed'},{previous}).pages.length,4);
});

test('publication cannot promote new control code from a draft run or a control-changing PR', async t => {
  const current = [['scripts/build-site.mjs','new-control']];
  const old = [['scripts/build-site.mjs','old-control']];
  const originalFetch = globalThis.fetch;
  t.after(()=>{globalThis.fetch=originalFetch;});
  globalThis.fetch = async url => ({ok:true,json:async()=>({truncated:false,tree:(String(url).includes('b'.repeat(40))?old:current).map(([path,sha])=>({path,sha,type:'blob'}))})});
  const run = {repository:{full_name:'Wolfiora/InnoEngine.Docs'},head_repository:{full_name:'Wolfiora/InnoEngine.Docs'},path:'.github/workflows/documentation.yml',head_sha:'a'.repeat(40),head_branch:'draft',event:'push'};
  assert.equal(await trustedProducer(run,controlsIdentity(current)),true);
  assert.equal(await trustedProducer(run,controlsIdentity(current),true),false);
  assert.equal(await trustedProducer({...run,event:'pull_request',pull_requests:[{base:{sha:'b'.repeat(40)}}]},controlsIdentity(current),true),false);
  assert.equal(await trustedProducer({...run,event:'pull_request',pull_requests:[{base:{sha:'a'.repeat(40)}}]},controlsIdentity(current),true),true);
});
