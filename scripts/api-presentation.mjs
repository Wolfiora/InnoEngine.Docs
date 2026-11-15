/** Present canonical API provenance in the footer without changing its query content. */
export function apiPresentation() {
  return (tree, file) => {
    const index = tree.children.findIndex(node => node.type === 'html' && node.value.trim() === '<!-- api-source -->');
    if (index >= 0) {
      const paragraph = tree.children[index + 1];
      const link = paragraph?.type === 'paragraph' && paragraph.children.length === 1 ? paragraph.children[0] : null;
      if (index !== tree.children.length - 2 || link?.type !== 'link'
        || !/^https:\/\/github\.com\/Wolfiora\/InnoEngine\/blob\/[a-f0-9]{40}\//.test(link.url)) {
        throw new Error('Invalid canonical API source footer.');
      }
      file.data.astro ??= {};
      file.data.astro.frontmatter ??= {};
      file.data.astro.frontmatter.sourceDeclaration = link.url;
      tree.children.splice(index, 2);
      const titleIndex = tree.children.findIndex(node => node.type === 'heading' && node.depth === 1);
      const summary = titleIndex >= 0 ? tree.children[titleIndex + 1] : null;
      if (summary?.type === 'blockquote') {
        summary.data = { hProperties: { className: ['api-summary'] } };
      }
    }
    for (const node of tree.children) {
      if (node.type !== 'blockquote') continue;
      const first = node.children[0]?.children?.[0];
      if (first?.type !== 'text') continue;
      const match = /^\[!(SYNCED|OUTDATED|VERIFIED)\]\n/.exec(first.value);
      if (!match) continue;
      const status = match[1].toLowerCase();
      const title = status[0].toUpperCase() + status.slice(1);
      first.value = first.value.slice(match[0].length);
      node.data = { hName: 'aside', hProperties: { className: ['api-status', 'api-status-' + status], 'aria-label': title } };
      node.children.unshift({ type: 'paragraph', data: { hProperties: { className: ['api-status-heading'] } }, children: [
        { type: 'emphasis', children: [{ type: 'text', value: status === 'synced' ? '!' : status === 'outdated' ? '×' : '✓' }],
          data: { hName: 'span', hProperties: { className: ['api-status-icon'], 'aria-hidden': 'true' } } },
        { type: 'strong', children: [{ type: 'text', value: title }] },
      ] });
    }
  };
}
