import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir, appendFile, copyFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { siteOrigin } from './site-environment.mjs';
const repository = 'Wolfiora/InnoEngine.Docs';
const workflow = '.github/workflows/documentation.yml';
const hash = value => createHash('sha256').update(value).digest('hex');
export function inputIdentity(tree, origin, image = process.env.ImageVersion ?? 'local', node = process.version) {
  if (!/^[a-f0-9]{40}$/.test(tree)) throw new Error('Invalid input tree.');
  return hash(JSON.stringify({ schema: 'docs-validation/1', tree, origin, node, image, windows: 'windows-2025' }));
}
const tree = () => execFileSync('git', ['rev-parse', 'HEAD^{tree}'], { encoding: 'utf8' }).trim();
async function api(endpoint) {
  const response = await fetch(`https://api.github.com/repos/${repository}/${endpoint}`, {
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error',
  });
  if (!response.ok) throw new Error(`Evidence discovery failed (${response.status}).`);
  return response.json();
}
async function output(values) {
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, Object.entries(values).map(([key,value]) => `${key}=${value}\n`).join(''));
}
export function eligible(run) {
  return run.repository?.full_name === repository && run.head_repository?.full_name === repository
    && run.event === 'push' && ['draft', 'main'].includes(run.head_branch)
    && run.path === workflow && run.status === 'completed' && run.conclusion === 'success';
}
export async function select() {
  await mkdir('artifacts/reuse', { recursive: true });
  const key = inputIdentity(tree(), siteOrigin());
  const runs = await api('actions/workflows/documentation.yml/runs?event=push&status=success&per_page=30');
  for (const run of runs.workflow_runs) {
    if (!eligible(run) || run.id === Number(process.env.GITHUB_RUN_ID)) continue;
    const commit = await api(`git/commits/${run.head_sha}`);
    if (commit.tree.sha !== tree()) continue;
    const artifacts = (await api(`actions/runs/${run.id}/artifacts?per_page=100`)).artifacts;
    const find = prefix => artifacts.find(a => a.name === `${prefix}-attempt-${run.run_attempt}` && !a.expired
      && a.workflow_run?.id === run.id && a.workflow_run?.head_sha === run.head_sha && /^sha256:[a-f0-9]{64}$/.test(a.digest ?? ''));
    const receipt = find('documentation-receipt'), site = find('documentation-site');
    if (!receipt || !site || receipt.size_in_bytes > 32 * 1024 * 1024) continue;
    await writeFile('artifacts/reuse/selection.json', JSON.stringify({ documentation: { id: receipt.id, digest: receipt.digest }, key, run: run.id, attempt: run.run_attempt, commit: run.head_sha, site: site.id }));
    await output({ available: 'true' }); return;
  }
  await output({ available: 'false' });
}
export async function verify() {
  const selection = JSON.parse(await readFile('artifacts/reuse/selection.json', 'utf8'));
  const receipt = JSON.parse(await readFile('artifacts/reuse/import/identity.json', 'utf8'));
  const key = inputIdentity(tree(), siteOrigin());
  if (receipt.schema !== 'docs-validation/1' || selection.key !== key
    || receipt.run !== selection.run || receipt.attempt !== selection.attempt || receipt.commit !== selection.commit
    || receipt.status !== 'Passed') throw new Error('Reusable receipt does not match the current inputs and producer.');
  if (receipt.key !== key) {
    await output({ reused: 'false' });
    await appendFile(process.env.GITHUB_STEP_SUMMARY, 'Previous source tree matches, but rendering configuration or runner image changed. Running current checks.\n');
    return;
  }
  await copyFile('artifacts/reuse/import/api-editorial.json', 'artifacts/api-editorial.json');
  await output({ reused: 'true', source: selection.run, artifact: selection.site });
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `Reused identical-tree validation from [run ${selection.run}](https://github.com/${repository}/actions/runs/${selection.run}). Preview and delivery use its [single site artifact](https://github.com/${repository}/actions/runs/${selection.run}/artifacts/${selection.site}). No build or upload repeated.\n`);
}
export async function create() {
  await mkdir('artifacts/validation-receipt', { recursive: true });
  await writeFile('artifacts/validation-receipt/identity.json', JSON.stringify({ schema: 'docs-validation/1', key: inputIdentity(tree(), siteOrigin()), status: 'Passed', run: Number(process.env.GITHUB_RUN_ID), attempt: Number(process.env.GITHUB_RUN_ATTEMPT), commit: process.env.GITHUB_SHA }));
  await copyFile('artifacts/api-editorial.json', 'artifacts/validation-receipt/api-editorial.json');
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const operations = { select, verify, create };
  const operation = operations[process.argv[2]];
  if (!operation) throw new Error('Usage: validation-reuse.mjs select|verify|create');
  await operation();
}
