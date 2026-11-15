import test from 'node:test';
import assert from 'node:assert/strict';
import { apiPresentation } from '../scripts/api-presentation.mjs';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
const footer = '\n\n<!-- api-source -->\n[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8)';

test('only the canonical API summary gets scoped quotation styling, including one summary', async () => {
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const url = 'https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8';
  const rendered = await processor.render('# Value\n\n> - Exact summary.\n\n## Remarks\n\n> An ordinary quotation.\n\n<!-- api-source -->\n[Source declaration](' + url + ')');
  assert.match(rendered.code, /<blockquote class="api-summary">\s*<ul>\s*<li>Exact summary\.<\/li>/);
  assert.match(rendered.code, /<blockquote>\s*<p>An ordinary quotation\.<\/p>/);
});

test('status moves to metadata while separate partial summaries remain a quoted list', async () => {
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const rendered = await processor.render('> [!SYNCED]\n> XML explanation.\n\n# Generator\n\n> - First declaration.\n>   \n>   Same summary, another paragraph.\n> \n> - Second declaration with `Value`.' + footer);
  assert.equal(rendered.metadata.frontmatter.editorialStatus, 'synced');
  assert.doesNotMatch(rendered.code, /XML explanation|<aside/);
  assert.match(rendered.code, /<blockquote class="api-summary">\s*<ul>/);
  assert.equal((rendered.code.match(/<li>/g) ?? []).length, 2);
  assert.match(rendered.code, /Same summary, another paragraph\./);
  assert.match(rendered.code, /Second declaration with <code>Value<\/code>/);
});

test('the renderer forwards canonical source and status without rendering the description', async () => {
  const url = 'https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8';
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const rendered = await processor.render('> [!SYNCED]\n> XML explanation.\n\n## Required contracts\n\nRead ownership.\n\n<!-- api-source -->\n[Source declaration](' + url + ')');
  assert.equal(rendered.metadata.frontmatter.sourceDeclaration, url);
  assert.equal(rendered.metadata.frontmatter.editorialStatus, 'synced');
  assert.doesNotMatch(rendered.code, /XML explanation|api-status|\[!SYNCED\]/);
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

test('ordinary authored status-like quotations are not removed', () => {
  const tip = { type: 'blockquote', children: [{ type: 'paragraph', children: [{ type: 'text', value: '[!SYNCED]\nAuthored quotation.' }] }] };
  const tree = { children: [tip] };
  apiPresentation()(tree, { data: {} });
  assert.deepEqual(tree.children, [tip]);
  assert.equal(tip.data, undefined);
});

for (const status of ['OUTDATED', 'VERIFIED']) {
  test(status + ' is forwarded without the old body panel', async () => {
    const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
    const rendered = await processor.render('> [!' + status + ']\n> Manual explanation.\n\n# Value' + footer);
    assert.equal(rendered.metadata.frontmatter.editorialStatus, status.toLowerCase());
    assert.doesNotMatch(rendered.code, /Manual explanation|api-status|\[!/);
    assert.match(rendered.code, /<h1/);
  });
}
