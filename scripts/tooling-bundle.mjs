import path from 'node:path';
import { readFile, readdir, lstat, writeFile, rename } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { run } from './tooling-process.mjs';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

/** Follow actual local module imports; package implementations are bound by the lockfile. */
export async function moduleInputs(entries, root = process.cwd()) {
  const ts = await import('typescript');
  const pending = [...entries], inputs = {};
  while (pending.length) {
    const file = pending.shift();
    if (inputs[file]) continue;
    if (file.startsWith('../') || path.isAbsolute(file)) throw new Error('Checker dependency escaped the repository.');
    const text = await readFile(path.join(root, file), 'utf8');
    inputs[file] = hash(text);
    const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
    const visit = node => {
      const specifier = ts.isImportDeclaration(node) || ts.isExportDeclaration(node) ? node.moduleSpecifier
        : ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword ? node.arguments[0] : null;
      if (specifier && ts.isStringLiteral(specifier) && specifier.text.startsWith('.'))
        pending.push(path.posix.normalize(path.posix.join(path.posix.dirname(file), specifier.text)));
      ts.forEachChild(node, visit);
    };
    visit(source);
  }
  return Object.entries(inputs).sort();
}

/** Evaluate real project references and imported inputs before choosing an immutable managed bundle. */
export async function bundleInputs({ host, project, engine, workspace, env, signal }) {
  const pending = [project], seen = new Set(), inputs = {};
  let sdkRoot;
  const normalize = text => {
    for (const [root, label] of [[sdkRoot, '<sdk>'], [engine, '<engine>'], [workspace, '<adapter>']]) {
      if (root) for (const spelling of [JSON.stringify(root).slice(1,-1), root.replaceAll('\\', '/'), root])
        text = text.replaceAll(spelling, label);
    }
    return text;
  };
  const fileKey = file => {
    if (sdkRoot) {
      const sdk = path.relative(sdkRoot, file).replaceAll('\\', '/');
      if (!sdk.startsWith('../') && !path.isAbsolute(sdk)) return 'sdk/' + sdk;
    }
    const relative = path.relative(engine, file).replaceAll('\\', '/');
    if (!relative.startsWith('../')) return relative;
    const adapter = path.relative(workspace, file).replaceAll('\\', '/');
    return !adapter.startsWith('../') ? 'adapter/' + adapter : 'sdk/' + path.basename(file);
  };
  const addFile = async file => {
    file = path.resolve(file);
    const bytes = await readFile(file);
    const digest = hash(/\.(csproj|props|targets)$/.test(file) ? normalize(bytes.toString('utf8')) : bytes);
    const key = fileKey(file);
    inputs[key.startsWith('sdk/') ? key + '/' + digest : key] = digest;
  };
  while (pending.length) {
    const current = pending.shift();
    if (seen.has(current)) continue;
    seen.add(current);
    const output = await run(host, ['msbuild', current, '-nologo', '-p:DesignTimeBuild=true',
      '-getItem:ProjectReference,Compile,EmbeddedResource,AdditionalFiles,Analyzer,PackageReference', '-getProperty:MSBuildAllProjects,MSBuildToolsPath,TargetFramework,DefineConstants'],
    { cwd: workspace, env, signal, capture: true });
    const evaluated = JSON.parse(output.slice(output.indexOf('{')));
    sdkRoot ??= evaluated.Properties.MSBuildToolsPath;
    if (!sdkRoot) throw new Error('The evaluated tooling graph has no selected SDK identity.');
    await addFile(current);
    for (const file of (evaluated.Properties.MSBuildAllProjects ?? '').split(';').filter(Boolean)) await addFile(file);
    for (const kind of ['Compile', 'EmbeddedResource', 'AdditionalFiles', 'Analyzer']) for (const item of evaluated.Items[kind] ?? []) {
      const file = item.FullPath ?? path.resolve(path.dirname(current), item.Identity);
      await addFile(file);
    }
    const properties = { ...evaluated.Properties };
    delete properties.MSBuildAllProjects;
    inputs[fileKey(current) + ':evaluation'] = JSON.parse(normalize(JSON.stringify({ properties,
      packages: (evaluated.Items.PackageReference ?? []).map(item => [item.Identity, item.Version]) })));
    for (const reference of evaluated.Items.ProjectReference ?? []) pending.push(path.resolve(reference.FullPath ?? path.resolve(path.dirname(current), reference.Identity)));
  }
  await addFile(path.join(engine, 'global.json'));
  // Source-level imports and NuGet configuration can affect item expansion and package resolution.
  const rootFiles = await readdir(engine);
  for (const file of rootFiles.filter(name => /\.(props|targets)$|^NuGet\.Config$/i.test(name))) await addFile(path.join(engine, file));
  return { key: hash(JSON.stringify({ schema: 1, inputs: Object.entries(inputs).sort(), platform: process.platform, arch: process.arch })), inputs };
}
async function inventory(directory) {
  const files = {};
  async function visit(relative) {
    for (const entry of await readdir(path.join(directory, relative), { withFileTypes: true })) {
      if (entry.name === 'bundle.json') continue;
      const file = path.posix.join(relative, entry.name), full = path.join(directory, file);
      const info = await lstat(full);
      if (info.isSymbolicLink() || (!info.isDirectory() && (!info.isFile() || info.nlink !== 1))) throw new Error('Bundle contains a redirected input.');
      if (info.isDirectory()) await visit(file); else files[file] = hash(await readFile(full));
    }
  }
  await visit(''); return Object.fromEntries(Object.entries(files).sort());
}
export async function reusableBundle(directory, key) {
  try {
    const receipt = JSON.parse(await readFile(path.join(directory, 'bundle.json'), 'utf8'));
    if (receipt.key === key && JSON.stringify(receipt.files) === JSON.stringify(await inventory(directory)) && receipt.files['CatalogAdapter.dll']) return true;
    console.log('Ignoring corrupt managed bundle cache; retain it for diagnosis and rebuild.');
  } catch (error) { if (error.code === 'ENOENT') return false; console.log(`Invalid bundle cache: ${error.message}`); }
  await rename(directory, `${directory}.invalid-${Date.now()}`);
  return false;
}
export async function sealBundle(directory, key) {
  await writeFile(path.join(directory, 'bundle.json'), JSON.stringify({ key, files: await inventory(directory) }));
}
