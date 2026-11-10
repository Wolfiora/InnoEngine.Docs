import path from 'node:path';
import { existsSync } from 'node:fs';

/** Adapt source-relative Markdown links to the static site's routes without changing source prose. */
export function documentationLinks({ contentRoot, base }) {
  const root = path.resolve(contentRoot);
  return (tree, file) => {
    if (!file.path) return;
    const source = path.resolve(file.path);
    const relativeSource = path.relative(root, source);
    if (relativeSource.startsWith('..' + path.sep) || path.isAbsolute(relativeSource)) return;
    walk(tree);

    function walk(node) {
      if ((node.type === 'link' || node.type === 'definition') && typeof node.url === 'string') {
        const match = /^([^?#]+\.md)([?#].*)?$/.exec(node.url);
        if (match && !/^[a-z][a-z0-9+.-]*:/i.test(match[1])) {
          const target = path.resolve(path.dirname(source), decodeURIComponent(match[1]));
          const relative = path.relative(root, target);
          if (relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) {
            throw new Error(`Documentation link escapes its content root: ${node.url}`);
          }
          if (!existsSync(target)) throw new Error(`Missing documentation link from ${relativeSource}: ${node.url}`);
          const segments = relative.replaceAll('\\', '/').slice(0, -3).split('/');
          if (segments.at(-1) === 'index') segments.pop();
          node.url = base.replace(/\/$/, '') + '/' + segments.map(encodeURIComponent).join('/')
            + (segments.length ? '/' : '') + (match[2] ?? '');
        }
      }
      for (const child of node.children ?? []) walk(child);
    }
  };
}
