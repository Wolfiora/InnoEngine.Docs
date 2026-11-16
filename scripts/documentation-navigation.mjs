import { contentRoute } from './documentation-routes.mjs';

/** Derive category and type navigation from published canonical routes and symbol identities. */
export function documentationNavigation(authored, catalog) {
  const directories = new Map();
  for (const page of catalog.pages) {
    if (!page.id?.startsWith('api.directory.')) continue;
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    if (directories.has(slug)) throw new Error(`Duplicate API category: ${slug}`);
    directories.set(slug, page);
  }
  const types = new Map();
  for (const page of catalog.pages) {
    if (page.kind !== 'api' || !Object.keys(page.symbols ?? {}).some(id => id.startsWith('T:'))) continue;
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    // The canonical publisher owns category paths, including project and Scope classification.
    const parent = [...directories.keys()].filter(directory => slug.startsWith(directory + '/'))
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
    const children = [...directories.keys()].filter(key => key.slice(0, key.lastIndexOf('/')) === slug).sort();
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
  // and secondary project guides. Use registered routes/contracts, never symbol-name guessing.
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
  const ids = new Map(catalog.pages.map(page => [page.id, page]));
  const addedGroups = new Set();
  function ensure(page) {
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    if (registered.has(slug)) return registered.get(slug);
    if (!slug || slug === '404') return null;
    let parent = null;
    const type = (page.kind === 'api' ? page.contracts ?? [] : []).map(id => ids.get(id.split('#')[0]))
      .find(owner => owner !== page && Object.keys(owner?.symbols ?? {}).some(id => id.startsWith('T:')));
    if (type) parent = ensure(type);
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
