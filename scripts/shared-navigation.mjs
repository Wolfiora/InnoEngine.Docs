import path from 'node:path';
import { createHash } from 'node:crypto';
import { contentRoute } from './documentation-routes.mjs';
import { sidebarProjection } from './sidebar-projection.mjs';

/** @typedef {{ label: string, href?: string, key?: string, children?: string }} NavigationEntry */

/** Content-addressed navigation fragments, shared by every page and cached independently. */
export function sharedNavigation(navigation, catalog, base = '/InnoEngine.Docs', typeParents = new Map()) {
  const titles = new Map(catalog.pages.map(page => [contentRoute(page.path.replace(/^content\/en\//, '')), page.title]));
  const chunks = new Map();
  const trails = new Map();
  const pagination = new Map();
  const href = slug => `${base}/${slug ? slug + '/' : ''}`;
  function paginate(items) {
    const peers = items.map(item => {
      const home = item.items?.find(child => child.attrs?.['data-group-home'] === 'true');
      const slug = home?.slug ?? item.slug;
      return slug === undefined ? null : { href: href(slug), label: item.label ?? titles.get(slug) };
    }).filter(Boolean);
    for (let i = 0; i < peers.length; i++) pagination.set(peers[i].href, { prev: peers[i-1], next: peers[i+1] });
    for (const item of items) if (item.items) paginate(item.items.filter(child => child.attrs?.['data-group-home'] !== 'true'));
  }
  paginate(navigation);
  const visible = sidebarProjection(navigation, catalog, typeParents);
  // Visible siblings share exactly the sidebar order and nested-type ownership.
  paginate(visible);
  // The canonical Members table owns member order, including kind grouping and overloads.
  for (const page of catalog.pages) {
    if (page.kind !== 'api') continue;
    const section = page.markdown?.split(/^## Members\s*$/m)[1]?.split(/^## /m)[0];
    if (!section) continue;
    const members = [...section.matchAll(/^\|[^|]+\|\s*\[[^\]]+\]\(([^)]+\.md)\)/gm)]
      .map(match => contentRoute(path.posix.normalize(path.posix.join(path.posix.dirname(page.path), match[1])).replace(/^content\/en\//,'')))
      .map(slug => ({slug}));
    if (members.length) paginate(members);
  }
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
  const roots = entries(visible);
  return { roots, chunks, trails, pagination };
}
