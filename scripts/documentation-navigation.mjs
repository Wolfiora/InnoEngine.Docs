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
      return item.items ? { ...item, collapsed: true, items: resolve(item.items) } : item;
    });
  }
  return resolve(authored);
}
