import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdir, readFile, writeFile, open, rm, lstat } from 'node:fs/promises';
import { randomUUID, createHash } from 'node:crypto';
import { run } from './tooling-process.mjs';
import { documentationSdk } from './documentation-sdk.mjs';
import { bundleInputs, reusableBundle, sealBundle } from './tooling-bundle.mjs';

const repository = 'https://github.com/Wolfiora/InnoEngine';
export function validateBinding(binding) {
  if (binding.repository !== repository || !/^[a-f0-9]{40}$/.test(binding.toolingRevision ?? '')
    || !/^[a-f0-9]{40}$/.test(binding.revision ?? '') || !/^[a-f0-9]{40}$/.test(binding.sourceTree ?? '')) {
    throw new Error('Documentation requires an exact approved engine/tooling binding.');
  }
}
const xml = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
async function writeChanged(file, value) {
  try { if (await readFile(file, 'utf8') === value) return; } catch (error) { if (error.code !== 'ENOENT') throw error; }
  await writeFile(file, value);
}

/** Explicit build preparation. Ordinary queries never invoke this bootstrap or access the network. */
export async function prepareCatalog({ root = process.cwd(), engineRoot = process.env.INNO_DOCS_ENGINE_ROOT,
  signal, dotnetHost, operation = [] } = {}) {
  root = path.resolve(root);
  const binding = JSON.parse(await readFile(path.join(root, 'reference/engine.lock.json'), 'utf8'));
  validateBinding(binding);
  const workspace = path.join(root, 'artifacts/tooling-bootstrap');
  // Own only the Docs artifact directory; refuse redirected outputs before mutating anything.
  for (const directory of [path.join(root, 'artifacts'), workspace]) {
    await mkdir(directory, { recursive: true });
    if ((await lstat(directory)).isSymbolicLink()) throw new Error('Tooling preparation cannot use a linked output directory.');
  }
  const lockPath = path.join(workspace, 'prepare.lock');
  const lock = await open(lockPath, 'wx').catch(error => { throw new Error(`Another catalog preparation owns this workspace, or its lock needs investigation: ${error.message}`); });
  try {
    await lock.writeFile(JSON.stringify({ pid: process.pid, started: new Date().toISOString() }));
    const engine = engineRoot ? path.resolve(root, engineRoot) : path.join(workspace, `engine-${binding.toolingRevision}`);
    const git = args => run('git', ['-C', engine, ...args], { signal, capture: true });
    if (!engineRoot) {
      await mkdir(engine, { recursive: true });
      if ((await lstat(engine)).isSymbolicLink()) throw new Error('Tooling checkout cannot be a link.');
      try { await lstat(path.join(engine, '.git')); }
      catch (error) {
        if (error.code !== 'ENOENT') throw error;
        await git(['init']);
        await git(['remote', 'add', 'origin', repository + '.git']);
        // Keep managed source available for real transitive references; never fetch native submodules.
        await git(['sparse-checkout', 'set', 'tools', 'src', 'build']);
      }
      let initialized = false;
      try { initialized = Boolean(await git(['rev-parse', '--verify', '--quiet', 'HEAD'])); }
      catch (error) { if (signal?.aborted) throw error; }
      if (!initialized) {
        if (await git(['status', '--porcelain', '--untracked-files=normal'])) throw new Error('Incomplete tooling checkout contains unexpected inputs.');
        // An interrupted fetch can resume; existing checked-out inputs are never reset or overwritten.
        await git(['-c', 'credential.interactive=never', 'fetch', '--filter=blob:none', '--depth=1', '--no-tags', 'origin', binding.toolingRevision]);
        await git(['-c', 'core.autocrlf=false', 'checkout', '--detach', binding.toolingRevision]);
      }
    }
    if (await git(['rev-parse', 'HEAD']) !== binding.toolingRevision) throw new Error('Tooling checkout differs from the immutable binding.');
    if (await git(['status', '--porcelain', '--untracked-files=normal'])) throw new Error('Tooling checkout contains edits; use an immutable checkout.');
    if (!engineRoot) {
      await git(['config', 'remote.origin.url', repository + '.git']);
      await git(['config', 'remote.origin.promisor', 'true']);
      await git(['sparse-checkout', 'set', 'tools', 'src', 'build']);
    }
    if (binding.revision === binding.toolingRevision && await git(['rev-parse', 'HEAD^{tree}']) !== binding.sourceTree) throw new Error('Engine tree identity differs from the selected source.');
    const project = path.join(engine, 'tools/Inno.Tooling.Documentation/Inno.Tooling.Documentation.csproj');
    await lstat(project);
    const source = await readFile(path.join(root, 'scripts/catalog-adapter.cs'), 'utf8');
    await writeChanged(path.join(workspace, 'CatalogAdapter.cs'), source);
    const projectPath = path.join(workspace, 'CatalogAdapter.csproj');
    await writeChanged(projectPath, `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net10.0</TargetFramework><ImplicitUsings>disable</ImplicitUsings><Nullable>enable</Nullable><EnableDefaultCompileItems>false</EnableDefaultCompileItems><PublishAot>false</PublishAot></PropertyGroup>
  <ItemGroup><Compile Include="CatalogAdapter.cs" /><ProjectReference Include="${xml(project.replaceAll('\\', '/'))}" /></ItemGroup>
</Project>\n`);
    const host = await documentationSdk({ engine, workspace, signal, host: dotnetHost });
    const env = { ...process.env, DOTNET_NOLOGO: '1', DOTNET_CLI_TELEMETRY_OPTOUT: '1', DOTNET_CLI_UI_LANGUAGE: 'en-US' };
    if (path.isAbsolute(host)) env.DOTNET_ROOT = path.dirname(host);
    const inputs = await bundleInputs({ host, project: projectPath, engine, workspace, env, signal });
    const bundle = path.join(workspace, 'bundles', inputs.key);
    const reused = await reusableBundle(bundle, inputs.key);
    if (!reused) {
    await run(host, ['build', projectPath, '--output', bundle, '--artifacts-path', path.join(workspace, 'obj'),
      `-p:InnoTaskBootstrapOwner=${randomUUID().replaceAll('-', '')}`, `-m:${Math.min(os.availableParallelism(), 4)}`,
      '-warnAsError:MSB9008', '-nodeReuse:false', '--disable-build-servers', '-v', 'minimal'], { cwd: workspace, env, signal });
      await sealBundle(bundle, inputs.key);
    }
    console.log(`Managed documentation bundle ${reused ? 'Reused' : 'Passed'}: ${inputs.key}`);
    await writeFile(path.join(root, 'artifacts/tooling-bundle.json'), JSON.stringify({ key: inputs.key, inputs: inputs.inputs, reused }));
    if (operation[0] === 'bundle-only') return;
    await run(host, [path.join(bundle, 'CatalogAdapter.dll'), root, ...operation], { cwd: workspace, env, signal });
    if (!operation.length) {
      const compilerInputs = await bundleInputs({ host, project:path.join(engine,'tools/Inno.Tooling.Architecture/Inno.Tooling.Architecture.csproj'), engine, workspace, env, signal });
      const catalogPath = path.join(root,'artifacts/canonical-catalog.json');
      const catalog = JSON.parse(await readFile(catalogPath,'utf8'));
      // Bind actual compiler implementation inputs, not an unrelated engine commit.
      // API dependencies remain conservative until the capture has precise references.
      const captureInputs = [];
      for (const reference of catalog.references.filter(reference=>reference.model !== 'project-inventory')) {
        const facts = JSON.parse(await readFile(path.join(root,reference.path),'utf8'));
        const encoded = JSON.stringify(facts,(key,value)=>['documentation','source','line','documentationIdentity'].includes(key)?undefined:value);
        captureInputs.push([reference.model,reference.configuration,reference.target,createHash('sha256').update(encoded).digest('hex')]);
      }
      catalog.exampleContext = { tool:compilerInputs.key, api:createHash('sha256').update(JSON.stringify(captureInputs.sort())).digest('hex') };
      await writeFile(catalogPath,JSON.stringify(catalog)+'\n');
    }
  } finally { await lock.close(); await rm(lockPath); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  let engineRoot = process.env.INNO_DOCS_ENGINE_ROOT;
  let operation = [];
  while (args.length) {
    const option = args.shift();
    if (option === '--engine-root' && args[0]) engineRoot = args.shift();
    else if (option === '--bundle-only' && !operation.length) operation = ['bundle-only'];
    else if (option === '--review' && args[0] && !operation.length) operation = ['api-review', args.shift()];
    else if (option === '--sync' && !operation.length) operation = ['api-sync'];
    else throw new Error('Usage: prepare-catalog.mjs [--engine-root PATH] [--review REGISTERED_API_MARKDOWN | --sync]');
  }
  const cancellation = new AbortController();
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => cancellation.abort());
  await prepareCatalog({ root: fileURLToPath(new URL('../', import.meta.url)), engineRoot, operation, signal: cancellation.signal });
}
