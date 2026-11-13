import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { authorizeRun } from './publication-source.mjs';
import { checkExampleEvidence, planExampleWork } from './example-evidence.mjs';
import { readOwned } from './owned-input.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const root = process.cwd();
const output = 'artifacts/examples';
async function api(endpoint, token, allowMissing = false) {
  const response = await fetch('https://api.github.com/repos/Wolfiora/InnoEngine.Docs' + endpoint, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error',
  });
  if (allowMissing && response.status === 404) return null;
  if (!response.ok) throw new Error(`Cannot inspect trusted example evidence (${response.status}).`);
  return response.json();
}

/** Only successful default-branch workflow runs can provide cross-run compiler receipts. */
export async function selectTrustedExamples(token) {
  if (!token) return { status: 'Unavailable', reason: 'No authenticated default-branch evidence lookup was selected.' };
  const runs = await api('/actions/workflows/documentation.yml/runs?branch=main&status=success&per_page=20', token, true);
  if (runs === null) return { status: 'Unavailable', reason: 'The default-branch documentation workflow has not been installed yet.' };
  for (const run of runs.workflow_runs ?? []) {
    if (!['push', 'workflow_dispatch'].includes(run.event) || run.path !== '.github/workflows/documentation.yml') continue;
    const [jobs, artifacts] = await Promise.all([
      api(`/actions/runs/${run.id}/attempts/${run.run_attempt}/jobs?per_page=100`, token),
      api(`/actions/runs/${run.id}/artifacts?per_page=100`, token),
    ]);
    if (!artifacts.artifacts?.some(artifact => artifact.name === `documentation-examples-attempt-${run.run_attempt}` && !artifact.expired)) continue;
    const documentation = authorizeRun({ run, jobs: jobs.jobs, artifacts: artifacts.artifacts, repository: 'Wolfiora/InnoEngine.Docs',
      workflow: '.github/workflows/documentation.yml', branch: 'main', commit: run.head_sha,
      aggregate: 'Documentation validation', artifactName: 'documentation-examples', events: ['push', 'workflow_dispatch'] });
    return { status: 'Selected', documentation };
  }
  return { status: 'Unavailable', reason: 'No retained successful default-branch compiler receipt artifact exists.' };
}

async function loadReceipts(directory) {
  if (!directory) return [];
  const manifest = JSON.parse(await readOwned(root, path.posix.join(directory, 'manifest.json')));
  if (manifest.schema !== 'inno-example-receipts/1' || !Array.isArray(manifest.reports)) throw new Error('Invalid example artifact manifest.');
  const receipts = [];
  for (const report of manifest.reports) {
    if (!/^reports\/[a-f0-9]{64}\.json$/.test(report.path) || !/^[a-f0-9]{64}$/.test(report.identity)) throw new Error('Invalid example artifact report path.');
    const bytes = await readOwned(root, path.posix.join(directory, report.path));
    if (hash(bytes) !== report.identity) throw new Error('Example artifact report bytes differ from their identity.');
    receipts.push({ identity: report.identity, bytes });
  }
  return receipts;
}

async function saveReceipts(receipts) {
  await mkdir(path.join(output, 'reports'), { recursive: true });
  const reports = [];
  for (const receipt of receipts) {
    const file = `reports/${receipt.identity}.json`;
    await writeFile(path.join(output, file), receipt.bytes);
    reports.push({ path: file, identity: receipt.identity });
  }
  await writeFile(path.join(output, 'manifest.json'), JSON.stringify({ schema: 'inno-example-receipts/1', reports }, null, 2) + '\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [operation, input] = process.argv.slice(2);
  await mkdir(output, { recursive: true });
  if (operation === 'select') {
    const selection = await selectTrustedExamples(process.env.GH_TOKEN);
    await writeFile(path.join(output, 'selection.json'), JSON.stringify(selection, null, 2) + '\n');
    if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `available=${selection.status === 'Selected'}\n`);
  } else {
    const catalog = JSON.parse(await readFile('artifacts/canonical-catalog.json', 'utf8'));
    if (operation === 'plan') {
      const plan = planExampleWork(catalog, await loadReceipts(input));
      await saveReceipts(plan.receipts);
      await writeFile(path.join(output, 'work.json'), JSON.stringify({ required: plan.required, reused: plan.reused, compile: plan.compile }, null, 2) + '\n');
      console.log(`Examples: ${plan.required} required; ${plan.reused} reused; ${plan.compile.length} require compilation.`);
      if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `compile=${plan.compile.length !== 0}\n`);
    } else if (operation === 'complete') {
      const receipts = await loadReceipts(output);
      if (input) { const bytes = await readOwned(root, input); receipts.push({ identity: hash(bytes), bytes }); }
      const result = checkExampleEvidence(catalog, receipts);
      await writeFile(path.join(output, 'result.json'), JSON.stringify(result, null, 2) + '\n');
      if (result.status !== 'Passed') throw new Error('Required examples lack matching compilation evidence; see artifacts/examples/result.json.');
      await saveReceipts(receipts);
    } else throw new Error('Usage: example-work.mjs select | plan [TRUSTED-ARTIFACT-DIRECTORY] | complete [NEW-COMPILER-REPORT]');
  }
}
