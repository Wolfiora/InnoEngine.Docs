import path from 'node:path';
import { readFile, readdir, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { contentEntryId } from './documentation-routes.mjs';

const hash = (value) => createHash('sha256').update(value).digest('hex');

/** Read the prepared canonical projection. Rendering never reparses API ownership or invokes the SDK. */
export async function readCanonicalContent(root, file = 'artifacts/canonical-catalog.json') {
  root = path.resolve(root);
  const catalog = JSON.parse(await readFile(path.join(root, file), 'utf8'));
  if (!catalog.sourceFiles || !Array.isArray(catalog.pages)) {
    throw new Error('Prepare the canonical catalog with the pinned documentation tooling before rendering.');
  }
  async function owned(relative) {
    const full = path.resolve(root, relative);
    if (path.relative(root, full).replaceAll('\\', '/') !== relative || path.isAbsolute(relative)) {
      throw new Error(`Noncanonical documentation input: ${relative}`);
    }
    let current = root;
    for (const segment of relative.split('/')) {
      current = path.join(current, segment);
      if ((await lstat(current)).isSymbolicLink()) throw new Error(`Linked documentation input: ${relative}`);
    }
    return full;
  }
  for (const [relative, expected] of Object.entries(catalog.sourceFiles)) {
    if (hash(await readFile(await owned(relative), 'utf8')) !== expected) {
      throw new Error(`Stale documentation snapshot: ${relative}. Refresh the catalog explicitly.`);
    }
  }
  const actual = [];
  async function visit(relative) {
    for (const item of await readdir(path.join(root, relative), { withFileTypes: true })) {
      const child = relative + '/' + item.name;
      if (item.isSymbolicLink()) throw new Error(`Linked documentation input: ${child}`);
      if (item.isDirectory()) await visit(child);
      else if (item.isFile() && item.name.endsWith('.md')) actual.push(child);
    }
  }
  await visit('content/en');
  const expected = Object.keys(catalog.sourceFiles).filter((name) => name.startsWith('content/en/') && name.endsWith('.md'));
  if (JSON.stringify(actual.sort()) !== JSON.stringify(expected.sort())) throw new Error('The Markdown file set changed. Refresh the catalog explicitly.');
  const ids = new Set();
  for (const page of catalog.pages) {
    if (!page.path.startsWith('content/en/') || !page.path.endsWith('.md') || typeof page.markdown !== 'string'
      || hash(page.markdown) !== page.contentIdentity) throw new Error(`Invalid canonical page: ${page.path}`);
    await owned(page.path);
    const id = contentEntryId(page.path.slice('content/en/'.length));
    if (ids.has(id)) throw new Error(`Duplicate canonical route: ${id}`);
    ids.add(id);
  }
  return catalog;
}

/**
 * Astro is a projection adapter; the engine library owns composition, symbols and source identities.
 * @returns {import('astro/loaders').Loader}
 */
export function canonicalContentLoader() {
  return {
    name: 'inno-canonical-documentation',
    async load({ config, store, parseData, renderMarkdown, generateDigest, watcher }) {
      const root = config.root;
      async function load() {
        const catalog = await readCanonicalContent(fileURLToPath(root));
        const remaining = new Set(store.keys());
        for (const page of catalog.pages) {
          const id = contentEntryId(page.path.slice('content/en/'.length));
          remaining.delete(id);
          const digest = generateDigest(page.markdown);
          if (store.get(id)?.digest === digest) continue;
          const fileURL = new URL(page.path, root);
          const rendered = await renderMarkdown(page.markdown, { fileURL });
          const data = await parseData({ id, data: rendered.metadata?.frontmatter ?? {}, filePath: page.path });
          store.set({ id, data, body: page.markdown, filePath: page.path, rendered, digest,
            assetImports: rendered.metadata?.imagePaths });
        }
        for (const id of remaining) store.delete(id);
      }
      await load();
      // Authoring refresh is explicit; a ready catalog publication is the only watcher trigger.
      const catalogFile = new URL('artifacts/canonical-catalog.json', root);
      watcher?.add(fileURLToPath(catalogFile));
      watcher?.on('change', async (changed) => {
        if (pathToFileURL(path.resolve(changed)).href === catalogFile.href) await load();
      });
    },
  };
}
