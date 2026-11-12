/** Resolve certificate-local references; the authenticated certificate digest covers all tables. */
export function sourceInputEvidence(certificate) {
  const { sourceFiles, sourceSets, inputGroups, inputs, scriptReferences } = certificate;
  if (![sourceFiles, sourceSets, inputGroups, inputs, scriptReferences].every(Array.isArray)) {
    throw new Error('Source evidence lacks normalized input tables.');
  }
  for (const file of sourceFiles) {
    if (typeof file?.path !== 'string' || !file.path.trim() || /^[\/]/.test(file.path)
      || /[\\:\0]/.test(file.path) || file.path.split('/').some(part => part === '.' || part === '..')
      || !/^(?:[a-f0-9]{40}|[a-f0-9]{64}|missing)$/.test(file.identity ?? '')) {
      throw new Error('Source evidence contains an invalid file identity.');
    }
  }
  const index = (value, table) => Number.isSafeInteger(value) && value >= 0 && value < table.length;
  for (const set of sourceSets) {
    if (!Array.isArray(set) || !set.length || set.some(value => !index(value, sourceFiles))
      || new Set(set.map(value => sourceFiles[value].path)).size !== set.length) {
      throw new Error('Source evidence contains a missing or duplicated file reference.');
    }
  }
  const proofs = values => Array.isArray(values) && values.every(proof => index(proof?.sourceSet, sourceSets));
  if (!proofs(inputs)) throw new Error('Source evidence references a missing source set.');
  for (const group of inputGroups) {
    if (!group || typeof group.platform !== 'string' || !group.platform || typeof group.configuration !== 'string'
      || !group.configuration || !/^[a-f0-9]{64}$/.test(group.reportIdentity ?? '')
      || !proofs(group.inputs) || !group.inputs.length) throw new Error('Source evidence has an invalid input group.');
  }
  const resolve = context => {
    if (!index(context?.inputGroup, inputGroups)) throw new Error('Source evidence references a missing input group.');
    const group = inputGroups[context.inputGroup];
    for (const key of ['platform', 'configuration', 'target', 'reportIdentity']) {
      if ((context[key] ?? null) !== (group[key] ?? null)) throw new Error('Source evidence references a different execution context.');
    }
    return group;
  };
  for (const projection of scriptReferences) resolve(projection);
  return resolve;
}
