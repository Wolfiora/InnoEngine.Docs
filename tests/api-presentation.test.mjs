import test from 'node:test';
import assert from 'node:assert/strict';
import { apiPresentation } from '../scripts/api-presentation.mjs';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

test('the real Markdown renderer forwards source metadata and renders a visible Tip', async () => {
  const url = 'https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8';
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const rendered = await processor.render('> [!TIP]\n> XML explanation.\n\n## Required contracts\n\nRead ownership.\n\n<!-- api-source -->\n[Source declaration](' + url + ')');
  assert.equal(rendered.metadata.frontmatter.sourceDeclaration, url);
  assert.match(rendered.code, /<aside class="documentation-tip"/);
  assert.match(rendered.code, /XML explanation\./);
  assert.doesNotMatch(rendered.code, /Source declaration|api-source/);
});

test('canonical source provenance moves to footer metadata and unrelated links remain', () => {
  const url = 'https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8';
  const paragraph = { type: 'paragraph', children: [{ type: 'text', value: 'Manual explanation' }] };
  const tree = { children: [paragraph, { type: 'html', value: '<!-- api-source -->' },
    { type: 'paragraph', children: [{ type: 'link', url }] }] };
  const file = { data: {} };
  apiPresentation()(tree, file);
  assert.equal(file.data.astro.frontmatter.sourceDeclaration, url);
  assert.deepEqual(tree.children, [paragraph]);
});

test('malformed or noncanonical source footers fail instead of hiding content', () => {
  const tree = { children: [{ type: 'html', value: '<!-- api-source -->' },
    { type: 'paragraph', children: [{ type: 'link', url: 'javascript:alert(1)' }] }] };
  assert.throws(() => apiPresentation()(tree, { data: {} }), /Invalid canonical/);
});

test('GitHub-style tips have visible semantic presentation without collapsing content', () => {
  const tip = { type: 'blockquote', children: [{ type: 'paragraph', children: [{ type: 'text', value: '[!TIP]\nXML explanation.' }] }] };
  apiPresentation()({ children: [tip] }, { data: {} });
  assert.equal(tip.data.hName, 'aside');
  assert.equal(tip.children[1].children[0].value, 'XML explanation.');
});
