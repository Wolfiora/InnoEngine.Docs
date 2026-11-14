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
    }
    for (const node of tree.children) {
      if (node.type !== 'blockquote') continue;
      const first = node.children[0]?.children?.[0];
      if (first?.type !== 'text' || !first.value.startsWith('[!TIP]\n')) continue;
      first.value = first.value.slice('[!TIP]\n'.length);
      node.data = { hName: 'aside', hProperties: { className: ['documentation-tip'], 'aria-label': 'Tip' } };
      node.children.unshift({ type: 'paragraph', children: [{ type: 'strong', children: [{ type: 'text', value: 'Tip' }] }] });
    }
  };
}
