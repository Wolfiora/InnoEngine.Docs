import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { documentationNavigation } from './documentation-navigation.mjs';
import { sharedNavigation } from './shared-navigation.mjs';
import { nestedTypeParents } from './sidebar-projection.mjs';
const catalog = JSON.parse(readFileSync(path.resolve('artifacts/canonical-catalog.json'), 'utf8'));
const registry = JSON.parse(readFileSync(path.resolve('reference/api/content.json'), 'utf8'));
const binding = JSON.parse(readFileSync(path.resolve('reference/engine.lock.json'), 'utf8'));
const typeParents = await nestedTypeParents(process.cwd(), registry, binding);
export const navigation = sharedNavigation(documentationNavigation(
  parse(readFileSync(path.resolve('navigation/en.yml'), 'utf8')), catalog, registry), catalog, '/InnoEngine.Docs', typeParents);

// Use registered symbol containment, not paths or arbitrary related contracts.
const entries = new Map(registry.entries.map(entry => [entry.symbol, entry]));
export const selectedTypes = new Map();
for (const entry of registry.entries) {
  if (entry.type === entry.symbol) continue;
  const type = entries.get(entry.type);
  if (type) selectedTypes.set(href(entry.path), href(type.path));
}
function href(file) { return '/InnoEngine.Docs/' + file.replace(/^content\/en\//, '').replace(/(?:\/index)?\.md$/, '') + '/'; }
