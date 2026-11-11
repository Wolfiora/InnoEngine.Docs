import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { selectDocumentedSymbols } from '../scripts/api-scope.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
function fixture() {
  const source = 'backends/Probe/runtime/Probe/GeneratedIcons.cs';
  const capture = { sourceRevision: 'a'.repeat(40), sourceTree: 'b'.repeat(40) };
  const generated = [
    { id: 'T:Probe.Icons', kind: 'NamedType', signature: 'public static class Probe.Icons', source },
    { id: 'F:Probe.Icons.File', kind: 'Field', signature: 'public const string Probe.Icons.File = "x"', containingType: 'T:Probe.Icons', source }
  ].map(symbol => ({ ...symbol, signatureHash: hash(symbol.signature) }));
  const engine = { id: 'T:Probe.Adapter', kind: 'NamedType', signature: 'public class Probe.Adapter', source: 'backends/Probe/runtime/Probe/Adapter.cs' };
  engine.signatureHash = hash(engine.signature);
  const project = { name: 'Probe', project: 'backends/Probe/runtime/Probe/Probe.csproj', symbols: [...generated, engine] };
  const exclusion = { kind: 'generated-third-party-catalog', source, ...capture, sourceIdentity: 'c'.repeat(64),
    upstream: 'https://example.org/icons', reason: 'Generated upstream glyph catalog; managed adapter remains documented.',
    symbolCount: generated.length, symbolIdentity: hash(generated.map(s => `${s.id}\0${s.signatureHash}`).sort().join('\n')) };
  return { project, owner: { apiCatalogExclusions: [exclusion] }, capture, exclusion };
}

test('reviewed catalog exclusion retains complete extraction and selects only the managed contracts', () => {
  const f = fixture(); const result = selectDocumentedSymbols(f.project, f.owner, f.capture);
  assert.deepEqual(result.symbols.map(s => s.id), ['T:Probe.Adapter']);
  assert.equal(result.excluded.length, 2);
  assert.equal(f.project.symbols.length, 3);
});

test('changed source capture and declaration set invalidate the reviewed scope', () => {
  const f = fixture();
  assert.throws(() => selectDocumentedSymbols(f.project, f.owner, { ...f.capture, sourceTree: 'd'.repeat(40) }), /provenance/);
  f.project.symbols[1].signatureHash = '0'.repeat(64);
  assert.throws(() => selectDocumentedSymbols(f.project, f.owner, f.capture), /identity changed/);
});

test('duplicate extraction cannot hide a managed declaration behind an excluded identity', () => {
  const f = fixture();
  f.project.symbols.push({ ...f.project.symbols[0], source: 'backends/Probe/runtime/Probe/Adapter.cs' });
  assert.throws(() => selectDocumentedSymbols(f.project, f.owner, f.capture), /Duplicate extracted symbol/);
});

test('exclusion cannot cross a project boundary, escape a path or exempt tests', () => {
  for (const edit of [f => f.exclusion.source = '../Generated.cs', f => f.project.project = 'src/Probe.csproj',
    f => f.owner.isTest = true, f => f.exclusion.kind = 'ignore-public-api', f => f.owner.apiCatalogExclusions.push(f.exclusion)]) {
    const f = fixture(); edit(f);
    assert.throws(() => selectDocumentedSymbols(f.project, f.owner, f.capture), /Invalid generated catalog/);
  }
});

test('executable contracts and partial types cannot disappear under a catalog classification', () => {
  const f = fixture();
  f.project.symbols[1].kind = 'Method';
  assert.throws(() => selectDocumentedSymbols(f.project, f.owner, f.capture), /executable contract/);
  f.project.symbols[1].kind = 'Field';
  f.project.symbols[2].containingType = 'T:Probe.Icons';
  assert.throws(() => selectDocumentedSymbols(f.project, f.owner, f.capture), /splits a type/);
});
