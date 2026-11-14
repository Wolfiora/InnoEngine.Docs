import path from 'node:path';
import { mkdir, rename, writeFile, lstat } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { verifyPublication } from './publication-artifact.mjs';

/** Package already-verified bytes for Vercel; never render or rebuild the website. */
export async function prepareVercel({ site, destination, commit, run, attempt }) {
  site = path.resolve(site);
  destination = path.resolve(destination);
  const boundary = path.resolve('artifacts') + path.sep;
  if (!site.startsWith(boundary) || !destination.startsWith(boundary) || destination.startsWith(site + path.sep))
    throw new Error('Vercel transport must use separate task-owned artifact directories.');
  for (const target of [site, destination]) {
    let current = path.parse(target).root;
    for (const part of target.slice(current.length).split(path.sep)) {
      current = path.join(current, part);
      try { if ((await lstat(current)).isSymbolicLink()) throw new Error('Vercel transport cannot traverse links.'); }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
    }
  }
  await verifyPublication({ site, commit, run, attempt });
  await mkdir(destination); // An existing transport is never overwritten.
  const output = path.join(destination, '.vercel/output');
  const staticRoot = path.join(output, 'static');
  await mkdir(staticRoot, { recursive: true });
  const published = path.join(staticRoot, 'InnoEngine.Docs');
  await rename(site, published); // Same owned workspace; avoid copying a multi-GB site.
  await verifyPublication({ site: published, commit, run, attempt });
  await writeFile(path.join(output, 'config.json'), JSON.stringify({ version: 3, routes: [
    { src: '^/$', status: 307, headers: { Location: '/InnoEngine.Docs/' } },
    { handle: 'filesystem' },
    { src: '^/InnoEngine\\.Docs/$', dest: '/InnoEngine.Docs/index.html' },
    { src: '^/InnoEngine\\.Docs/(.*)/$', dest: '/InnoEngine.Docs/$1/index.html' },
    { src: '/.*', status: 404, dest: '/InnoEngine.Docs/404.html' },
  ] }, null, 2) + '\n');
  return published;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [site, destination, commit, run, attempt] = process.argv.slice(2);
  if (!attempt) throw new Error('Usage: vercel-output.mjs SITE DESTINATION COMMIT RUN ATTEMPT');
  console.log(await prepareVercel({ site, destination, commit, run, attempt: Number(attempt) }));
}
