import { createHash } from 'node:crypto';
import { contentRoute } from './documentation-routes.mjs';

/** @typedef {{ label: string, href?: string, key?: string, children?: string }} NavigationEntry */

/** Content-addressed navigation fragments, shared by every page and cached independently. */
export function sharedNavigation(navigation, catalog, base = '/InnoEngine.Docs') {
  const titles = new Map(catalog.pages.map(page => [contentRoute(page.path.replace(/^content\/en\//, '')), page.title]));
  const chunks = new Map();
  const trails = new Map();
  const href = slug => `${base}/${slug ? slug + '/' : ''}`;
  /** @returns {NavigationEntry[]} */
  function entries(items, trail = '', ancestors = []) {
    return items.map((item) => {
      const label = item.label ?? titles.get(item.slug);
      if (!label) throw new Error(`Navigation label missing: ${item.slug}`);
      if (!item.items) { trails.set(href(item.slug), ancestors); return { label, href: href(item.slug) }; }
      const home = item.items.find(child => child.attrs?.['data-group-home'] === 'true');
      const key = home ? href(home.slug) : `${trail}/${label}`;
      if (home) trails.set(href(home.slug), ancestors);
      const children = entries(item.items.filter(child => child !== home), key, [...ancestors, key]);
      const body = JSON.stringify(children);
      const id = createHash('sha256').update(body).digest('hex');
      chunks.set(id, body);
      return { label, key, ...(home ? { href: href(home.slug) } : {}), children: `${base}/navigation-data/${id}.json` };
    });
  }
  const roots = entries(navigation);
  return { roots, chunks, trails };
}
