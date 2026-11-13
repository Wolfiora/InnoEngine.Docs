import path from 'node:path';
import { readFile, lstat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { isDocumentedProject } from './api-scope.mjs';

const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function ownedFile(root, relative) {
  if ((await lstat(root)).isSymbolicLink()) throw new Error('Migration workspace cannot be a linked path.');
  if (typeof relative !== 'string' || !relative || relative.includes('\\') || path.isAbsolute(relative)) throw new Error(`Invalid relative migration path: ${relative}`);
  const absolute = path.resolve(root, relative);
  const relation = path.relative(root, absolute);
  if (relation === '..' || relation.startsWith(`..${path.sep}`) || path.isAbsolute(relation)) throw new Error(`Migration path escapes its owner: ${relative}`);
  let current = root;
  for (const segment of relation.split(path.sep)) {
    current = path.join(current, segment);
    if ((await lstat(current)).isSymbolicLink()) throw new Error(`Migration path traverses a link: ${relative}`);
  }
  if (!(await lstat(absolute)).isFile()) throw new Error(`Migration target is not a file: ${relative}`);
  return readFile(absolute);
}

/** Audit the existing engine migration register; this does not create another content or project inventory. */
export async function checkMigration({ root, engineRoot }) {
  root = path.resolve(root);
  engineRoot = path.resolve(engineRoot);
  const registry = JSON.parse(await ownedFile(engineRoot, '.agents/records/plans/english-documentation-baseline.json'));
  if (!/^[a-f0-9]{40}$/.test(registry.baseline)) throw new Error('Migration requires an exact baseline revision.');
  const git = (...args) => execFileSync('git', ['-C', engineRoot, ...args], { maxBuffer: 128 * 1024 * 1024 });
  const originals = git('ls-tree', '-r', '--name-only', '-z', registry.baseline, '--', 'docs').toString('utf8').split('\0').filter(Boolean);
  if (!originals.length) throw new Error('The migration baseline has no documentation inputs.');
  const records = registry.files.filter((item) => item.source.startsWith('docs/'));
  const errors = [];
  if (new Set(records.map((item) => item.source)).size !== records.length) errors.push('Duplicate original migration paths.');
  if (JSON.stringify([...originals].sort()) !== JSON.stringify(records.map((item) => item.source).sort())) errors.push('The migration register does not cover the exact baseline documentation file set.');
  const bytes = execFileSync('git', ['-C', engineRoot, 'cat-file', '--batch'], {
    input: originals.map((name) => `${registry.baseline}:${name}`).join('\n') + '\n', maxBuffer: 128 * 1024 * 1024
  });
  const payloads = new Map();
  let offset = 0;
  for (const name of originals) {
    const end = bytes.indexOf(10, offset);
    const header = bytes.toString('utf8', offset, end).split(' ');
    const length = Number(header[2]);
    if (header[1] !== 'blob' || !Number.isSafeInteger(length) || length < 0 || end + length + 1 >= bytes.length) throw new Error(`Invalid baseline blob: ${name}`);
    payloads.set(name, bytes.subarray(end + 1, end + length + 1));
    offset = end + length + 2;
  }
  const binding = JSON.parse(await ownedFile(root, 'reference/engine.lock.json'));
  const projectBytes = await ownedFile(root, binding.projectManifest);
  if (binding.projectManifestIdentity !== hash(projectBytes)) throw new Error('Migration project scope differs from its bound inventory.');
  const projects = JSON.parse(projectBytes);
  const relocations = new Map();
  const migrationPath = '.agents/records/acceptance/api-draft-migration/migration.json';
  let migration;
  try { migration = JSON.parse(await ownedFile(root, migrationPath)); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (migration) {
    const baseline = JSON.parse(await ownedFile(root, '.agents/records/acceptance/api-draft-migration/baseline.json'));
    if (migration.schema !== 'inno-api-migration/1' || migration.baseline !== baseline.docsCommit) throw new Error('API migration provenance is inconsistent.');
    const originals = new Map(baseline.pages.map(page => [page.path, page]));
    for (const disposition of migration.dispositions) {
      const original = originals.get(disposition.from);
      if (!original || original.hash !== disposition.originalHash || relocations.has(disposition.from)
        || !Array.isArray(disposition.destinations)) throw new Error('Invalid or repeated API migration disposition.');
      relocations.set(disposition.from, { ...disposition, owners: original.owners });
    }
    if (relocations.size !== originals.size) throw new Error('API migration omits an inventoried page.');
  }
  const reviews = new Map();
  async function requireDestination(target, source, visited = new Set()) {
    let relative = target;
    if (relative.startsWith('https://')) {
      const match = /^https:\/\/github\.com\/Wolfiora\/InnoEngine\.Docs\/blob\/[a-f0-9]{40}\/(.+)$/.exec(relative);
      if (!match) throw new Error('Current documentation destination must identify the Docs repository.');
      relative = match[1];
    } else relative = relative.replace(/^(?:Wolfiora\/)?InnoEngine\.Docs\//, '');
    const relocation = relocations.get(relative);
    if (relocation && !(relocation.destinations.length === 1 && relocation.destinations[0] === relative)) {
      if (visited.has(relative)) throw new Error('Migration relocation destinations form a cycle.');
      if (relocation.action === 'ExcludedApiReference' && relocation.destinations.length === 0) {
        if (!relative.startsWith('content/en/api/') || !relocation.owners.length
          || relocation.owners.some(name => !projects.some(project => project.name === name && !isDocumentedProject(project)))) {
          throw new Error('Excluded API retirement lacks an actual out-of-scope owner.');
        }
        return;
      }
      if (!relocation.destinations.length) throw new Error('Moved documentation requires a current destination.');
      const next = new Set(visited).add(relative);
      for (const destination of relocation.destinations) await requireDestination(destination, source, next);
      return;
    }
    if (relative.startsWith('reference/provenance/') && relative.endsWith('.json')) {
      if (visited.has(relative)) throw new Error('Migration review destinations form a cycle.');
      const next = new Set(visited).add(relative);
      if (!reviews.has(relative)) reviews.set(relative, JSON.parse(await ownedFile(root, relative)));
      const review = reviews.get(relative);
      const matches = [...review.reviews || [], ...review.files || []].filter((item) => item.source === source);
      if (matches.length !== 1) throw new Error('A delegated review requires exactly one matching source disposition.');
      const destinations = matches[0].destinations || matches[0].targets || [matches[0].destination].filter(Boolean);
      if (!Array.isArray(destinations) || !destinations.length) throw new Error('Delegated review requires an explicit array of current destinations.');
      for (const destination of destinations) await requireDestination(destination, source, next);
      return;
    }
    if (!relative.startsWith('content/en/')) throw new Error('Product documentation must resolve to the active English content owner.');
    await ownedFile(root, relative);
  }
  let archived = 0, retired = 0, reviewed = 0;
  for (const item of records) {
    const original = payloads.get(item.source);
    if (!original) continue;
    const retiredPath = path.resolve(engineRoot, item.source);
    try {
      await lstat(retiredPath);
      errors.push(`Retired engine documentation still exists: ${item.source}`);
    } catch (error) { if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error; }
    if (item.baselineBlobSha256 !== hash(original) || item.baselineBlobBytes !== original.length) errors.push(`Original Git bytes are not correctly registered: ${item.source}`);
    const targets = Array.isArray(item.target) ? item.target : [item.target];
    if (!targets.length || targets.some((target) => typeof target !== 'string' || !target)) { errors.push(`Missing destination: ${item.source}`); continue; }
    try {
      if (item.disposition === 'PreservedHistoricalEvidence') {
        for (const target of targets) {
          if (!target.startsWith('.agents/records/history/')) throw new Error('Historical payload must remain in engine history.');
          if (!original.equals(await ownedFile(engineRoot, target))) throw new Error('Historical payload bytes changed.');
        }
        archived++;
      } else if (item.disposition === 'ApprovedNativeApiRetirementCutOver' || item.disposition === 'RetiredGeneratedBindingReferenceByUserScopeCutOver') {
        const owner = projects.find((project) => {
          const prefix = `docs/backends/${project.path.split('/')[1]}/${project.name}`;
          return project.path.startsWith('backends/') &&
            (item.source === `${prefix}.md` || item.source.startsWith(`${prefix}.Api/`) || item.source.startsWith(`${prefix}/`));
        });
        if (!owner) throw new Error('Native retirement has no matching backend-native owner in the bound project inventory.');
        if (!item.scopeAmendment) throw new Error('Native retirement lacks its explicit scope decision.');
        retired++;
      } else {
        if (!['ReviewedDestinationCutOver', 'ReviewedEnglishDocumentationCutOver', 'ReviewedIntegrationOverviewCutOver', 'ReviewedNarrativeTargetCaptureBlocked'].includes(item.disposition)) {
          throw new Error(`Unreviewed or unknown disposition: ${item.disposition}`);
        }
        for (const target of targets) await requireDestination(target, item.source);
        reviewed++;
      }
    } catch (error) { errors.push(`${item.source}: ${error.message}`); }
  }
  return { status: errors.length ? 'Failed' : 'DispositionVerified', baseline: registry.baseline,
    originals: originals.length, reviewed, retired, archived, sourceApiStatus: 'Unverified',
    scope: 'Baseline identity, retired source paths, declared dispositions, current destinations and historical payload preservation; not semantic API certification.', errors };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (process.argv.length !== 4 || process.argv[2] !== '--engine-root') throw new Error('Usage: node scripts/check-migration.mjs --engine-root ENGINE_CHECKOUT');
    const result = await checkMigration({ root: process.cwd(), engineRoot: process.argv[3] });
    console.log(JSON.stringify(result, null, 2));
    process.exitCode = result.errors.length ? 1 : 0;
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
