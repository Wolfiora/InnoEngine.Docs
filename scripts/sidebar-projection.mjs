import { readOwned } from './owned-input.mjs';
import { contentRoute } from './documentation-routes.mjs';

const route = file => contentRoute(file.replace(/^content\/en\//, ''));

/** Read containment from captured declarations; dotted names are not ownership evidence. */
export async function nestedTypeParents(root, registry, binding) {
  const entries = new Map(registry.entries.map(entry => [entry.symbol, entry]));
  const parents = new Map();
  for (const manifest of binding.apiManifests ?? []) {
    const facts = JSON.parse(await readOwned(root, manifest.path));
    const category = facts.model === 'source-clr' ? 'engine' : 'scripting';
    for (const project of facts.projects) for (const symbol of project.symbols) {
      if (symbol.kind !== 'NamedType' || !symbol.containingType) continue;
      const prefix = `${category}:${project.name}:`;
      const child = entries.get(prefix + symbol.id), parent = entries.get(prefix + symbol.containingType);
      if (!child || !parent) continue;
      const key = route(child.path), value = route(parent.path);
      if (parents.has(key) && parents.get(key) !== value) throw new Error(`Conflicting nested type owner: ${key}`);
      parents.set(key, value);
    }
  }
  return parents;
}

/** Sidebar visibility is separate from the complete page/pagination relationships. */
export function sidebarProjection(navigation, catalog, typeParents = new Map()) {
  const members = new Set(catalog.pages.filter(page => page.kind === 'api'
    && !Object.keys(page.symbols ?? {}).some(id => id.startsWith('T:'))).map(page => route(page.path)));
  const titles = new Map(catalog.pages.map(page => [route(page.path), page.title]));
  const homeOf = item => item.items?.find(child => child.attrs?.['data-group-home'] === 'true');
  const slugOf = item => item.slug ?? homeOf(item)?.slug;
  function visible(items) {
    return items.filter(item => !members.has(slugOf(item))).map(item => item.items
      ? { ...item, items: visible(item.items) } : { ...item });
  }
  const roots = visible(navigation), bySlug = new Map();
  function collect(items) {
    for (const item of items) {
      if (item.items) collect(item.items);
      const slug = slugOf(item);
      if (slug !== undefined) bySlug.set(slug, { item, siblings: items });
    }
  }
  collect(roots);
  for (const [child, parent] of typeParents) {
    const seen = new Set([child]);
    for (let ancestor = parent; ancestor; ancestor = typeParents.get(ancestor)) {
      if (seen.has(ancestor)) throw new Error(`Cyclic nested type navigation: ${child}`);
      seen.add(ancestor);
    }
    const from = bySlug.get(child), to = bySlug.get(parent);
    if (!from || !to) throw new Error(`Missing nested type navigation: ${child}`);
    from.siblings.splice(from.siblings.indexOf(from.item), 1);
    if (!to.item.items) {
      const home = { ...to.item, attrs: { ...to.item.attrs, 'data-group-home': 'true' } };
      delete to.item.slug; delete to.item.attrs;
      to.item.items = [home];
    }
    to.item.items.push(from.item);
  }
  function compact(items, inApi = false) {
    const result = items.map(item => {
      if (!item.items) return item;
      const home = homeOf(item), children = compact(item.items.filter(child => child !== home), inApi || slugOf(item) === 'api' || slugOf(item)?.startsWith('api/'));
      if (home && !children.length) return { slug: home.slug, label: item.label ?? home.label };

      return { ...item, items: home ? [home, ...children] : children };
    });
    if (!inApi) return result;
    return result.sort((a,b) => {
      const rank = item => item.items ? 0 : 1;
      return rank(a)-rank(b) || (a.label ?? titles.get(slugOf(a)) ?? '').localeCompare(b.label ?? titles.get(slugOf(b)) ?? '', 'en', {sensitivity:'base'}) || (slugOf(a) ?? '').localeCompare(slugOf(b) ?? '');
    });
  }
  return compact(roots);
}
