import test from 'node:test';
import assert from 'node:assert/strict';
import { apiPresentation } from '../scripts/api-presentation.mjs';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

test('only the canonical API summary gets scoped quotation styling, including one summary', async () => {
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const url = 'https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8';
  const rendered = await processor.render('# Value\n\n> - Exact summary.\n\n## Remarks\n\n> An ordinary quotation.\n\n<!-- api-source -->\n[Source declaration](' + url + ')');
  assert.match(rendered.code, /<blockquote class="api-summary">\s*<ul>\s*<li>Exact summary\.<\/li>/);
  assert.match(rendered.code, /<blockquote>\s*<p>An ordinary quotation\.<\/p>/);
});

test('status precedes the title while separate partial summaries remain a quoted list', async () => {
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const rendered = await processor.render('> [!SYNCED]\n> XML explanation.\n\n# Generator\n\n> - First declaration.\n>   \n>   Same summary, another paragraph.\n> \n> - Second declaration with `Value`.');
  assert.ok(rendered.code.indexOf('<aside') < rendered.code.indexOf('<h1'));
  assert.match(rendered.code, /<blockquote>\s*<ul>/);
  assert.equal((rendered.code.match(/<li>/g) ?? []).length, 2);
  assert.match(rendered.code, /Same summary, another paragraph\./);
  assert.match(rendered.code, /Second declaration with <code>Value<\/code>/);
});

test('the real Markdown renderer forwards source metadata and renders a status header and icon', async () => {
  const url = 'https://github.com/Wolfiora/InnoEngine/blob/' + 'a'.repeat(40) + '/src/Value.cs#L8';
  const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
  const rendered = await processor.render('> [!SYNCED]\n> XML explanation.\n\n## Required contracts\n\nRead ownership.\n\n<!-- api-source -->\n[Source declaration](' + url + ')');
  assert.equal(rendered.metadata.frontmatter.sourceDeclaration, url);
  assert.match(rendered.code, /<aside class="api-status api-status-synced"/);
  assert.match(rendered.code, /XML explanation\./);
  assert.match(rendered.code, /class="api-status-icon" aria-hidden="true"/);
  assert.match(rendered.code, /<strong>Synced<\/strong>/);
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

test('Status panels have visible semantic presentation without collapsing content', () => {
  const tip = { type: 'blockquote', children: [{ type: 'paragraph', children: [{ type: 'text', value: '[!SYNCED]\nXML explanation.' }] }] };
  apiPresentation()({ children: [tip] }, { data: {} });
  assert.equal(tip.data.hName, 'aside');
  assert.equal(tip.children[1].children[0].value, 'XML explanation.');
});

for (const status of ['OUTDATED', 'VERIFIED']) {
  test(status + ' has a distinct accessible header without hiding its explanation', async () => {
    const processor = await createMarkdownProcessor({ remarkPlugins: [apiPresentation], syntaxHighlight: false });
    const rendered = await processor.render('> [!' + status + ']\n> Manual explanation.');
    assert.match(rendered.code, new RegExp('api-status-' + status.toLowerCase()));
    assert.match(rendered.code, /Manual explanation\./);
    assert.match(rendered.code, /api-status-heading/);
    assert.doesNotMatch(rendered.code, /Tip|\[!/);
  });
}
