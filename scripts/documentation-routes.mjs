/** Preserve content paths, including nested .NET type punctuation, without title-based slug guessing. */
export function contentEntryId(entry) {
  const normalized = entry.replaceAll('\\', '/');
  if (!normalized.endsWith('.md') || normalized.startsWith('/')
    || normalized.split('/').some((segment) => segment === '..' || segment === '.' || !segment)) {
    throw new Error(`Invalid content entry: ${entry}`);
  }
  const id = normalized.slice(0, -3);
  return id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
}

/** Starlight presents a directory's index entry at that directory's route. */
export function contentRoute(entry) {
  const id = contentEntryId(entry);
  if (id === 'index') return '';
  return id;
}
