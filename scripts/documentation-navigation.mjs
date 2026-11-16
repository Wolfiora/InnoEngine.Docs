import path from 'node:path';
import { contentRoute } from './documentation-routes.mjs';

/** Derive category and type navigation from published canonical routes and symbol identities. */
export function documentationNavigation(authored, catalog, registry = { entries: [] }) {
  const apiEntries = new Map(registry.entries.map(entry => [entry.symbol, entry]));
  const declaringPaths = new Map(registry.entries.filter(entry => entry.type !== entry.symbol).map(entry => {
    const type = apiEntries.get(entry.type);
    if (!type) throw new Error(`Missing registered declaring type: ${entry.symbol}`);
    return [entry.path, type.path];
  }));
  const directories = new Map();
  for (const page of catalog.pages) {
    if (!page.id?.startsWith('api.directory.')) continue;
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    if (directories.has(slug)) throw new Error(`Duplicate API category: ${slug}`);
    directories.set(slug, page);
  }
  const declaredParents = new Map();
  for (const [slug, directory] of directories) for (const link of directory.links ?? []) {
    if (!link.endsWith('.md')) continue;
    const target = contentRoute(path.posix.normalize(path.posix.join(path.posix.dirname(directory.path), link)).replace(/^content\/en\//,''));
    if (!directories.has(target)) {
      if (declaredParents.has(target) && declaredParents.get(target) !== slug) throw new Error(`API type belongs to multiple canonical categories: ${target}`);
      declaredParents.set(target, slug);
    }
  }
  const types = new Map();
  for (const page of catalog.pages) {
    if (page.kind !== 'api' || !Object.keys(page.symbols ?? {}).some(id => id.startsWith('T:'))) continue;
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    // The canonical publisher owns category paths, including project and Scope classification.
    const parent = declaredParents.get(slug) ?? [...directories.keys()].filter(directory => slug.startsWith(directory + '/'))
      .sort((a, b) => b.length - a.length)[0];
    if (!parent) throw new Error(`API type has no canonical category: ${page.id}`);
    if (!types.has(parent)) types.set(parent, []);
    types.get(parent).push({ slug, label: page.title });
  }
  const alphabetical = (a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' })
    || (a.slug ?? a.items[0].slug).localeCompare(b.slug ?? b.items[0].slug, 'en');
  function category(slug, label) {
    const page = directories.get(slug);
    if (!page) throw new Error(`Missing API directory: ${slug}`);
    const children = [...directories.keys()].filter(key => key.slice(0, key.lastIndexOf('/')).replace(/\/_projects$/, '') === slug).sort();
    const home = { slug, label: label ?? page.title, attrs: { 'data-group-home': 'true' } };
    const entries = [...children.map(child => category(child)), ...(types.get(slug) ?? [])].sort(alphabetical);
    return entries.length ? { label: label ?? page.title, collapsed: true, items: [home, ...entries] } : home;
  }
  let found = false;
  function resolve(items) {
    return items.map(item => {
      if (item.apiDirectories === true) {
        if (found) throw new Error('API navigation can only be declared once.');
        found = true;
        return { label: item.label, collapsed: true, items: [{ slug: 'api', label: item.label, attrs: { 'data-group-home': 'true' } }, category('api/engine', 'Engine'), category('api/scripting', 'Scripting')] };
      }
      if (item.autogenerate) throw new Error('Navigation must use explicit canonical routes, not framework filesystem guessing.');
      return item.items ? { ...item, collapsed: true, items: resolve(item.items) } : { ...item };
    });
  }
  const result = resolve(authored);
  // Every catalog page can be reached and selected, including member fragments
  // and secondary project guides. Use registered containment, never the first related contract.
  const registered = new Map(), roots = new Map();
  function register(items, root) {
    for (const item of items) {
      if (item.slug !== undefined) { registered.set(item.slug, item); roots.set(item.slug.split('/')[0], root); }
      if (item.items) {
        register(item.items, root);
        const home = item.items.find(child => child.attrs?.['data-group-home'] === 'true');
        if (home) registered.set(home.slug, item);
      }
    }
  }
  for (const root of result) register([root], root);
  const routes = new Map(catalog.pages.map(page => [contentRoute(page.path.replace(/^content\/en\//, '')), page]));
  const pagesByPath = new Map(catalog.pages.map(page => [page.path, page]));
  const addedGroups = new Set();
  function ensure(page) {
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    if (registered.has(slug)) return registered.get(slug);
    if (!slug || slug === '404') return null;
    let parent = null;
    if (page.kind === 'api') {
      const type = pagesByPath.get(declaringPaths.get(page.path));
      if (!type) throw new Error(`API member has no registered declaring type: ${page.id}`);
      parent = ensure(type);
    }
    for (let directory = slug.slice(0, slug.lastIndexOf('/')); !parent && directory; directory = directory.includes('/') ? directory.slice(0, directory.lastIndexOf('/')) : '') {
      const ancestor = routes.get(directory);
      if (ancestor && ancestor !== page) parent = ensure(ancestor);
    }
    parent ??= roots.get(slug.split('/')[0]);
    if (!parent) return null;
    if (!parent.items) {
      const home = { ...parent, attrs: { ...parent.attrs, 'data-group-home': 'true' } };
      delete parent.slug; delete parent.attrs;
      Object.assign(parent, { label: home.label ?? routes.get(home.slug)?.title, collapsed: true, items: [home] });
      addedGroups.add(parent);
    }
    const entry = { slug, label: page.title };
    parent.items.push(entry); registered.set(slug, entry);
    return entry;
  }
  for (const page of catalog.pages) ensure(page);
  for (const group of addedGroups) group.items = [group.items[0], ...group.items.slice(1).sort(alphabetical)];
  return result;
}
