import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, appendFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { contentRoute } from './documentation-routes.mjs';

export const identity = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const administrative = file => /^(README\.md|CONTRIBUTING\.md|AGENTS\.md|LICENSE|\.agents\/)/.test(file);
export const controlInput = file => /^(scripts\/|src\/|tests\/|\.github\/|navigation\/|astro\.config|playwright\.config|package|tsconfig|\.node-version)/.test(file);
export const publicationInput = file => controlInput(file) || /^(content\/|reference\/|public\/)/.test(file);
export function modeFor(event, name, ref) {
  if (name === 'workflow_dispatch') {
    const mode = event.inputs?.mode;
    if (!['Incremental', 'Release'].includes(mode)) throw new Error('Manual runs require Incremental or Release mode.');
    return mode;
  }
  return name === 'merge_group' || (name === 'pull_request' && event.pull_request.base.ref === 'main')
    || (name === 'push' && ref === 'refs/heads/main') ? 'Release' : 'Incremental';
}
export function bootstrapPlan({ mode, changed, baseline, candidate }) {
  const web = changed.filter(file => !administrative(file));
  const tools = web.some(file => file === 'reference/engine.lock.json' || !/^(content\/|reference\/|public\/)/.test(file));
  return { schema: 'inno-docs-plan/1', mode, baseline, candidate, changed,
    reason: mode === 'Release' ? 'Complete publication candidate' : 'Changed inputs and canonical reverse dependencies',
    prepare: mode === 'Release' || web.length > 0, tools,
    render: mode === 'Release' || web.length > 0,
    publishable: mode === 'Release', pages: [], checks: [{ id: 'guidance', required: true, reason: 'Repository instructions, records and entry links' }] };
}
function targetPath(page, link) {
  if (/^[a-z][a-z0-9+.-]*:|^\/\//i.test(link)) return null;
  const file = decodeURIComponent(link.split(/[?#]/, 1)[0]);
  return file ? path.posix.normalize(path.posix.join(path.posix.dirname(page.path), file)) : page.path;
}
/** Use canonical link/contract/include facts; never infer a page owner from its filename. */
export function selectPages(plan, catalog, { previous = null, navigation = [], renderer = '' } = {}) {
  if (!catalog.pages.length) throw new Error('Canonical page discovery is unexpectedly empty.');
  const byId = new Map(catalog.pages.map(page => [page.id, page]));
  const byPath = new Map(catalog.pages.map(page => [page.path, page]));
  const reverse = new Map(), dependencies = new Map();
  const add = (target, page) => {
    if (!target) return;
    if (!reverse.has(target)) reverse.set(target, new Set());
    reverse.get(target).add(page.path);
    dependencies.get(page.path).add(target);
  };
  for (const page of catalog.pages) {
    if (!Array.isArray(page.links)) throw new Error('Canonical tooling must export parsed link relationships. Refresh the pinned tooling.');
    dependencies.set(page.path, new Set());
    for (const link of [...page.links, ...page.includes]) add(targetPath(page, link), page);
    for (const contract of page.contracts) add(byId.get(contract.split('#')[0])?.path, page);
  }
  const selected = new Map();
  const choose = (file, reason) => { if (byPath.has(file) && !selected.has(file)) selected.set(file, reason); };
  const search = plan.changed.some(file => /search|pagefind/i.test(file));
  const changedParser = plan.changed.includes('reference/engine.lock.json')
    && (!catalog.documentationToolIdentity || previous?.tool !== catalog.documentationToolIdentity);
  const semantic = changedParser || plan.changed.some(file => /^(scripts\/(?:api-|canonical-|documentation-|check-projection|ci-plan)|package|astro\.config|\.github\/|src\/content)/.test(file)
    || (!administrative(file) && !/^(content\/|reference\/|src\/|navigation\/|public\/|scripts\/|tests\/|playwright\.config|tsconfig|\.node-version)/.test(file)));
  if (plan.mode === 'Release' || search || semantic) {
    for (const page of catalog.pages) choose(page.path, plan.mode === 'Release' ? 'Release requires every page' : 'Shared semantic or search input changed');
  } else {
    for (const file of plan.changed) {
      choose(file, 'Changed page');
      for (const dependent of reverse.get(file) ?? []) choose(dependent, `References changed input ${file}`);
    }
    // Fact updates may change generated summaries/declarations without changing authored Markdown.
    if (plan.changed.some(file => file.startsWith('reference/'))) {
      for (const page of catalog.pages) if (previous?.pages?.[page.path]?.content !== page.contentIdentity)
        choose(page.path, previous ? 'Canonical composition changed' : 'No prior canonical composition evidence; conservatively validate facts');
    }
    const presentation = plan.changed.some(file => /^(src\/|navigation\/|public\/|scripts\/site-)/.test(file));
    if (presentation) {
      const representatives = new Map();
      for (const page of catalog.pages) {
        const features = [page.kind, ...(page.codeBlocks.length ? ['code'] : []),
          ...(Object.keys(page.symbols).some(id => id.startsWith('T:')) ? ['type'] : []),
          ...(Object.keys(page.symbols).some(id => !id.startsWith('T:')) ? ['member'] : []),
          ...(page.markdown.includes('| ---') ? ['table'] : [])];
        for (const feature of features) if (!representatives.has(feature)) representatives.set(feature, page.path);
      }
      for (const [feature, file] of representatives) choose(file, `Representative ${feature} presentation`);
    }
  }
  for (const file of [...selected.keys()]) for (const dependent of reverse.get(file) ?? []) choose(dependent, `References changed composition ${file}`);
  if (selected.size) choose('content/en/index.md', 'Preview entry and shared navigation');
  // Starlight pagination is derived from the same navigation projection used by the site.
  const ordered = [];
  const visit = items => { for (const item of items) { if (item.slug !== undefined) ordered.push(item.slug); if (item.items) visit(item.items); } };
  visit(navigation);
  const routes = new Map(catalog.pages.map(page => [contentRoute(page.path.slice(11)), page.path]));
  for (const file of [...selected.keys()]) {
    const index = ordered.indexOf(contentRoute(file.slice(11)));
    if (index >= 0) for (const offset of [-1, 1]) choose(routes.get(ordered[index + offset]), 'Adjacent navigation/pagination page');
  }
  // Include canonical category ancestors and directly required contracts, not a transitive crawl of every hyperlink.
  for (const file of [...selected.keys()]) {
    const page = byPath.get(file);
    for (const contract of page.contracts) choose(byId.get(contract.split('#')[0])?.path, 'Necessary contract');
    for (const include of page.includes) choose(targetPath(page, include), 'Included content');
    let directory = path.posix.dirname(file);
    while (directory.startsWith('content/en')) { choose(directory + '/index.md', 'Containing category'); directory = path.posix.dirname(directory); }
  }
  const pages = [...selected].sort(([a], [b]) => a.localeCompare(b)).map(([file, reason]) => {
    const page = byPath.get(file);
    return { path: file, id: page.id, route: contentRoute(file.slice(11)), reason,
      input: identity([renderer, page.contentIdentity, [...dependencies.get(file)].sort().map(target => [target, byPath.get(target)?.contentIdentity ?? catalog.sourceFiles[target] ?? null])]) };
  });
  const browserRequired = plan.mode === 'Release' || semantic || search ? 'Full'
    : plan.changed.some(file => /^(src\/|public\/|navigation\/|scripts\/)/.test(file)) ? 'Selected' : 'None';
  const reusedPages = plan.mode === 'Release' ? [] : pages.filter(page => previous?.pages?.[page.path]?.input === page.input
    && previous.pages[page.path].render === 'Passed' && (browserRequired === 'None' || previous.pages[page.path].browser === 'Passed'));
  const pending = pages.filter(page => !reusedPages.includes(page));
  const browser = pending.length ? browserRequired : 'None';
  return { ...plan, snapshot: catalog.snapshot, pages: pending, reusedPages, renderer, render: pending.length > 0,
    search: plan.mode === 'Release' || search || semantic, browser,
    checks: [{ id: 'guidance', required: true, reason: 'Repository instructions and links' },
      { id: 'catalog', required: true, reason: 'Global identities, references and anchors' },
      { id: 'examples', required: true, reason: 'Reuse matching groups; compile only invalidated groups' },
      { id: 'render', required: pending.length > 0, reason: `${pending.length} selected pages; ${reusedPages.length} matching independent receipts` },
      { id: 'browser', required: browser !== 'None', reason: browser }] };
}
export function reconcile(plan, results) {
  const allowed = new Set(['Passed', 'Reused', 'Failed', 'Blocked', 'NotApplicable']);
  const errors = [];
  for (const check of plan.checks) {
    const matches = results.filter(result => result.id === check.id);
    if (matches.length !== 1 || !allowed.has(matches[0]?.status)) errors.push(`Missing or invalid result: ${check.id}`);
    else if (check.required && !['Passed', 'Reused'].includes(matches[0].status)) errors.push(`Required ${check.id}: ${matches[0].status}`);
  }
  return { status: errors.length ? 'Blocked' : 'Passed', mode: plan.mode, errors, results };
}
async function save(plan) {
  await mkdir('artifacts/ci', { recursive: true });
  await writeFile('artifacts/ci/plan.json', JSON.stringify(plan, null, 2) + '\n');
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT,
    ['mode', 'prepare', 'render', 'tools', 'browser', 'search'].map(key => `${key}=${plan[key] ?? false}\n`).join(''));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const operation = process.argv[2];
  if (operation === 'bootstrap') {
    const event = JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'));
    const git = args => execFileSync('git', args, { encoding: 'utf8', maxBuffer:128*1024*1024 }).trim();
    const candidate = git(['rev-parse', 'HEAD']);
    let baseline = event.pull_request?.base.sha ?? event.before ?? event.merge_group?.base_sha;
    if (baseline && !/^0+$/.test(baseline)) baseline = git(['merge-base', baseline, candidate]);
    else baseline = null;
    const changed = baseline ? git(['diff', '--name-only', baseline, candidate]).split('\n').filter(Boolean)
      : git(['ls-files']).split('\n');
    await save(bootstrapPlan({ mode: modeFor(event, process.env.GITHUB_EVENT_NAME, process.env.GITHUB_REF), changed, baseline, candidate }));
  } else if (operation === 'select') {
    const { parse } = await import('yaml');
    const { documentationNavigation } = await import('./documentation-navigation.mjs');
    const { checkProjection } = await import('./check-projection.mjs');
    const catalog = JSON.parse(await readFile('artifacts/canonical-catalog.json', 'utf8'));
    const report = await checkProjection({ root:process.cwd(), catalog, frozen:true });
    await writeFile('artifacts/ci/catalog-result.json', JSON.stringify(report));
    if (report.status !== 'Passed') throw new Error(report.errors.join('\n'));
    let previous = null;
    try { previous = JSON.parse(await readFile('artifacts/checks/verified.json', 'utf8')); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    const tracked = [...new Set(execFileSync('git',['ls-files','--cached','--others','--exclude-standard'],{encoding:'utf8',maxBuffer:128*1024*1024}).trim().split('\n').filter(controlInput))];
    const renderer = identity([catalog.documentationToolIdentity, process.version, process.platform, process.arch, process.env.ImageVersion,
      (await Promise.all(tracked.map(async file => {
        try { return [file, identity(await readFile(file,'utf8'))]; }
        catch (error) { if (error.code === 'ENOENT') return null; throw error; }
      }))).filter(Boolean)]);
    await save(selectPages(JSON.parse(await readFile('artifacts/ci/plan.json', 'utf8')), catalog,
      { previous, renderer, navigation:documentationNavigation(parse(await readFile('navigation/en.yml','utf8')),catalog) }));
  } else if (operation === 'complete') {
    const plan = JSON.parse(await readFile('artifacts/ci/plan.json', 'utf8'));
    const guidance = JSON.parse(await readFile('artifacts/ci/guidance-result.json','utf8'));
    const results = [{id:'guidance',status:guidance.status}];
    if (plan.prepare) {
      const examples = JSON.parse(await readFile('artifacts/examples/result.json', 'utf8'));
      results.push({ id:'examples', status:examples.status });
      const site = plan.render ? JSON.parse(await readFile('artifacts/site-build.json', 'utf8')) : null;
      const catalog = JSON.parse(await readFile('artifacts/ci/catalog-result.json','utf8'));
      results.push({ id:'catalog', status:catalog.status, input:plan.snapshot });
      results.push({ id:'render', status:plan.render ? site.status : plan.reusedPages.length ? 'Reused' : 'NotApplicable', pages:site?.pages ?? 0 });
      if (plan.browser !== 'None') {
        const browser = JSON.parse(await readFile('artifacts/browser/results.json', 'utf8'));
        results.push({ id:'browser', status:browser.stats?.expected > 0 && browser.stats.unexpected === 0 && browser.stats.skipped === 0 ? 'Passed' : 'Blocked' });
      } else results.push({ id:'browser', status:'NotApplicable' });
    }
    const result = reconcile(plan, results);
    await writeFile('artifacts/ci/result.json', JSON.stringify(result, null, 2));
    if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,
      `${result.status}: ${plan.mode}; rendered ${plan.pages.length} selected pages. Search: ${plan.search ?? false}; browser: ${plan.browser ?? 'None'}.\n`);
    if (result.status !== 'Passed') throw new Error(result.errors.join('\n'));
  } else throw new Error('Usage: ci-plan.mjs bootstrap|select|complete');
}
