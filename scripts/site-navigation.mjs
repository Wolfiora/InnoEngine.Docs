import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { documentationNavigation } from './documentation-navigation.mjs';
import { sharedNavigation } from './shared-navigation.mjs';
const catalog = JSON.parse(readFileSync(new URL('../artifacts/canonical-catalog.json', import.meta.url), 'utf8'));
export const navigation = sharedNavigation(documentationNavigation(
  parse(readFileSync(new URL('../navigation/en.yml', import.meta.url), 'utf8')), catalog), catalog);
