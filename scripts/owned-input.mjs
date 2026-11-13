import path from 'node:path';
import { lstat, readFile } from 'node:fs/promises';

export function inside(root, relative) {
  if (path.isAbsolute(relative)) throw new Error(`Expected a relative owned path: ${relative}`);
  const target = path.resolve(root, relative);
  const relation = path.relative(root, target);
  if (relation === '..' || relation.startsWith('..' + path.sep) || path.isAbsolute(relation)) throw new Error(`Path escapes its root: ${relative}`);
  return target;
}

export async function readOwned(root, relative) {
  const target = inside(root, relative);
  let current = path.resolve(root);
  for (const segment of path.relative(current, target).split(path.sep)) {
    current = path.join(current, segment);
    if ((await lstat(current)).isSymbolicLink()) throw new Error(`Reference input cannot traverse a link: ${relative}`);
  }
  return readFile(target);
}
