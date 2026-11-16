import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { prepareCatalog, validateBinding } from './prepare-catalog.mjs';
import { readCanonicalContent } from './canonical-content.mjs';
import { checkProjection, readExampleReceipts } from './check-projection.mjs';
import { run } from './tooling-process.mjs';

export async function buildSite(root = process.cwd(), env = process.env, signal) {
  const binding = JSON.parse(await readFile(path.join(root, 'reference/engine.lock.json'), 'utf8'));
  validateBinding(binding);
  let prepared = false, catalog;
  try {
    catalog = await readCanonicalContent(root, undefined, { frozen:Boolean(env.INNO_DOCS_PLAN) });
    prepared = ['repository', 'revision', 'sourceTree', 'toolingRevision'].every(key => catalog[key] === binding[key]);
  } catch (error) {
    if (env.INNO_DOCS_PLAN) throw error;
    console.log(`Preparing current documentation inputs: ${error.message}`);
  }
  if (!prepared && env.INNO_DOCS_PLAN) throw new Error('Frozen CI preparation is missing or bound to other inputs.');
  if (!prepared) await prepareCatalog({ root, engineRoot: env.INNO_DOCS_ENGINE_ROOT, dotnetHost: env.INNO_DOCS_DOTNET, signal });
  if (!prepared) catalog = await readCanonicalContent(root);
  const plan = env.INNO_DOCS_PLAN ? JSON.parse(await readFile(path.resolve(root, env.INNO_DOCS_PLAN), 'utf8')) : null;
  if (plan && plan.snapshot !== catalog.snapshot) throw new Error('Execution plan differs from the frozen catalog.');
  const partial = plan?.mode === 'Incremental';
  const selectedPaths = partial ? new Set(plan.pages.map(page => page.path)) : null;
  if (partial && !selectedPaths.size) throw new Error('Do not invoke the renderer for an empty incremental selection.');
  const facts = await checkProjection({ root, catalog, frozen: true });
  if (facts.status !== 'Passed') throw new Error(`Documentation input validation failed: ${facts.errors.join('\n')}`);
  await run(process.execPath, [path.join(root, 'node_modules/astro/bin/astro.mjs'), 'build'],
    { cwd: root, env: { ...env, INNO_DOCS_FROZEN: 'true' }, signal });
  const complete = !partial && Boolean(env.INNO_DOCS_EXAMPLE_MANIFEST);
  const exampleReceipts = complete ? await readExampleReceipts(root, env.INNO_DOCS_EXAMPLE_MANIFEST) : [];
  const rendered = await checkProjection({ root, catalog, site: path.join(root, 'dist'), complete, exampleReceipts, selectedPaths, frozen: true });
  await writeFile(path.join(root, 'artifacts/site-build.json'), JSON.stringify(rendered, null, 2) + '\n');
  if (rendered.status !== 'Passed') throw new Error(`Rendered documentation validation failed: ${rendered.errors.join('\n')}`);
  if (complete) await writeFile(path.join(root, 'artifacts/completion.json'), JSON.stringify(rendered, null, 2) + '\n');
  if (partial) await writeFile(path.join(root, 'dist/partial-preview.json'), JSON.stringify({ kind: 'PartialPreview', snapshot: catalog.snapshot,
    message: 'Partial preview. Only listed pages are rendered; other links refer to the complete candidate catalog.', pages: plan.pages }, null, 2));
  console.log(`Website build passed (${rendered.pages} pages). Executable example certification remains a GitHub PR requirement.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const cancellation = new AbortController();
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => cancellation.abort());
  await buildSite(fileURLToPath(new URL('../', import.meta.url)), process.env, cancellation.signal);
}
