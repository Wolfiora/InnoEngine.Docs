import path from 'node:path';
import { readFile, mkdir, rename, rmdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { prepareCatalog, validateBinding } from './prepare-catalog.mjs';
import { readCanonicalContent } from './canonical-content.mjs';
import { checkProjection, readExampleReceipts } from './check-projection.mjs';
import { run } from './tooling-process.mjs';
import { siteOrigin, assertPublicationBranch } from './site-environment.mjs';

/** Keep the established base path on static hosts without copying the complete website. */
export async function nestSite(site) {
  const staging = `${site}.vercel-staging`;
  await rename(site, staging);
  let created = false;
  try { await mkdir(site); created = true; await rename(staging, path.join(site, 'InnoEngine.Docs')); }
  catch (error) {
    if (created) await rmdir(site); // Remove only the empty directory created by this operation.
    await rename(staging, site);
    throw error;
  }
}

export async function buildSite(root = process.cwd(), env = process.env, signal) {
  assertPublicationBranch(env);
  const origin = siteOrigin(env);
  const binding = JSON.parse(await readFile(path.join(root, 'reference/engine.lock.json'), 'utf8'));
  validateBinding(binding);
  let prepared = false;
  try {
    const catalog = await readCanonicalContent(root);
    prepared = ['repository', 'revision', 'sourceTree', 'toolingRevision'].every(key => catalog[key] === binding[key]);
  } catch (error) { console.log(`Preparing current documentation inputs: ${error.message}`); }
  if (!prepared) await prepareCatalog({ root, engineRoot: env.INNO_DOCS_ENGINE_ROOT, dotnetHost: env.INNO_DOCS_DOTNET, signal });
  const catalog = await readCanonicalContent(root);
  const facts = await checkProjection({ root, catalog });
  if (facts.status !== 'Passed') throw new Error(`Documentation input validation failed: ${facts.errors.join('\n')}`);
  await run(process.execPath, [path.join(root, 'node_modules/astro/bin/astro.mjs'), 'build'],
    { cwd: root, env: { ...env, DOCS_SITE_URL: origin }, signal });
  const complete = Boolean(env.INNO_DOCS_EXAMPLE_MANIFEST);
  const exampleReceipts = complete ? await readExampleReceipts(root, env.INNO_DOCS_EXAMPLE_MANIFEST) : [];
  const rendered = await checkProjection({ root, catalog, site: path.join(root, 'dist'), complete, exampleReceipts });
  await writeFile(path.join(root, 'artifacts/site-build.json'), JSON.stringify(rendered, null, 2) + '\n');
  if (rendered.status !== 'Passed') throw new Error(`Rendered documentation validation failed: ${rendered.errors.join('\n')}`);
  if (complete) await writeFile(path.join(root, 'artifacts/completion.json'), JSON.stringify(rendered, null, 2) + '\n');
  // This is a new hosting build, not a copy of the GitHub-validated artifact or example receipt.
  if (env.VERCEL === '1') await nestSite(path.join(root, 'dist'));
  console.log(`Website build passed (${rendered.pages} pages). Executable example certification remains a GitHub PR requirement.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const cancellation = new AbortController();
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => cancellation.abort());
  await buildSite(fileURLToPath(new URL('../', import.meta.url)), process.env, cancellation.signal);
}
