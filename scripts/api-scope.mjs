import path from 'node:path';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const digest = (value) => createHash('sha256').update(value).digest('hex');

/** Apply reviewed, capture-bound catalog exclusions without discarding extraction facts. */
export function selectDocumentedSymbols(project, owner, capture) {
  const identities = new Set();
  for (const symbol of project.symbols) {
    if (identities.has(symbol.id)) throw new Error(`Duplicate extracted symbol identity: ${symbol.id}.`);
    identities.add(symbol.id);
  }
  const excluded = new Map();
  const sources = new Set();
  for (const exclusion of owner.apiCatalogExclusions ?? []) {
    const source = exclusion.source;
    const directory = path.posix.dirname(project.project) + '/';
    if (exclusion.kind !== 'generated-third-party-catalog'
      || typeof source !== 'string' || !source.startsWith(directory)
      || source.includes('\\') || source.split('/').includes('..') || !source.endsWith('.cs')
      || !/^backends\/[^/]+\/runtime\//.test(project.project) || owner.isTest
      || sources.has(source)) {
      throw new Error(`Invalid generated catalog exclusion: ${project.name}.`);
    }
    sources.add(source);
    if (exclusion.sourceRevision !== capture.sourceRevision || exclusion.sourceTree !== capture.sourceTree
      || !/^[a-f0-9]{64}$/.test(exclusion.sourceIdentity ?? '')
      || !/^https:\/\//.test(exclusion.upstream ?? '') || !exclusion.reason?.trim()) {
      throw new Error(`Generated catalog exclusion lacks matching source provenance: ${source}.`);
    }
    const symbols = project.symbols.filter(symbol => symbol.source === source);
    const identity = digest(symbols.map(symbol => `${symbol.id}\0${symbol.signatureHash}`).sort().join('\n'));
    if (!symbols.length || symbols.length !== exclusion.symbolCount || identity !== exclusion.symbolIdentity) {
      throw new Error(`Generated catalog declaration identity changed: ${source}.`);
    }
    // This narrow classification cannot hide executable adapter contracts or a partial type.
    for (const symbol of symbols) {
      if (symbol.kind !== 'NamedType' && !(symbol.kind === 'Field' && /^public const /.test(symbol.signature))) {
        throw new Error(`Generated catalog exclusion contains an executable contract: ${symbol.id}.`);
      }
      excluded.set(symbol.id, source);
    }
  }
  const symbols = project.symbols.filter(symbol => !excluded.has(symbol.id));
  for (const symbol of symbols) {
    if (excluded.has(symbol.containingType)) throw new Error(`Generated catalog exclusion splits a type: ${symbol.id}.`);
  }
  return { symbols, excluded: [...excluded].map(([id, source]) => ({ id, source })) };
}

// The PowerShell writer consumes the same selector as website validation.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [factsPath, inventoryPath, bindingPath, name, relativeFacts] = process.argv.slice(2);
  const [facts, inventory, binding] = await Promise.all([factsPath, inventoryPath, bindingPath]
    .map(async file => JSON.parse(await readFile(file, 'utf8'))));
  const project = facts.projects.find(value => value.name === name);
  const owner = inventory.find(value => value.name === name && value.path === project?.project);
  const capture = binding.apiManifests.find(value => value.path === relativeFacts);
  if (!project || !owner || !capture) throw new Error('API scope selection requires a bound project capture.');
  console.log(JSON.stringify(selectDocumentedSymbols(project, owner, capture)));
}
