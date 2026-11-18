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
    for (const node of [...tree.children]) {
      if (index < 0) break;
      if (node.type !== 'blockquote') continue;
      const first = node.children[0]?.children?.[0];
      if (first?.type !== 'text') continue;
      const match = /^\[!(SYNCED|OUTDATED|AUTHORED)\]\n/.exec(first.value);
      if (!match) continue;
      const status = match[1].toLowerCase();
      if (file.data.astro.frontmatter.editorialStatus) throw new Error('Repeated canonical API status.');
      file.data.astro.frontmatter.editorialStatus = status;
      tree.children.splice(tree.children.indexOf(node), 1);
    }
  };
}
