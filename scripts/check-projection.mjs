import path from 'node:path';
import { readFile, readdir, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { parse } from 'yaml';
import { fromHtml } from 'hast-util-from-html';
import { contentRoute } from './documentation-routes.mjs';
import { selectDocumentedSymbols } from './api-scope.mjs';

const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

/** Validate a website projection against exported canonical facts, never a second Markdown interpretation. */
export async function checkProjection({ root, catalog, site, complete = false }) {
  root = path.resolve(root);
  const errors = [];
  const binding = JSON.parse(await readOwned(root, 'reference/engine.lock.json'));
  const projectsBytes = await readOwned(root, binding.projectManifest);
  if (projectsBytes.includes(13)) errors.push('Project manifest must use canonical LF bytes before its identity is recorded.');
  const projects = JSON.parse(projectsBytes);
  for (const project of projects) {
    if (project.apiDocumentation !== undefined && project.apiDocumentation !== 'backend-native') {
      errors.push(`Unknown API documentation scope: ${project.name}.`);
    }
    if (project.apiDocumentation === 'backend-native'
      && (project.isTest || !/^backends\/[^/]+\/native\/[^/]+\/[^/]+\.csproj$/.test(project.path))) {
      errors.push(`Native API exclusion is outside the backend-native implementation boundary: ${project.name}.`);
    }
  }
  if (digest(projectsBytes) !== binding.projectManifestIdentity) errors.push('Project manifest identity differs from engine.lock.json.');
  for (const field of ['repository', 'revision', 'sourceTree', 'toolingRevision']) {
    if (catalog[field] !== binding[field]) errors.push(`Canonical catalog binding differs: ${field}.`);
  }
  const projectNames = projects.map((project) => project.name).sort();
  if (JSON.stringify(projectNames) !== JSON.stringify(Object.keys(catalog.projects).sort())) errors.push('Canonical project coverage differs from the bound manifest.');
  const sourceFiles = (await files(inside(root, 'content/en'))).filter((file) => file.endsWith('.md'))
    .map((file) => path.relative(root, file).replaceAll('\\', '/')).sort();
  const catalogFiles = catalog.pages.map((page) => page.path).sort();
  if (JSON.stringify(sourceFiles) !== JSON.stringify(catalogFiles)) errors.push('Canonical catalog does not contain the exact current Markdown file set. Refresh explicitly.');
  const pages = new Map();
  const identities = new Set();
  for (const page of catalog.pages) {
    if (identities.has(page.id)) errors.push(`Duplicate canonical page identity: ${page.id}.`);
    identities.add(page.id);
    const source = inside(root, page.path);
    if (digest(await readFile(source)) !== page.contentIdentity) errors.push(`Stale canonical content: ${page.path}.`);
    const slug = route(page.path);
    if (pages.has(slug)) errors.push(`Duplicate website route: ${slug}.`);
    pages.set(slug, page);
    if (!site) continue;
    const rendered = inside(path.resolve(site), slug === '404' ? '404.html' : `${slug ? slug + '/' : ''}index.html`);
    const tree = fromHtml(await readFile(rendered, 'utf8'));
    const ids = new Set();
    const headings = [];
    visit(tree, (node) => {
      if (node.type !== 'element') return;
      if (node.properties?.id) {
        const id = String(node.properties.id);
        if (ids.has(id)) errors.push(`Duplicate rendered anchor ${id}: ${page.path}.`);
        ids.add(id);
      }
      if (node.tagName === 'h1') headings.push(node);
      const href = node.properties?.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/InnoEngine.Docs/')) {
        errors.push(`Link bypasses GitHub Pages base path ${href}: ${page.path}.`);
      }
    });
    if (headings.length !== 1) errors.push(`Expected one rendered H1, found ${headings.length}: ${page.path}.`);
    for (const anchor of [...Object.keys(page.sections), ...Object.values(page.symbols).map((symbol) => symbol.anchor)]) {
      if (!ids.has(anchor)) errors.push(`Canonical anchor missing from rendered HTML ${anchor}: ${page.path}.`);
    }
  }
  const contentIdentity = digest(catalog.pages.slice().sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0)
    .map((page) => `${page.path}\0${page.contentIdentity}`).join('\n'));
  if (contentIdentity !== catalog.contentIdentity) errors.push('Canonical aggregate content identity is invalid.');
  const navigation = parse(await readFile(inside(root, 'navigation/en.yml'), 'utf8'));
  const navigated = new Set();
  function inspect(items) {
    if (!Array.isArray(items)) throw new Error('Navigation items must be an array.');
    for (const item of items) {
      if (item.slug !== undefined) {
        if (!pages.has(item.slug)) errors.push(`Missing navigation route: ${item.slug}.`);
        if (navigated.has(item.slug)) errors.push(`Duplicate navigation route: ${item.slug}.`);
        navigated.add(item.slug);
      }
      if (item.items !== undefined) inspect(item.items);
    }
  }
  inspect(navigation);
  const api = await checkApiReferences(root, binding, catalog, projects, errors);
  const licenses = await checkLicenseProvenance(root, errors);
  const missingProjects = Object.entries(catalog.projects).filter(([, entry]) => entry === null).map(([name]) => name);
  if (complete && missingProjects.length) errors.push(`${missingProjects.length} actual projects lack an authoritative entry.`);
  if (complete && catalog.sourceApiStatus !== 'Verified') errors.push(`Source API verification is ${catalog.sourceApiStatus}; publication requires matching evidence.`);
  return { status: errors.length ? 'Failed' : 'Passed', scope: complete ? 'CompleteProjection' : 'AvailableProjection',
    snapshot: catalog.snapshot, contentIdentity, pages: catalog.pages.length, projects: projectNames.length,
    missingProjects, sourceApiStatus: catalog.sourceApiStatus, api, licenses, errors };
}

async function checkLicenseProvenance(root, errors) {
  const directory = 'reference/provenance';
  let names;
  try { names = await readdir(inside(root, directory)); }
  catch (error) { if (error.code === 'ENOENT') return 0; throw error; }
  const manifests = names.filter((name) => name.endsWith('-license.json')).sort();
  for (const name of manifests) {
    const record = JSON.parse(await readOwned(root, `${directory}/${name}`));
    if (!/^[a-f0-9]{64}$/.test(record.sha256 ?? '') || !/^[a-f0-9]{40}$/.test(record.revision ?? '')
      || typeof record.license !== 'string' || !record.license.startsWith('public/')) {
      errors.push(`Invalid license provenance: ${name}.`);
      continue;
    }
    if (digest(await readOwned(root, record.license)) !== record.sha256) {
      errors.push(`Original license bytes differ: ${record.license}.`);
    }
  }
  return manifests.length;
}

async function checkApiReferences(root, binding, catalog, projects, errors) {
  const expected = new Map();
  const observed = new Map();
  const excludedCatalogSymbols = [];
  const key = (project, surface, id) => `${project}\0${surface}\0${id}`;
  for (const reference of binding.apiManifests ?? []) {
    if (!/^[a-f0-9]{40}$/.test(reference.sourceRevision ?? '') || !/^[a-f0-9]{40}$/.test(reference.sourceTree ?? '')) {
      errors.push(`API manifest requires its captured source revision and tree: ${reference.path}.`);
    }
    const bytes = await readOwned(root, reference.path);
    if (bytes.includes(13)) errors.push(`API manifest must use canonical LF bytes: ${reference.path}.`);
    if (digest(bytes) !== reference.sha256) {
      errors.push(`API manifest identity differs: ${reference.path}.`);
      continue;
    }
    const facts = JSON.parse(bytes);
    if (facts.model !== reference.model || facts.configuration !== reference.configuration
      || (facts.target ?? null) !== (reference.target ?? null)) {
      errors.push(`API manifest context differs: ${reference.path}.`);
      continue;
    }
    for (const project of facts.projects) {
      const source = projects.find((item) => item.name === project.name && item.path === project.project);
      if (!source || !source.surfaces.includes(facts.model)) {
        errors.push(`API manifest owner or surface is not bound: ${project.name}.`);
        continue;
      }
      if (source.apiDocumentation === 'backend-native') {
        errors.push(`Backend-native API is outside the approved engine documentation scope: ${project.name}.`);
        continue;
      }
      let selected;
      try {
        selected = selectDocumentedSymbols(project, source, reference);
      } catch (error) {
        errors.push(error.message);
        continue;
      }
      excludedCatalogSymbols.push(...selected.excluded.map(symbol => ({ project: project.name, ...symbol })));
      for (const symbol of project.symbols) {
        if (digest(symbol.signature) !== symbol.signatureHash) errors.push(`Extracted signature hash is invalid: ${symbol.id}.`);
      }
      for (const symbol of selected.symbols) {
        const identity = key(project.name, facts.model, symbol.id);
        if (expected.has(identity)) errors.push(`Duplicate extracted API contract: ${symbol.id}.`);
        expected.set(identity, symbol);
      }
    }
  }
  for (const page of catalog.pages) {
    for (const [id, symbol] of Object.entries(page.symbols)) {
      const identity = key(page.owners[0], page.surface, id);
      if (observed.has(identity)) errors.push(`Duplicate authored API contract: ${id}.`);
      observed.set(identity, symbol);
      const source = expected.get(identity);
      if (!source) errors.push(`Authored API has no matching extracted contract: ${id}.`);
      else {
        if (symbol.signatureIdentity !== source.signatureHash) errors.push(`Authored signature mapping is stale: ${id}.`);
        if (!symbol.code.includes(source.signature)) errors.push(`Visible declaration differs from extracted signature: ${id}.`);
      }
    }
  }
  for (const [identity, symbol] of expected) {
    if (!observed.has(identity)) errors.push(`Extracted API has no authored contract: ${symbol.id}.`);
  }
  return { extractedSymbols: expected.size, authoredSymbols: observed.size,
    excludedCatalogSymbols,
    excludedNativeProjects: projects.filter(project => project.apiDocumentation === 'backend-native').map(project => project.name),
    scope: 'Bound engine declarations only; backend-native and generated binding references are excluded by the approved scope. Source execution, script projections and semantic prose review remain separate.' };
}

function route(source) {
  if (!source.startsWith('content/en/') || !source.endsWith('.md')) throw new Error(`Invalid content source: ${source}`);
  return contentRoute(source.slice('content/en/'.length));
}

function inside(root, relative) {
  if (path.isAbsolute(relative)) throw new Error(`Expected a relative owned path: ${relative}`);
  const target = path.resolve(root, relative);
  const relation = path.relative(root, target);
  if (relation === '..' || relation.startsWith('..' + path.sep) || path.isAbsolute(relation)) throw new Error(`Path escapes its root: ${relative}`);
  return target;
}

async function readOwned(root, relative) {
  const target = inside(root, relative);
  let current = path.resolve(root);
  for (const segment of path.relative(current, target).split(path.sep)) {
    current = path.join(current, segment);
    if ((await lstat(current)).isSymbolicLink()) throw new Error(`Reference input cannot traverse a link: ${relative}`);
  }
  return readFile(target);
}

async function files(root) {
  const result = [];
  for (const name of (await readdir(root)).sort()) {
    const file = path.join(root, name);
    const info = await lstat(file);
    if (info.isSymbolicLink()) throw new Error(`Documentation source cannot contain links: ${file}`);
    if (info.isDirectory()) result.push(...await files(file));
    else if (info.isFile()) result.push(file);
  }
  return result;
}

function visit(node, action) {
  action(node);
  for (const child of node.children ?? []) visit(child, action);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const arguments_ = process.argv.slice(2);
  const complete = arguments_.includes('--complete');
  const selected = arguments_.filter((argument) => argument !== '--complete');
  if (selected.length < 1 || selected.length > 2) throw new Error('Usage: node scripts/check-projection.mjs <canonical-catalog.json> [site-directory] [--complete]');
  const report = await checkProjection({ root: process.cwd(), catalog: JSON.parse(await readFile(selected[0], 'utf8')), site: selected[1], complete });
  console.log(JSON.stringify(report, null, 2));
  process.exitCode = report.status === 'Passed' ? 0 : 1;
}
