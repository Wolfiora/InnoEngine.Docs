import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { checkExampleEvidence } from '../scripts/example-evidence.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
function fixture() {
  const block = { language: 'csharp', text: 'var value = Owner.Read();', declarationSymbols: [] };
  block.contentIdentity = hash(block.text);
  const page = { id: 'task.resource', contentIdentity: 'a'.repeat(64), examples: { mode: 'host', projects: ['Owner', 'Dependency'] },
    codeBlocks: [block, { language: 'csharp', contentIdentity: 'c'.repeat(64), declarationSymbols: ['T:Owner'] }] };
  const catalog = { repository: 'https://github.com/Wolfiora/InnoEngine', toolingRevision: 'e'.repeat(40), pages: [page],
    references: [{ model: 'source-clr', configuration: 'Debug', target: null, identity: 'd'.repeat(64) }] };
  const report = { schema: 'inno-documentation-examples/1', repository: catalog.repository, toolingRevision: catalog.toolingRevision,
    validatorIdentity: 'e'.repeat(64), compilerIdentity: 'f'.repeat(64), apiInputs: structuredClone(catalog.references),
    status: 'Passed', configuration: 'Debug', scriptReferences: [], results: [{ page: page.id, mode: 'host', projects: ['Owner', 'Dependency'],
      blocks: [structuredClone(block)], status: 'Passed', references: { 'Owner.dll': '0'.repeat(64) }, errors: [] }] };
  return { catalog, report };
}
function evaluate(f) {
  const bytes = Buffer.from(JSON.stringify(f.report));
  return checkExampleEvidence(f.catalog, [{ identity: hash(bytes), bytes }]);
}

test('prose, page moves, declarations and unrelated engine head do not invalidate unchanged examples', () => {
  const f = fixture();
  assert.equal(evaluate(f).status, 'Passed');
  f.catalog.pages[0].contentIdentity = 'f'.repeat(64);
  f.catalog.pages[0].path = 'content/en/manual/renamed.md';
  f.catalog.pages[0].codeBlocks[0].line = 90;
  f.catalog.pages[0].codeBlocks[1].contentIdentity = '0'.repeat(64);
  f.catalog.currentEngineHead = 'b'.repeat(40);
  assert.deepEqual(evaluate(f), { status: 'Passed', required: 1, covered: 1, errors: [] });
});

for (const [name, change] of [
  ['changed executable code', f => { f.catalog.pages[0].codeBlocks[0].text = 'Owner.Missing();'; }],
  ['new executable block', f => { f.catalog.pages[0].codeBlocks.push(f.catalog.pages[0].codeBlocks[0]); }],
  ['different API surface', f => { f.catalog.pages[0].examples.mode = 'runtime-script'; }],
  ['different owner', f => { f.catalog.pages[0].examples.projects[0] = 'Other'; }],
  ['reordered owners', f => { f.catalog.pages[0].examples.projects.reverse(); }],
  ['missing context', f => { delete f.catalog.pages[0].examples; }],
  ['missing references', f => { f.report.results[0].references = {}; }],
  ['unhashed references', f => { f.report.results[0].references['Owner.dll'] = 'unknown'; }],
  ['missing group', f => { f.report.results = []; }],
  ['duplicate group', f => { f.report.results.push(f.report.results[0]); }],
  ['failed group', f => { f.report.results[0].status = 'Failed'; }],
  ['reported compiler error', f => { f.report.results[0].errors = ['CS0000']; }],
  ['failed projection comparison', f => { f.report.scriptReferences = [{ status: 'Failed' }]; }],
  ['changed selected API', f => { f.catalog.references[0].identity = 'f'.repeat(64); }],
  ['changed compiler tooling', f => { f.catalog.toolingRevision = 'f'.repeat(40); }],
  ['missing validator identity', f => { delete f.report.validatorIdentity; }],
  ['invalid compiler identity', f => { f.report.compilerIdentity = 'unknown'; }],
  ['wrong repository', f => { f.report.repository = 'https://example.com/foreign'; }],
  ['failed report', f => { f.report.status = 'Failed'; }],
  ['old full-engine certificate', f => { f.report.schema = 'inno-documentation-source/2'; }],
]) test(`rejects ${name}`, () => { const f = fixture(); change(f); assert.notEqual(evaluate(f).status, 'Passed'); });

test('missing, tampered, duplicated and malformed receipt bytes cannot certify examples', () => {
  const f = fixture();
  assert.equal(checkExampleEvidence(f.catalog).status, 'Blocked');
  const bytes = Buffer.from(JSON.stringify(f.report));
  const receipt = { identity: hash(bytes), bytes };
  assert.equal(checkExampleEvidence(f.catalog, [receipt, receipt]).status, 'Blocked');
  assert.equal(checkExampleEvidence(f.catalog, [{ ...receipt, bytes: Buffer.from('{}') }]).status, 'Blocked');
  const bad = Buffer.from('{bad');
  assert.equal(checkExampleEvidence(f.catalog, [{ identity: hash(bad), bytes: bad }]).status, 'Blocked');
});

test('a page set without executable examples needs no compiler job or engine certificate', () => {
  const f = fixture();
  f.catalog.pages[0].codeBlocks.shift();
  assert.deepEqual(checkExampleEvidence(f.catalog), { status: 'Passed', required: 0, covered: 0, errors: [] });
});

test('script compilation needs actual matching logical projection comparisons', () => {
  const f = fixture();
  f.catalog.pages[0].examples.mode = f.report.results[0].mode = 'runtime-script';
  const projected = { model: 'runtime-script', configuration: 'Debug', target: null, identity: 'a'.repeat(64) };
  f.catalog.references.push(projected);
  f.report.apiInputs.push(projected);
  assert.equal(evaluate(f).status, 'Blocked');
  f.report.scriptReferences.push({ ...projected, status: 'Passed', differences: [], documentationIdentity: 'b'.repeat(64),
    projectionIdentities: { 'Inno.ScriptApi.Runtime': 'c'.repeat(64) } });
  assert.equal(evaluate(f).status, 'Passed');
  f.report.scriptReferences[0].identity = 'd'.repeat(64);
  assert.equal(evaluate(f).status, 'Blocked');
});

test('script receipts select an exact target without requiring another platform compiler', () => {
  const f = fixture();
  f.catalog.pages[0].examples.mode = f.report.results[0].mode = 'runtime-script';
  f.report.target = 'windows-x64';
  const selected = { model: 'runtime-script', configuration: 'Debug', target: 'windows-x64', identity: 'a'.repeat(64) };
  const foreign = { ...selected, target: 'macos-arm64', identity: 'b'.repeat(64) };
  f.catalog.references.push(selected, foreign);
  f.report.apiInputs.push(selected, foreign);
  f.report.scriptReferences.push({ ...selected, status: 'Passed', differences: [], documentationIdentity: 'c'.repeat(64),
    projectionIdentities: { 'Inno.ScriptApi.Runtime': 'd'.repeat(64) } });
  assert.equal(evaluate(f).status, 'Passed');
  f.report.scriptReferences[0].target = 'macos-arm64';
  assert.equal(evaluate(f).status, 'Blocked');
  f.report.target = 'unknown';
  assert.equal(evaluate(f).status, 'Blocked');
});
