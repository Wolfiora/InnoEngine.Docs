import path from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { run } from './tooling-process.mjs';

export function selectSdk(releases, version, platform = process.platform, arch = process.arch) {
  const os = { linux: 'linux', darwin: 'osx', win32: 'win' }[platform];
  if (!os || !['x64', 'arm64'].includes(arch)) throw new Error(`Unsupported documentation SDK host: ${platform}/${arch}.`);
  const sdk = releases.releases?.flatMap(release => release.sdks ?? [release.sdk]).find(sdk => sdk?.version === version);
  const archive = sdk?.files?.find(file => file.rid === `${os}-${arch}` && file.url?.endsWith(platform === 'win32' ? '.zip' : '.tar.gz'));
  if (!archive || !/^[a-f0-9]{128}$/i.test(archive.hash ?? '')) throw new Error(`No verified SDK archive for ${version}/${os}-${arch}.`);
  const url = new URL(archive.url);
  if (url.protocol !== 'https:' || !['builds.dotnet.microsoft.com', 'dotnetcli.azureedge.net', 'ci.dot.net'].includes(url.hostname)) {
    throw new Error('SDK archive is not hosted by the approved Microsoft distribution.');
  }
  return archive;
}

export async function verifySdkArchive(file, expected) {
  const hash = createHash('sha512');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  if (hash.digest('hex') !== expected.toLowerCase()) throw new Error('Downloaded SDK archive failed SHA-512 verification.');
}

/** Use the exact pinned SDK, bootstrapping it locally only when the host lacks it. */
export async function documentationSdk({ engine, workspace, signal, host = process.env.INNO_DOCS_DOTNET }) {
  const { sdk } = JSON.parse(await readFile(path.join(engine, 'global.json'), 'utf8'));
  if (!/^\d+\.\d+\.\d+$/.test(sdk?.version ?? '')) throw new Error('Engine binding must declare a stable SDK version.');
  const version = sdk.version;
  await mkdir(workspace, { recursive: true });
  // Disable roll-forward for this adapter; both CI and the hosting provider use the same SDK.
  await writeFile(path.join(workspace, 'global.json'),
    JSON.stringify({ sdk: { version, rollForward: 'disable', allowPrerelease: false } }) + '\n');
  const versionOf = candidate => run(candidate, ['--version'], { cwd: workspace, signal, capture: true });
  if (host) {
    if (await versionOf(host) !== version) throw new Error(`Explicit SDK must select ${version}.`);
    return host;
  }
  try { if (await versionOf('dotnet') === version) return 'dotnet'; }
  catch (error) { if (signal?.aborted) throw error; }
  const directory = path.join(workspace, `sdk-${version}-${process.platform}-${process.arch}`);
  const binary = path.join(directory, process.platform === 'win32' ? 'dotnet.exe' : 'dotnet');
  try { if (await versionOf(binary) === version) return binary; }
  catch (error) { if (signal?.aborted) throw error; }
  const metadata = await fetch(`https://builds.dotnet.microsoft.com/dotnet/release-metadata/${version.split('.').slice(0, 2).join('.')}/releases.json`, { signal });
  if (!metadata.ok) throw new Error(`SDK metadata request failed (${metadata.status}).`);
  const archive = selectSdk(await metadata.json(), version);
  const staging = `${directory}.${randomUUID()}`;
  const download = staging + (process.platform === 'win32' ? '.zip' : '.tar.gz');
  await mkdir(staging);
  try {
    console.log(`Installing documentation-only SDK ${version} (${process.platform}/${process.arch}).`);
    const response = await fetch(archive.url, { signal, redirect: 'error' });
    if (!response.ok || !response.body) throw new Error(`SDK download failed (${response.status}).`);
    await pipeline(Readable.fromWeb(response.body), createWriteStream(download, { flags: 'wx' }), { signal });
    await verifySdkArchive(download, archive.hash);
    if (process.platform === 'win32') {
      await run('pwsh', ['-NoProfile', '-NonInteractive', '-Command',
        'Expand-Archive -LiteralPath $env:INNO_SDK_ARCHIVE -DestinationPath $env:INNO_SDK_DESTINATION'],
      { signal, env: { ...process.env, INNO_SDK_ARCHIVE: download, INNO_SDK_DESTINATION: staging } });
    } else await run('tar', ['-xzf', download, '-C', staging], { signal });
    // Never replace an existing SDK tree: unexpected state is a visible failure.
    await rename(staging, directory);
    if (await versionOf(binary) !== version) throw new Error('Installed SDK identity differs from its binding.');
    return binary;
  } finally {
    await rm(download, { force: true });
    await rm(staging, { recursive: true, force: true });
  }
}
