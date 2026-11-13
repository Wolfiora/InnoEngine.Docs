import path from 'node:path';
import { existsSync } from 'node:fs';
import { contentRoute } from './documentation-routes.mjs';

/** Adapt source-relative Markdown links to the static site's routes without changing source prose. */
export function documentationLinks({ contentRoot, publicRoot, base }) {
  const root = path.resolve(contentRoot);
  const assets = publicRoot ? path.resolve(publicRoot) : null;
  return (tree, file) => {
    if (!file.path) return;
    const source = path.resolve(file.path);
    const relativeSource = path.relative(root, source);
    if (relativeSource.startsWith('..' + path.sep) || path.isAbsolute(relativeSource)) return;
    walk(tree);

    function walk(node) {
      if ((node.type === 'link' || node.type === 'definition' || node.type === 'image') && typeof node.url === 'string') {
        let projectedAsset = false;
        if (assets && !/^[a-z][a-z0-9+.-]*:|^#|^\/\//i.test(node.url)) {
          const asset = /^([^?#]+)([?#].*)?$/.exec(node.url);
          if (asset) {
            const target = path.resolve(path.dirname(source), decodeURIComponent(asset[1]));
            const relative = path.relative(assets, target);
            if (relative && relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative)) {
              if (!existsSync(target)) throw new Error(`Missing public documentation asset: ${node.url}`);
              node.url = base.replace(/\/$/, '') + '/' + relative.replaceAll('\\', '/').split('/').map(encodeURIComponent).join('/') + (asset[2] ?? '');
              projectedAsset = true;
            }
          }
        }
        const match = projectedAsset ? null : /^([^?#]+\.md)([?#].*)?$/.exec(node.url);
        if (match && !/^[a-z][a-z0-9+.-]*:/i.test(match[1])) {
          const target = path.resolve(path.dirname(source), decodeURIComponent(match[1]));
          const relative = path.relative(root, target);
          if (relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) {
            throw new Error(`Documentation link escapes its content root: ${node.url}`);
          }
          if (!existsSync(target)) throw new Error(`Missing documentation link from ${relativeSource}: ${node.url}`);
          const route = contentRoute(relative);
          const segments = route ? route.split('/') : [];
          node.url = base.replace(/\/$/, '') + '/' + segments.map(encodeURIComponent).join('/')
            + (segments.length ? '/' : '') + (match[2] ?? '');
        }
      }
      for (const child of node.children ?? []) walk(child);
    }
  };
}
