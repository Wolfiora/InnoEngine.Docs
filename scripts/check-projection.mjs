import path from 'node:path';
import { readFile, readdir, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { parse } from 'yaml';
import { fromHtml } from 'hast-util-from-html';
import { contentRoute } from './documentation-routes.mjs';
import { isDocumentedProject, isDocumentedProjectGuide } from './api-scope.mjs';
import { checkExampleEvidence } from './example-evidence.mjs';
import { inside, readOwned } from './owned-input.mjs';

const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

/** Validate a website projection against exported canonical facts, never a second Markdown interpretation. */
export async function checkProjection({ root, catalog, site, complete = false, exampleReceipts = [] }) {
  root = path.resolve(root);
  const errors = [];
  const binding = JSON.parse(await readOwned(root, 'reference/engine.lock.json'));
  const projectsBytes = await readOwned(root, binding.projectManifest);
  if (projectsBytes.includes(13)) errors.push('Project manifest must use canonical LF bytes before its identity is recorded.');
  const projects = JSON.parse(projectsBytes);
  if (digest(projectsBytes) !== binding.projectManifestIdentity) errors.push('Project manifest identity differs from engine.lock.json.');
  for (const field of ['repository', 'revision', 'sourceTree', 'toolingRevision']) {
    if (catalog[field] !== binding[field]) errors.push(`Canonical catalog binding differs: ${field}.`);
  }
  const projectNames = projects.filter(isDocumentedProjectGuide).map((project) => project.name).sort();
  if (JSON.stringify(projectNames) !== JSON.stringify(Object.keys(catalog.projects).sort())) errors.push('Canonical project coverage differs from the bound manifest.');
  const sourceFiles = (await files(inside(root, 'content/en'))).filter((file) => file.endsWith('.md'))
    .map((file) => path.relative(root, file).replaceAll('\\', '/')).sort();
  const catalogFiles = Object.keys(catalog.sourceFiles ?? {}).filter(file => file.startsWith('content/en/') && file.endsWith('.md')).sort();
  if (JSON.stringify(sourceFiles) !== JSON.stringify(catalogFiles)) errors.push('Canonical catalog does not contain the exact current Markdown file set. Refresh explicitly.');
  for (const [file, identity] of Object.entries(catalog.sourceFiles ?? {})) {
    if (digest((await readOwned(root, file)).toString('utf8')) !== identity) errors.push(`Stale canonical input: ${file}.`);
  }
  const pages = new Map();
  const identities = new Set();
  for (const page of catalog.pages) {
    if (identities.has(page.id)) errors.push(`Duplicate canonical page identity: ${page.id}.`);
    identities.add(page.id);
    const text = page.markdown;
    if (typeof text !== 'string' || digest(text) !== page.contentIdentity) { errors.push(`Invalid canonical composition: ${page.path}.`); continue; }
    const externalConsumer = /\bInno(?:Engine)?[./\\](?:Canvas|Rendering2D|Samples)\b|\bRendering2D\b|\bFlappyBird\b|\bCamera2D\b|\bSpriteShaderPreview\b/i;
    const removedEntry = /--project\s+["']?InnoEngine (?:Editor|Rebuild)\b|InnoEngine\.Rebuild|entry[/\\](?:Editor|Rebuild)[/\\]|RunRebuildAsync|-- (?:engine|rebuild)\b|\b(?:Inno\.Build\.Cli|InnoEngine\.Build)(?:\.dll)?\s+(?:engine|rebuild)\b|\bdotnet\s+(?:[^\r\n]*[/\\])?Inno\.Build\.Cli\.dll\b/;
    if (externalConsumer.test(text) || removedEntry.test(text)) errors.push(`Removed entry or external consumer reference: ${page.path}.`);
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
  if (complete && api.missingSourceCaptures.length) errors.push(`Engine projects lack an evaluated source API capture: ${api.missingSourceCaptures.join(', ')}.`);
  const exampleEvidence = complete ? checkExampleEvidence(catalog, exampleReceipts) : { status: 'NotChecked' };
  if (complete) errors.push(...exampleEvidence.errors);
  return { status: errors.length ? 'Failed' : 'Passed', scope: complete ? 'CompleteProjection' : 'AvailableProjection',
    snapshot: catalog.snapshot, contentIdentity, pages: catalog.pages.length, projects: projectNames.length,
    missingProjects, sourceApiStatus: catalog.sourceApiStatus,
    apiInputsIdentity: digest(JSON.stringify((catalog.references ?? []).map(reference => [reference.model, reference.configuration, reference.target ?? null, reference.identity]).sort())),
    exampleReceiptsIdentity: digest(JSON.stringify(exampleReceipts.map(receipt => receipt.identity).sort())), exampleEvidence, api, licenses, errors };
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
  const captured = new Set();
  const projections = new Map();
  const owners = new Map(projects.map(project => [project.name, project]));
  const key = (project, surface, id) => `${project}\0${surface}\0${id}`;
  for (const reference of binding.apiManifests ?? []) {
    if (!/^[a-f0-9]{40}$/.test(reference.sourceRevision ?? '') || !/^[a-f0-9]{40}$/.test(reference.sourceTree ?? '')) {
      errors.push(`API manifest lacks exact source provenance: ${reference.path}.`);
    }
    const bytes = await readOwned(root, reference.path);
    if (digest(bytes) !== reference.sha256) { errors.push(`API manifest identity differs: ${reference.path}.`); continue; }
    const facts = JSON.parse(bytes);
    if (!['source-clr', 'runtime-script', 'editor-script'].includes(facts.model)
      || facts.model !== reference.model || facts.configuration !== reference.configuration
      || (facts.target ?? null) !== (reference.target ?? null)) {
      errors.push(`API context differs: ${reference.path}.`); continue;
    }
    if (facts.projectionIdentities) {
      const identity = facts.projectionIdentities['Inno.ScriptApi.Runtime'];
      const context = JSON.stringify([facts.configuration, facts.target ?? null, facts.model]);
      if (!/^[a-f0-9]{64}$/.test(identity ?? '') || projections.has(context)) {
        errors.push(`Invalid or repeated logical projection input: ${reference.path}.`);
      } else projections.set(context, identity);
    }
    for (const project of facts.projects) {
      const owner = owners.get(project.name);
      if (!owner || owner.path !== project.project) { errors.push(`API owner is not bound: ${project.name}.`); continue; }
      if (!isDocumentedProject(owner)) continue;
      if (facts.model === 'source-clr') captured.add(project.name);
      for (const symbol of project.symbols) {
        if (!symbol.source?.endsWith('.cs') || !/^(src|build)\//.test(symbol.source)) continue;
        if (digest(symbol.signature) !== symbol.signatureHash) errors.push(`Invalid declaration digest: ${symbol.id}.`);
        if (facts.model !== 'source-clr' && !['Runtime', 'Editor', 'Authoring'].includes(symbol.scriptingScope)) {
          errors.push(`Missing actual script scope: ${symbol.id}.`);
        }
        const identity = key(project.name, facts.model, symbol.id);
        const contexts = expected.get(identity) ?? [];
        if (contexts.some(context => context.configuration === facts.configuration && context.target === facts.target)) {
          errors.push(`Repeated API context: ${symbol.id}.`);
        }
        contexts.push({ ...symbol, configuration: facts.configuration, target: facts.target });
        expected.set(identity, contexts);
      }
    }
  }
  // Runtime is available to Editor scripts only when the actual captures bind the same
  // logical Runtime assembly. Scope describes the export, not its compilation contexts.
  for (const [identity, contexts] of [...expected]) {
    const [project, surface, id] = identity.split('\0');
    if (surface !== 'runtime-script') continue;
    for (const context of contexts) {
      const runtime = projections.get(JSON.stringify([context.configuration, context.target ?? null, 'runtime-script']));
      const editor = projections.get(JSON.stringify([context.configuration, context.target ?? null, 'editor-script']));
      if (!runtime || !editor) continue;
      if (runtime !== editor) { errors.push(`Editor uses a different Runtime projection: ${id}.`); continue; }
      const editorKey = key(project, 'editor-script', id);
      const available = expected.get(editorKey) ?? [];
      if (!available.some(candidate => candidate.configuration === context.configuration && (candidate.target ?? null) === (context.target ?? null))) {
        available.push(context);
        expected.set(editorKey, available);
      }
    }
  }
  for (const page of catalog.pages) {
    for (const [id, symbol] of Object.entries(page.symbols)) {
      for (const surface of page.surfaces?.length ? page.surfaces : [page.surface]) {
        const identity = key(page.owners[0], surface, id);
        if (observed.has(identity)) errors.push(`Duplicate composed API: ${id}.`);
        observed.set(identity, symbol);
        const contexts = expected.get(identity);
        if (!contexts) { errors.push(`Composed API has no captured declaration: ${id}.`); continue; }
        // One composed logical symbol can have several target/configuration declarations.
        if (!contexts.some(context => context.signatureHash === symbol.signatureIdentity)) {
          errors.push(`Composed signature mapping differs: ${id}.`);
        }
        for (const context of contexts) {
          if (!symbol.code.includes(context.signature)) errors.push(`Missing visible declaration variant: ${id}.`);
          if (surface !== 'source-clr' && page.scope !== context.scriptingScope) errors.push(`Composed script scope differs: ${id}.`);
        }
      }
    }
    for (const block of page.codeBlocks ?? []) {
      for (const id of block.declarationSymbols ?? []) {
        const candidates = (page.surfaces?.length ? page.surfaces : [page.surface])
          .flatMap(surface => expected.get(key(page.owners[0], surface, id)) ?? []);
        if (!candidates.some(candidate => candidate.signature === block.text && candidate.signatureHash === block.contentIdentity)) {
          errors.push(`A displayed declaration is not a captured API fact: ${id}.`);
        }
      }
    }
  }
  for (const [identity, contexts] of expected) if (!observed.has(identity)) errors.push(`Captured API has no composed contract: ${contexts[0].id}.`);
  return { extractedSymbols: expected.size, authoredSymbols: observed.size,
    missingSourceCaptures: projects.filter(project => isDocumentedProject(project) && !captured.has(project.name)).map(project => project.name),
    excludedProjects: projects.filter(project => !isDocumentedProject(project)).map(project => project.name),
    scope: 'Public/protected C# contracts owned by src/ and build/, plus actual script projections. Other roots, tests and fixtures are excluded; editorial prose is reported separately.' };
}

function route(source) {
  if (!source.startsWith('content/en/') || !source.endsWith('.md')) throw new Error(`Invalid content source: ${source}`);
  return contentRoute(source.slice('content/en/'.length));
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
  const exampleReceipts = [];
  const evidenceOption = selected.indexOf('--example-manifest');
  if (evidenceOption >= 0) {
    if (evidenceOption + 2 !== selected.length) throw new Error('Select exactly one receipt manifest after --example-manifest.');
    const manifest = JSON.parse(await readOwned(process.cwd(), selected[evidenceOption + 1]));
    if (manifest.schema !== 'inno-example-receipts/1' || !Array.isArray(manifest.reports)) throw new Error('Invalid example receipt manifest.');
    for (const report of manifest.reports) {
      if (typeof report.path !== 'string' || !/^reports\/[a-f0-9]{64}\.json$/.test(report.path)) throw new Error('Example receipts require explicit content-addressed report files.');
      exampleReceipts.push({ identity: report.identity, bytes: await readOwned(process.cwd(), path.join(path.dirname(selected[evidenceOption + 1]), report.path)) });
    }
    selected.splice(evidenceOption, 2);
  }
  if (selected.length < 1 || selected.length > 2) throw new Error('Usage: node scripts/check-projection.mjs CATALOG [SITE] [--complete] [--example-manifest MANIFEST]');
  const report = await checkProjection({ root: process.cwd(), catalog: JSON.parse(await readFile(selected[0], 'utf8')), site: selected[1], complete, exampleReceipts });
  console.log(JSON.stringify(report, null, 2));
  process.exitCode = report.status === 'Passed' ? 0 : 1;
}
