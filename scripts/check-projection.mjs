import path from 'node:path';
import { readFile, readdir, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { parse } from 'yaml';
import { fromHtml } from 'hast-util-from-html';

const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

/** Validate a website projection against exported canonical facts, never a second Markdown interpretation. */
export async function checkProjection({ root, catalog, site, complete = false }) {
  root = path.resolve(root);
  const errors = [];
  const binding = JSON.parse(await readFile(inside(root, 'reference/engine.lock.json'), 'utf8'));
  const projectsBytes = await readFile(inside(root, binding.projectManifest));
  const projects = JSON.parse(projectsBytes);
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
    for (const anchor of [...Object.keys(page.sections), ...Object.values(page.symbols)]) {
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
  const missingProjects = Object.entries(catalog.projects).filter(([, entry]) => entry === null).map(([name]) => name);
  if (complete && missingProjects.length) errors.push(`${missingProjects.length} actual projects lack an authoritative entry.`);
  if (complete && catalog.sourceApiStatus !== 'Verified') errors.push(`Source API verification is ${catalog.sourceApiStatus}; publication requires matching evidence.`);
  return { status: errors.length ? 'Failed' : 'Passed', scope: complete ? 'CompleteProjection' : 'AvailableProjection',
    snapshot: catalog.snapshot, contentIdentity, pages: catalog.pages.length, projects: projectNames.length,
    missingProjects, sourceApiStatus: catalog.sourceApiStatus, errors };
}

function route(source) {
  if (!source.startsWith('content/en/') || !source.endsWith('.md')) throw new Error(`Invalid content source: ${source}`);
  let slug = source.slice('content/en/'.length, -3);
  if (slug === 'index') return '';
  if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
  return slug;
}

function inside(root, relative) {
  if (path.isAbsolute(relative)) throw new Error(`Expected a relative owned path: ${relative}`);
  const target = path.resolve(root, relative);
  const relation = path.relative(root, target);
  if (relation === '..' || relation.startsWith('..' + path.sep) || path.isAbsolute(relation)) throw new Error(`Path escapes its root: ${relative}`);
  return target;
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
