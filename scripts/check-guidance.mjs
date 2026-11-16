import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import { fromHtml } from 'hast-util-from-html';
import { readOwned } from './owned-input.mjs';

// Operational Markdown is not product content. Reuse the site's existing Markdown
// renderer for its links and heading IDs rather than maintaining another parser.
const files = execFileSync('git',['ls-files'],{encoding:'utf8',maxBuffer:128*1024*1024}).trim().split('\n');
const known = new Set(files);
const guidance = files.filter(file => /^(README\.md|CONTRIBUTING\.md|AGENTS\.md|\.agents\/.*\.md)$/.test(file));
const processor = await createMarkdownProcessor();
const documents = new Map(), errors = [];
async function document(file) {
  if (documents.has(file)) return documents.get(file);
  const text = (await readOwned(process.cwd(),file)).toString('utf8');
  const rendered = await processor.render(text);
  const tree = fromHtml(rendered.code), links = [], ids = new Set();
  function visit(node) {
    if (node.type === 'element') {
      if (node.properties?.id) ids.add(String(node.properties.id));
      if (node.properties?.href) links.push(String(node.properties.href));
    }
    for (const child of node.children ?? []) visit(child);
  }
  visit(tree);
  const value = {text,links,ids}; documents.set(file,value);return value;
}
for (const file of guidance) {
  const doc = await document(file);
  if (!doc.text.trim()) errors.push(`Empty guidance: ${file}`);
  if (file === 'AGENTS.md' && Buffer.byteLength(doc.text)>8192) errors.push('Root instructions exceed 8 KiB.');
  if (file.endsWith('/SKILL.md') && !doc.text.startsWith('---')) errors.push(`Skill metadata is missing: ${file}`);
  for (const link of doc.links) {
    if (/^[a-z][a-z0-9+.-]*:|^\/\//i.test(link)) continue;
    const [filePart,anchor] = link.split('#');
    if (filePart.startsWith('/InnoEngine.Docs/')) continue;
    const target = filePart ? path.posix.normalize(path.posix.join(path.posix.dirname(file),decodeURIComponent(filePart.split('?')[0]))) : file;
    if (target.startsWith('../') || path.posix.isAbsolute(target)) {errors.push(`Guidance link leaves repository: ${file}: ${link}`);continue;}
    if (!known.has(target) && !files.some(candidate=>candidate.startsWith(target.replace(/\/$/,'')+'/'))) {errors.push(`Missing guidance link: ${file}: ${link}`);continue;}
    if (anchor && target.endsWith('.md') && !(await document(target)).ids.has(decodeURIComponent(anchor))) errors.push(`Missing guidance anchor: ${file}: ${link}`);
  }
}
await mkdir('artifacts/ci',{recursive:true});
await writeFile('artifacts/ci/guidance-result.json',JSON.stringify({status:errors.length?'Failed':'Passed',files:guidance.length,errors},null,2));
const plan = JSON.parse(await readFile('artifacts/ci/plan.json','utf8'));
if (!plan.prepare) await writeFile('artifacts/api-editorial.json',JSON.stringify({schema:'inno-api-editorial/1',status:'NotApplicable',reason:'NoApiInputsChanged'}));
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Passed: ${guidance.length} operational Markdown documents; no website or engine compilation.`);
