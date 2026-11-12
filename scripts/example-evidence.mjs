import { createHash } from 'node:crypto';

/** Compare canonical executable inputs with the independently authenticated compiler receipt. */
export function checkExampleEvidence(catalog, bytes) {
  const errors = [];
  const required = catalog.pages.filter(page => page.codeBlocks?.some(block => ['cs', 'csharp'].includes(block.language)
    && (block.declarationSymbols?.length ?? 0) === 0));
  if (!Buffer.isBuffer(bytes) || bytes.length === 0 || bytes.length > 4 * 1024 * 1024
    || createHash('sha256').update(bytes).digest('hex') !== catalog.sourceEvidenceIdentity) {
    return { status: 'Blocked', required: required.length, covered: 0, errors: ['Executable examples require the exact authenticated source certificate bytes.'] };
  }
  let certificate;
  try { certificate = JSON.parse(bytes.toString('utf8')); }
  catch { return { status: 'Failed', required: required.length, covered: 0, errors: ['Executable example certificate is malformed.'] }; }
  if (certificate.format !== 'inno-documentation-source/1' || certificate.repository !== catalog.repository
    || certificate.sourceTree !== catalog.sourceTree || !Array.isArray(certificate.examples)) {
    return { status: 'Blocked', required: required.length, covered: 0, errors: ['The source certificate lacks matching executable example coverage.'] };
  }
  const proofs = new Map();
  for (const proof of certificate.examples) {
    if (typeof proof?.page !== 'string' || proofs.has(proof.page)) { errors.push('Example certification has missing or duplicated page identities.'); continue; }
    proofs.set(proof.page, proof);
  }
  let covered = 0;
  for (const page of required) {
    const proof = proofs.get(page.id);
    const blocks = page.codeBlocks.filter(block => ['cs', 'csharp'].includes(block.language) && (block.declarationSymbols?.length ?? 0) === 0)
      .map(block => block.contentIdentity);
    if (!page.examples || !proof || proof.mode !== page.examples.mode || !Array.isArray(proof.projects)
      || JSON.stringify(proof.projects) !== JSON.stringify(page.examples.projects)
      || !Array.isArray(proof.blocks) || JSON.stringify(proof.blocks) !== JSON.stringify(blocks)
      || blocks.some(identity => !/^[a-f0-9]{64}$/.test(identity))
      || !Array.isArray(proof.contexts) || proof.contexts.length === 0
      || proof.contexts.some(context => typeof context.platform !== 'string' || context.platform.length === 0
        || !['Debug', 'SourceDebug', 'Release'].includes(context.configuration)
        || !/^[a-f0-9]{64}$/.test(context.reportIdentity ?? ''))) {
      errors.push(`Executable examples lack matching code, surface, owners or compiler evidence: ${page.id}.`);
    } else covered++;
  }
  return { status: errors.length ? 'Blocked' : 'Passed', required: required.length, covered, errors };
}
