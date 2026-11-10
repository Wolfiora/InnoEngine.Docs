import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const execute = promisify(execFile);
const script = fileURLToPath(new URL('../scripts/Update-ApiReference.ps1', import.meta.url));
const hash = (text) => createHash('sha256').update(text).digest('hex');

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'inno-reference-writer-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  async function write(relative, text) {
    const target = path.join(root, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, text);
  }
  const symbols = [
    { id: 'T:Probe.Value', signature: 'public class Probe.Value', kind: 'NamedType', containingType: null,
      documentation: '<member><summary>A value owned by its caller.</summary></member>', baseType: 'object', interfaces: [] },
    { id: 'M:Probe.Value.Read(System.String)', signature: 'public string? Probe.Value.Read(string key = "default")', kind: 'Method', containingType: 'T:Probe.Value',
      documentation: '<member><summary>Read the value.</summary><param name="key">The borrowed key.</param><returns>A value or <see langword="null"/>.</returns><remarks>Never release the caller\'s lease.</remarks></member>', interfaces: [] }
  ].map((symbol) => ({ ...symbol, signatureHash: hash(symbol.signature), source: 'src/Probe.cs', line: 1, implicitDeclaration: false }));
  const facts = { model: 'source-clr', configuration: 'Debug', target: null, projects: [{ name: 'Probe', project: 'src/Probe.csproj', symbols }] };
  const projects = JSON.stringify([{ name: 'Probe', path: 'src/Probe.csproj', surfaces: ['source-clr'] }]);
  const binding = { repository: 'https://github.com/Wolfiora/InnoEngine', revision: 'a'.repeat(40), sourceTree: 'b'.repeat(40),
    projectManifest: 'reference/projects.json', projectManifestIdentity: hash(projects),
    apiManifests: [{ path: 'reference/api.json', model: 'source-clr', configuration: 'Debug', target: null, sha256: '' }] };
  const contract = '# Ownership\n\nKeep the lease alive.\n';
  const catalog = { revision: binding.revision, sourceTree: binding.sourceTree,
    pages: [{ id: 'shared-contract', path: 'content/en/contract.md', contentIdentity: hash(contract), sections: { ownership: 1 },
      symbols: { 'F:Probe.LOWER': {}, 'F:Probe.lower': {} } }] };
  async function bind() {
    const payload = JSON.stringify(facts);
    binding.apiManifests[0].sha256 = hash(payload);
    await write('reference/api.json', payload);
    await write('reference/engine.lock.json', JSON.stringify(binding));
  }
  await write('reference/projects.json', projects);
  await write('content/en/contract.md', contract);
  await write('artifacts/catalog.json', JSON.stringify(catalog));
  await bind();
  const run = (extra = [], output = 'content/en/api/probe') => execute('pwsh', ['-NoProfile', '-File', script, '-Root', root,
    '-Facts', 'reference/api.json', '-Project', 'Probe', '-Contract', 'shared-contract#ownership',
    '-OutputDirectory', output, '-OwnershipManifest', 'reference/provenance/probe.json',
    '-Catalog', 'artifacts/catalog.json', ...extra], { cwd: root });
  return { root, facts, write, run, bind, page: path.join(root, 'content/en/api/probe/value.md') };
}

test('reference generation preserves exact declarations, XML constraints and shared contracts', async (t) => {
  const f = await fixture(t);
  await f.run();
  const first = await readFile(f.page, 'utf8');
  assert.match(first, /public string\? Probe.Value.Read\(string key = "default"\)/);
  assert.match(first, /Never release the caller's lease/);
  assert.match(first, /shared-contract#ownership/);
  assert.match(first, /\*\*Returns:\*\* A value or `null`/);
  await f.run();
  assert.equal(await readFile(f.page, 'utf8'), first);
  f.facts.projects[0].symbols[1].signature = 'public string? Probe.Value.Read(string key = "updated")';
  f.facts.projects[0].symbols[1].signatureHash = hash(f.facts.projects[0].symbols[1].signature);
  await f.bind();
  await f.run();
  assert.match(await readFile(f.page, 'utf8'), /key = "updated"/);
});

test('authored edits and existing unowned pages are never overwritten', async (t) => {
  const f = await fixture(t);
  await f.write('content/en/api/probe/value.md', '# Authored explanation\n');
  await assert.rejects(f.run(), /Refusing to overwrite an authored page/);
  assert.equal(await readFile(f.page, 'utf8'), '# Authored explanation\n');
});

test('XML blocks preserve lists and examples while reviewed upstream links stay explicit', async (t) => {
  const f = await fixture(t);
  f.facts.projects[0].symbols[1].documentation = '<member><summary>\n    Choose a mode:\n    - Read\n    - Write\n    ```c\n    invoke();\n    ```\n    @threadsafety Keep the owner thread.\n    [Upstream](CategoryGPU#vulkan)\n    </summary></member>';
  await f.write('reference/links.json', JSON.stringify({ project: 'Probe', links: [{ from: 'CategoryGPU#vulkan', to: 'https://wiki.libsdl.org/SDL3/CategoryGPU#vulkan' }] }));
  await f.bind();
  await f.run(['-XmlLinks', 'reference/links.json']);
  const page = await readFile(f.page, 'utf8');
  assert.match(page, /Choose a mode:\n- Read\n- Write\n```c\ninvoke\(\);\n```/);
  assert.match(page, /\*\*Thread safety:\*\* Keep the owner thread/);
  assert.match(page, /\[Upstream\]\(https:\/\/wiki.libsdl.org\/SDL3\/CategoryGPU#vulkan\)/);
  await f.write('reference/links.json', JSON.stringify({ project: 'Probe', links: [{ from: 'CategoryGPU#vulkan', to: 'javascript:alert(1)' }] }));
  await assert.rejects(f.run(['-XmlLinks', 'reference/links.json']), /HTTPS destinations/);
});

test('editing a previously generated file requires reconciliation', async (t) => {
  const f = await fixture(t);
  await f.run();
  const original = await readFile(f.page, 'utf8');
  await writeFile(f.page, original + '\nA new authored constraint.\n');
  await assert.rejects(f.run(), /edited or removed/);
  assert.match(await readFile(f.page, 'utf8'), /new authored constraint/);
});

test('unbound facts, stale shared contracts and unsupported XML fail before writing', async (t) => {
  const f = await fixture(t);
  await f.write('reference/api.json', '{}');
  await assert.rejects(f.run(), /not exactly bound/);
  await f.bind();
  await f.write('content/en/contract.md', '# Ownership\n\nDifferent contract.\n');
  await assert.rejects(f.run(), /shared contract changed/);
  await f.write('content/en/contract.md', '# Ownership\n\nKeep the lease alive.\n');
  f.facts.projects[0].symbols[1].documentation = '<member><summary>Read.</summary><unknown>Must not disappear.</unknown></member>';
  await f.bind();
  await assert.rejects(f.run(), /Unsupported XML/);
  await assert.rejects(readdir(path.dirname(f.page)), { code: 'ENOENT' });
});

test('missing handwritten semantics require explicit shared ABI treatment', async (t) => {
  const f = await fixture(t);
  f.facts.projects[0].symbols[1].documentation = '';
  await f.bind();
  await assert.rejects(f.run(), /no XML/);
  await f.run(['-SharedAbi']);
  assert.match(await readFile(f.page, 'utf8'), /No safe wrapper, ownership transfer or undocumented upstream behavior is inferred/);
});

test('an escaping output path is rejected before any generation', async (t) => {
  const f = await fixture(t);
  await assert.rejects(f.run([], 'content/en/api/../../../../outside'), /escapes the repository/);
});

test('large types split complete member families and retain containing-type contracts', async (t) => {
  const f = await fixture(t);
  const prototype = f.facts.projects[0].symbols[1];
  for (let i = 0; i < 65; i++) {
    const signature = `public void Probe.Value.Work${i}()`;
    f.facts.projects[0].symbols.push({ ...prototype, id: `M:Probe.Value.Work${i}`, signature, signatureHash: hash(signature) });
  }
  const signature = 'public string? Probe.Value.Read(int key)';
  f.facts.projects[0].symbols.push({ ...prototype, id: 'M:Probe.Value.Read(System.Int32)', signature, signatureHash: hash(signature) });
  await f.bind();
  await f.run();
  const overview = await readFile(f.page, 'utf8');
  assert.match(overview, /2 declarations/);
  assert.doesNotMatch(overview, /public string\?/);
  const names = await readdir(path.dirname(f.page));
  const readPage = names.find((name) => name.startsWith('member-method--read-'));
  assert.ok(readPage);
  const content = await readFile(path.join(path.dirname(f.page), readPage), 'utf8');
  assert.match(content, /Read\(string key = "default"\)/);
  assert.match(content, /Read\(int key\)/);
  assert.match(content, /#type-declaration/);
  const all = await Promise.all(names.map((name) => readFile(path.join(path.dirname(f.page), name), 'utf8')));
  assert.equal(all.join('\n').match(/<!-- api:/g).length, f.facts.projects[0].symbols.length);
  f.facts.projects[0].symbols.splice(2);
  await f.bind();
  await f.run();
  assert.deepEqual((await readdir(path.dirname(f.page))).sort(), ['index.md', 'value.md']);
});
