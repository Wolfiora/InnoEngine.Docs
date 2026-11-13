import { contentRoute } from './documentation-routes.mjs';

/** Derive API category navigation from the canonical catalog, independent of framework file locations. */
export function documentationNavigation(authored, catalog) {
  const directories = new Map();
  for (const page of catalog.pages) {
    if (!page.id?.startsWith('api.directory.')) continue;
    const slug = contentRoute(page.path.replace(/^content\/en\//, ''));
    if (directories.has(slug)) throw new Error(`Duplicate API category: ${slug}`);
    directories.set(slug, page);
  }
  function category(slug, label) {
    const page = directories.get(slug);
    if (!page) throw new Error(`Missing API directory: ${slug}`);
    const children = [...directories.keys()].filter(key => key.slice(0, key.lastIndexOf('/')) === slug).sort();
    const home = { slug, label: label ?? page.title, attrs: { 'data-group-home': 'true' } };
    return children.length ? { label: label ?? page.title, collapsed: true, items: [home, ...children.map(child => category(child))] } : home;
  }
  let found = false;
  function resolve(items) {
    return items.map(item => {
      if (item.apiDirectories === true) {
        if (found) throw new Error('API navigation can only be declared once.');
        found = true;
        return { label: item.label, items: [{ slug: 'api' }, category('api/engine', 'Engine'), category('api/scripting', 'Scripting')] };
      }
      if (item.autogenerate) throw new Error('Navigation must use explicit canonical routes, not framework filesystem guessing.');
      return item.items ? { ...item, items: resolve(item.items) } : item;
    });
  }
  return resolve(authored);
}
