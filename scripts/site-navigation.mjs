import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { documentationNavigation } from './documentation-navigation.mjs';
import { sharedNavigation } from './shared-navigation.mjs';
const catalog = JSON.parse(readFileSync(path.resolve('artifacts/canonical-catalog.json'), 'utf8'));
export const navigation = sharedNavigation(documentationNavigation(
  parse(readFileSync(path.resolve('navigation/en.yml'), 'utf8')), catalog), catalog);
