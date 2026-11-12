import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { checkExampleEvidence } from '../scripts/example-evidence.mjs';

function fixture() {
  const page = { id: 'task.resource', contentIdentity: 'a'.repeat(64), examples: { mode: 'host', projects: ['Owner', 'Dependency'] },
    codeBlocks: [{ language: 'csharp', contentIdentity: 'b'.repeat(64), declarationSymbols: [] },
      { language: 'csharp', contentIdentity: 'c'.repeat(64), declarationSymbols: ['T:Owner'] }] };
  const catalog = { repository: 'https://github.com/Wolfiora/InnoEngine', sourceTree: 'd'.repeat(40), pages: [page] };
  const certificate = { format: 'inno-documentation-source/2', repository: catalog.repository, sourceTree: catalog.sourceTree,
    sourceFiles: [{ path: 'src/Owner.cs', identity: 'a'.repeat(64) }], sourceSets: [[0]], inputs: [{ sourceSet: 0 }], scriptReferences: [],
    inputGroups: [{ platform: 'host', configuration: 'Debug', target: null, reportIdentity: 'e'.repeat(64), inputs: [{ sourceSet: 0 }] }],
    examples: [{ page: page.id, mode: 'host', projects: ['Owner', 'Dependency'], blocks: ['b'.repeat(64)],
      contexts: [{ platform: 'host', configuration: 'Debug', target: null, reportIdentity: 'e'.repeat(64), inputGroup: 0 }] }] };
  return { catalog, certificate };
}

function evaluate(f) {
  const bytes = Buffer.from(JSON.stringify(f.certificate));
  f.catalog.sourceEvidenceIdentity = createHash('sha256').update(bytes).digest('hex');
  return checkExampleEvidence(f.catalog, bytes);
}

test('prose, page locations and reference declarations do not force unchanged examples to compile again', () => {
  const f = fixture();
  assert.equal(evaluate(f).status, 'Passed');
  f.catalog.pages[0].contentIdentity = 'f'.repeat(64);
  f.catalog.pages[0].path = 'content/en/manual/renamed.md';
  f.catalog.pages[0].codeBlocks[0].line = 90;
  f.catalog.pages[0].codeBlocks[1].contentIdentity = '0'.repeat(64);
  assert.deepEqual(evaluate(f), { status: 'Passed', required: 1, covered: 1, errors: [] });
});

for (const [name, change] of [
  ['changed executable code', f => { f.catalog.pages[0].codeBlocks[0].contentIdentity = 'f'.repeat(64); }],
  ['missing group', f => { f.certificate.examples[0].contexts[0].inputGroup = 1; }],
  ['negative group', f => { f.certificate.examples[0].contexts[0].inputGroup = -1; }],
  ['different group report', f => { f.certificate.inputGroups[0].reportIdentity = 'f'.repeat(64); }],
  ['different group platform', f => { f.certificate.inputGroups[0].platform = 'foreign'; }],
  ['missing source set', f => { f.certificate.inputGroups[0].inputs[0].sourceSet = 9; }],
  ['missing source file', f => { f.certificate.sourceSets[0] = [9]; }],
  ['duplicate source file', f => { f.certificate.sourceSets[0] = [0, 0]; }],
  ['escaping source path', f => { f.certificate.sourceFiles[0].path = '../secret'; }],
  ['corrupt source identity', f => { f.certificate.sourceFiles[0].identity = 'unknown'; }],
  ['new executable block', f => { f.catalog.pages[0].codeBlocks.push({ language: 'cs', contentIdentity: 'f'.repeat(64), declarationSymbols: [] }); }],
  ['different API surface', f => { f.catalog.pages[0].examples.mode = 'runtime-script'; }],
  ['different reference owner', f => { f.catalog.pages[0].examples.projects[0] = 'Other'; }],
  ['reordered reference owners', f => { f.catalog.pages[0].examples.projects.reverse(); }],
  ['missing example context', f => { delete f.catalog.pages[0].examples; }],
  ['missing compiler evidence', f => { f.certificate.examples[0].contexts = []; }],
  ['unhashed compiler evidence', f => { f.certificate.examples[0].contexts[0].reportIdentity = 'unknown'; }],
  ['missing coverage', f => { f.certificate.examples = []; }],
  ['duplicate coverage', f => { f.certificate.examples.push(f.certificate.examples[0]); }],
  ['old certificate without examples', f => { delete f.certificate.examples; }],
  ['changed engine inputs', f => { f.catalog.sourceTree = 'f'.repeat(40); }]
]) test(`rejects ${name}`, () => { const f = fixture(); change(f); assert.notEqual(evaluate(f).status, 'Passed'); });

test('an unauthenticated, tampered or absent certificate cannot claim example coverage', () => {
  const f = fixture();
  evaluate(f);
  assert.equal(checkExampleEvidence(f.catalog).status, 'Blocked');
  assert.equal(checkExampleEvidence(f.catalog, Buffer.from('{}')).status, 'Blocked');
});
