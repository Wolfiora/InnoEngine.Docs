import path from 'node:path';
import { createHash } from 'node:crypto';
import { lstat, readdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const manifestName = 'publication.json';
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const hex = (value, length) => typeof value === 'string' && new RegExp(`^[a-f0-9]{${length}}$`).test(value);
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Freeze the exact already-validated static output. This operation never renders or compiles content. */
export async function createPublication({ site, catalog, completion, repository, commit, run, attempt }) {
  requireValue(repository === 'Wolfiora/InnoEngine.Docs' && hex(commit, 40), 'Publication requires an exact Docs repository commit.');
  requireValue(/^[1-9][0-9]*$/.test(String(run)) && Number.isSafeInteger(attempt) && attempt > 0, 'Publication requires its producing run and attempt.');
  requireValue(completion.status === 'Passed' && completion.scope === 'CompleteProjection'
    && completion.sourceApiStatus === 'Verified' && catalog.sourceApiStatus === 'Verified'
    && Array.isArray(completion.errors) && completion.errors.length === 0, 'Only complete, source-verified output can become a publication artifact.');
  requireValue(hex(catalog.snapshot, 64) && hex(catalog.contentIdentity, 64)
    && completion.snapshot === catalog.snapshot && completion.contentIdentity === catalog.contentIdentity, 'Completion does not bind this exact catalog.');
  requireValue(catalog.repository === 'https://github.com/Wolfiora/InnoEngine'
    && hex(catalog.revision, 40) && hex(catalog.sourceTree, 40), 'Publication has no exact engine binding.');
  const files = await inventory(site);
  requireValue(files['index.html'] !== undefined, 'Publication lacks its home page.');
  const manifest = { schema: 'inno-site/1', repository, commit, run: String(run), attempt,
    engine: { repository: 'Wolfiora/InnoEngine', revision: catalog.revision, tree: catalog.sourceTree },
    snapshot: catalog.snapshot, contentIdentity: catalog.contentIdentity, completionIdentity: hash(JSON.stringify(completion)), files };
  requireValue(JSON.stringify(files) === JSON.stringify(await inventory(site)), 'Static output changed while its publication identity was prepared.');
  await writeFile(path.join(site, manifestName), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
  return manifest;
}

/** Verify every delivered byte and reject missing, additional, linked or escaping files before deployment. */
export async function verifyPublication({ site, commit, run, attempt }) {
  const file = path.join(site, manifestName);
  const info = await lstat(file);
  requireValue(info.isFile() && !info.isSymbolicLink() && info.nlink === 1, 'Publication metadata must be an ordinary owned file.');
  const manifest = JSON.parse(await readFile(file, 'utf8'));
  requireValue(manifest.schema === 'inno-site/1' && manifest.repository === 'Wolfiora/InnoEngine.Docs', 'Unsupported publication source or schema.');
  requireValue(hex(commit, 40) && manifest.commit === commit && manifest.run === String(run)
    && manifest.attempt === attempt, 'Publication belongs to another commit, run or attempt.');
  requireValue(manifest.engine?.repository === 'Wolfiora/InnoEngine' && hex(manifest.engine.revision, 40)
    && hex(manifest.engine.tree, 40) && hex(manifest.snapshot, 64) && hex(manifest.contentIdentity, 64)
    && hex(manifest.completionIdentity, 64), 'Publication provenance is incomplete.');
  requireValue(manifest.files && Object.getPrototypeOf(manifest.files) === Object.prototype, 'Publication file identities are missing.');
  for (const [name, identity] of Object.entries(manifest.files)) {
    requireValue(name !== manifestName && name !== '' && !path.isAbsolute(name) && !name.includes('\\')
      && !name.includes(':') && name.split('/').every((part) => part !== '' && part !== '.' && part !== '..')
      && hex(identity, 64), 'Invalid publication file identity: ' + name);
  }
  const actual = await inventory(site);
  requireValue(actual['index.html'] !== undefined && JSON.stringify(actual) === JSON.stringify(manifest.files), 'Publication files differ from the verified artifact.');
  return manifest;
}

async function inventory(site) {
  const root = path.resolve(site);
  const rootInfo = await lstat(root);
  requireValue(rootInfo.isDirectory() && !rootInfo.isSymbolicLink(), 'Publication root cannot be a link.');
  const files = [];
  async function visit(directory) {
    for (const name of (await readdir(directory)).sort()) {
      const file = path.join(directory, name);
      const relative = path.relative(root, file).replaceAll('\\', '/');
      const info = await lstat(file);
      requireValue(!info.isSymbolicLink() && (info.isDirectory() || (info.isFile() && info.nlink === 1)), 'Publication contains an unsupported link or entry: ' + relative);
      if (info.isDirectory()) await visit(file);
      else if (relative !== manifestName) files.push([relative, hash(await readFile(file))]);
    }
  }
  await visit(root);
  return Object.fromEntries(files.sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [operation, site, ...inputs] = process.argv.slice(2);
  if (operation === 'create' && inputs.length === 2) {
    const [catalog, completion] = await Promise.all(inputs.map(async (file) => JSON.parse(await readFile(file, 'utf8'))));
    console.log(JSON.stringify(await createPublication({ site, catalog, completion, repository: process.env.GITHUB_REPOSITORY,
      commit: process.env.GITHUB_SHA, run: process.env.GITHUB_RUN_ID, attempt: Number(process.env.GITHUB_RUN_ATTEMPT) })));
  } else if (operation === 'verify' && inputs.length === 3) {
    console.log(JSON.stringify(await verifyPublication({ site, commit: inputs[0], run: inputs[1], attempt: Number(inputs[2]) })));
  } else throw new Error('Usage: publication-artifact.mjs create SITE CATALOG COMPLETION | verify SITE COMMIT RUN ATTEMPT');
}
