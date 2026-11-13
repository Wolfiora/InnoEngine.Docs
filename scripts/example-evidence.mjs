import { createHash } from 'node:crypto';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const hex = value => typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
const executable = page => (page.codeBlocks ?? []).filter(block => ['cs', 'csharp'].includes(block.language)
  && (block.declarationSymbols?.length ?? 0) === 0);
const inputs = references => references.filter(reference => reference.model !== 'project-inventory')
  .map(reference => JSON.stringify([reference.model, reference.configuration, reference.target ?? null, reference.identity])).sort();
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/** Validate scoped compiler receipts from an explicitly authenticated artifact or reviewed reference manifest.
 * The caller authenticates receipt bytes; this reader verifies their exact code, inputs and outcomes.
 * No full engine certificate, current engine branch head or network request is needed.
 */
export function checkExampleEvidence(catalog, receipts = []) {
  const required = catalog.pages.filter(page => executable(page).length !== 0);
  const errors = [];
  const proofs = new Map();
  const reportIdentities = new Set();
  if (!Array.isArray(receipts)) return { status: 'Blocked', required: required.length, covered: 0,
    errors: ['Example receipts must be an explicitly selected collection.'] };
  for (const receipt of receipts) {
    if (!Buffer.isBuffer(receipt?.bytes) || receipt.bytes.length === 0 || receipt.bytes.length > 16 * 1024 * 1024
      || !hex(receipt.identity) || hash(receipt.bytes) !== receipt.identity || reportIdentities.has(receipt.identity)) {
      errors.push('An example receipt is absent, tampered, duplicated or oversized.'); continue;
    }
    reportIdentities.add(receipt.identity);
    let report;
    try { report = JSON.parse(receipt.bytes.toString('utf8')); }
    catch { errors.push('An example compiler receipt is malformed.'); continue; }
    if (report.schema !== 'inno-documentation-examples/1' || report.status !== 'Passed'
      || report.repository !== catalog.repository || report.toolingRevision !== catalog.toolingRevision
      || !hex(report.validatorIdentity) || !hex(report.compilerIdentity)
      || !Array.isArray(report.apiInputs) || report.apiInputs.some(input => !hex(input.identity))
      || !equal(inputs(report.apiInputs), inputs(catalog.references ?? []))
      || !['Debug', 'SourceDebug', 'Release'].includes(report.configuration)
      || !Array.isArray(report.results) || report.results.length === 0
      || !Array.isArray(report.scriptReferences) || report.scriptReferences.some(reference => reference.status !== 'Passed')) {
      errors.push('Example receipt does not bind successful compilation to the selected API/tool inputs.'); continue;
    }
    for (const result of report.results) {
      const requiredProjections = result.mode === 'editor-script' ? ['runtime-script', 'editor-script']
        : result.mode === 'runtime-script' ? ['runtime-script'] : [];
      const projectionsMatch = requiredProjections.every(model => {
        const selected = report.apiInputs.filter(input => input.model === model && input.configuration === report.configuration);
        return selected.length > 0 && selected.every(input => report.scriptReferences.some(proof => proof.model === model
          && proof.configuration === report.configuration && proof.identity === input.identity && proof.status === 'Passed'
          && Array.isArray(proof.differences) && proof.differences.length === 0 && hex(proof.documentationIdentity)
          && proof.projectionIdentities && Object.keys(proof.projectionIdentities).length > 0
          && Object.values(proof.projectionIdentities).every(hex)));
      });
      if (typeof result.page !== 'string' || proofs.has(result.page) || result.status !== 'Passed'
        || !projectionsMatch
        || !Array.isArray(result.errors) || result.errors.length !== 0
        || !result.references || Object.keys(result.references).length === 0
        || Object.values(result.references).some(identity => !hex(identity))) {
        errors.push('Example receipt has duplicate, failed or incomplete compilation groups.'); continue;
      }
      proofs.set(result.page, result);
    }
  }
  let covered = 0;
  for (const page of required) {
    const proof = proofs.get(page.id);
    const blocks = executable(page);
    if (!page.examples || !proof || proof.mode !== page.examples.mode
      || !Array.isArray(proof.projects) || !equal(proof.projects, page.examples.projects)
      || !Array.isArray(proof.blocks) || !equal(proof.blocks.map(block => block.contentIdentity), blocks.map(block => block.contentIdentity))
      || blocks.some(block => !hex(block.contentIdentity) || typeof block.text !== 'string' || hash(block.text) !== block.contentIdentity)
      || proof.blocks.some(block => typeof block.text !== 'string' || hash(block.text) !== block.contentIdentity
        || !['cs', 'csharp'].includes(block.language) || (block.declarationSymbols?.length ?? 0) !== 0)) {
      errors.push(`Executable examples lack matching code, surface, owners or compiler evidence: ${page.id}.`);
    } else covered++;
  }
  return { status: errors.length ? 'Blocked' : 'Passed', required: required.length, covered, errors };
}
