import { execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir, appendFile, copyFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { identity, publicationInput, controlInput } from './ci-plan.mjs';
import { siteOrigin } from './site-environment.mjs';

const repository = 'Wolfiora/InnoEngine.Docs';
const workflow = '.github/workflows/documentation.yml';
export function inputIdentity(entries, origin = siteOrigin(), node = process.version) {
  return identity({ schema: 'inno-docs-evidence/2', inputs: entries.filter(([file]) => publicationInput(file)).sort(), origin, node, base: '/InnoEngine.Docs/' });
}
export function localInputs() {
  return execFileSync('git', ['ls-tree', '-rz', 'HEAD'], { encoding: 'utf8', maxBuffer:128*1024*1024 }).split('\0').filter(Boolean).map(line => {
    const [metadata, file] = line.split('\t'); return [file, metadata.split(' ')[2]];
  });
}
export const controlsIdentity = entries => identity(entries.filter(([file]) => controlInput(file)).sort());
export async function api(endpoint) {
  const response = await fetch(`https://api.github.com/repos/${repository}/${endpoint}`, {
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error',
  });
  if (!response.ok) throw new Error(`Evidence discovery failed (${response.status}): ${endpoint}`);
  return response.json();
}
async function remoteInputs(revision) {
  const result = await api(`git/trees/${revision}?recursive=1`);
  if (result.truncated) throw new Error('Trusted input discovery was truncated.');
  return result.tree.filter(item => item.type !== 'tree').map(item => [item.path, item.sha]);
}
export function eligible(run) {
  return run.repository?.full_name === repository && run.head_repository?.full_name === repository
    && ['push', 'pull_request', 'workflow_dispatch', 'merge_group'].includes(run.event)
    && run.path === workflow;
}
export function passedJob(jobs, name) {
  const selected = jobs.filter(job => job.name === name);
  return selected.length === 1 && selected[0].conclusion === 'success' && selected[0].status === 'completed';
}
async function output(values) {
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, Object.entries(values).map(([key,value]) => `${key}=${value}\n`).join(''));
}
export async function trustedProducer(run, controls, publication = false) {
  if (!eligible(run)) return false;
  // PR-controlled code is reusable only when both its control files and current main's
  // control files equal the caller. A control-changing PR is revalidated after merge.
  if (run.event === 'pull_request' || run.event === 'merge_group') {
    const base = run.pull_requests?.[0]?.base?.sha;
    if (publication && !/^[a-f0-9]{40}$/.test(base ?? '')) return false;
    const [main, candidate, originalBase] = await Promise.all([remoteInputs('main'), remoteInputs(run.head_sha),
      publication ? remoteInputs(base) : Promise.resolve(null)]);
    if (controlsIdentity(main) !== controls || controlsIdentity(candidate) !== controls) return false;
    if (publication && controlsIdentity(originalBase) !== controls) return false;
  } else if (!['main', 'draft'].includes(run.head_branch)) return false;
  // A draft run can provide independent development receipts, but cannot bypass
  // the first main verification of new publication control code.
  else if (publication && run.head_branch !== 'main') return false;
  return true;
}
export async function select() {
  await mkdir('artifacts/reuse', { recursive: true });
  const entries = localInputs(), key = inputIdentity(entries), controls = controlsIdentity(entries);
  const plan = JSON.parse(await readFile('artifacts/ci/plan.json', 'utf8'));
  await output({ key, controls });
  if (process.env.GITHUB_EVENT_NAME === 'push' && process.env.GITHUB_REF === 'refs/heads/draft') {
    const pulls = await api('pulls?state=open&base=main&head=Wolfiora:draft');
    const release = pulls.find(pr => pr.head.sha === plan.candidate && pr.head.repo.full_name === repository);
    if (release) {
      await appendFile(process.env.GITHUB_STEP_SUMMARY, `Release PR #${release.number} covers this draft revision. Waiting for its actual required result; pending is not success.\n`);
      for (;;) {
        const current = await api(`pulls/${release.number}`);
        if (current.head.sha !== plan.candidate || current.base.sha !== release.base.sha || (current.state !== 'open' && !current.merged)) throw new Error('Release candidate changed or closed while reconciling draft coverage.');
        const runs = await api(`actions/workflows/documentation.yml/runs?event=pull_request&head_sha=${plan.candidate}&per_page=20`);
        const run = runs.workflow_runs.find(run => eligible(run) && run.pull_requests?.some(pr => pr.number === release.number));
        if (run) {
          const jobs = (await api(`actions/runs/${run.id}/attempts/${run.run_attempt}/jobs?per_page=100`)).jobs;
          if (passedJob(jobs, 'Documentation validation')) {
            await writeFile('artifacts/api-editorial.json', JSON.stringify({ schema:'inno-api-editorial/1', status:'NotApplicable', reason:'CoveredByRelease', run:run.id }));
            await output({ covered: 'true', available: 'false', source: run.id }); return;
          }
          if (run.status === 'completed') throw new Error(`Covering release run ${run.id} did not pass required validation.`);
        }
        await new Promise(resolve => setTimeout(resolve, 20000));
      }
    }
  }
  if (plan.mode !== 'Release') { await output({ available: 'false' }); return; }
  const runs = await api('actions/workflows/documentation.yml/runs?per_page=40');
  for (const run of runs.workflow_runs) {
    if (!eligible(run) || run.id === Number(process.env.GITHUB_RUN_ID)) continue;
    const artifacts = (await api(`actions/runs/${run.id}/artifacts?per_page=100`)).artifacts;
    const find = name => artifacts.find(a => a.name === name && !a.expired
      && a.workflow_run?.id === run.id && a.workflow_run?.head_sha === run.head_sha && /^sha256:[a-f0-9]{64}$/.test(a.digest ?? ''));
    const receipt = find(`documentation-receipt-${key}-attempt-${run.run_attempt}`), site = find(`documentation-site-attempt-${run.run_attempt}`);
    if (!receipt || !site || receipt.size_in_bytes > 32 * 1024 * 1024) continue;
    if (!await trustedProducer(run, controls, true)) continue;
    const jobs = (await api(`actions/runs/${run.id}/attempts/${run.run_attempt}/jobs?per_page=100`)).jobs;
    if (!passedJob(jobs, 'Documentation projection') || !passedJob(jobs, 'Documentation validation')) continue;
    await writeFile('artifacts/reuse/selection.json', JSON.stringify({ documentation: { id: receipt.id, digest: receipt.digest },
      key, controls, run: run.id, attempt: run.run_attempt, commit: run.head_sha, site: site.id }));
    await output({ available: 'true' }); return;
  }
  await output({ available: 'false' });
}
export async function verify() {
  const selection = JSON.parse(await readFile('artifacts/reuse/selection.json', 'utf8'));
  const receipt = JSON.parse(await readFile('artifacts/reuse/import/identity.json', 'utf8'));
  const entries = localInputs(), key = inputIdentity(entries);
  if (receipt.schema !== 'inno-docs-evidence/2' || selection.key !== key || receipt.key !== key
    || receipt.controls !== controlsIdentity(entries) || receipt.run !== selection.run || receipt.attempt !== selection.attempt
    || receipt.status !== 'Passed' || receipt.mode !== 'Release') throw new Error('Authenticated publication receipt is inconsistent.');
  await copyFile('artifacts/reuse/import/api-editorial.json', 'artifacts/api-editorial.json');
  await output({ reused: 'true', artifact: selection.site });
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `Reused complete release inputs from run ${selection.run}, artifact ${selection.site}. No website rebuild or second upload.\n`);
}
export async function create() {
  const plan = JSON.parse(await readFile('artifacts/ci/plan.json', 'utf8'));
  if (plan.mode !== 'Release') throw new Error('Partial preview cannot produce publication evidence.');
  const entries = localInputs();
  await mkdir('artifacts/validation-receipt', { recursive: true });
  await writeFile('artifacts/validation-receipt/identity.json', JSON.stringify({ schema: 'inno-docs-evidence/2', key: inputIdentity(entries),
    controls: controlsIdentity(entries), status: 'Passed', mode: 'Release', run: Number(process.env.GITHUB_RUN_ID),
    attempt: Number(process.env.GITHUB_RUN_ATTEMPT), candidate: plan.candidate, node: process.version, image: process.env.ImageVersion }));
  await copyFile('artifacts/api-editorial.json', 'artifacts/validation-receipt/api-editorial.json');
}
async function portabilityKey() {
  const bundle = JSON.parse(await readFile('artifacts/tooling-bundle.json', 'utf8'));
  const { moduleInputs } = await import('./tooling-bundle.mjs');
  const modules = await moduleInputs(['scripts/prepare-catalog.mjs', 'scripts/check-projection.mjs',
    'scripts/ci-evidence.mjs', 'tests/site-build.test.mjs']);
  const files = ['scripts/catalog-adapter.cs', 'package-lock.json'];
  return identity([bundle.key, process.version, process.platform, process.arch, process.env.ImageVersion,
    modules, await Promise.all(files.map(async file => [file, identity(await readFile(file, 'utf8'))]))]);
}
async function selectPortability() {
  const key = await portabilityKey();
  await output({ key });
  const runs = await api('actions/workflows/documentation.yml/runs?per_page=40');
  for (const run of runs.workflow_runs) {
    if (!eligible(run) || run.id === Number(process.env.GITHUB_RUN_ID)) continue;
    const artifacts = (await api(`actions/runs/${run.id}/artifacts?per_page=100`)).artifacts;
    const receipt = artifacts.find(a => a.name === `documentation-portability-${key}-attempt-${run.run_attempt}` && !a.expired
      && a.workflow_run?.id === run.id && a.workflow_run.head_sha === run.head_sha && /^sha256:[a-f0-9]{64}$/.test(a.digest ?? ''));
    if (!receipt || !await trustedProducer(run, controlsIdentity(localInputs()))) continue;
    const jobs = (await api(`actions/runs/${run.id}/attempts/${run.run_attempt}/jobs?per_page=100`)).jobs;
    if (!passedJob(jobs, 'Linux documentation preparation')) continue;
    await mkdir('artifacts/portability', { recursive: true });
    await writeFile('artifacts/portability/selection.json', JSON.stringify({ documentation:{id:receipt.id,digest:receipt.digest}, key, run:run.id, attempt:run.run_attempt }));
    await output({ available:'true' }); return;
  }
  await output({ available:'false' });
}
async function verifyPortability() {
  const selected = JSON.parse(await readFile('artifacts/portability/selection.json', 'utf8'));
  const receipt = JSON.parse(await readFile('artifacts/portability/import/identity.json', 'utf8'));
  if (receipt.schema !== 'inno-portability/1' || receipt.key !== await portabilityKey() || receipt.key !== selected.key
    || receipt.run !== selected.run || receipt.attempt !== selected.attempt || receipt.status !== 'Passed') throw new Error('Authenticated portability receipt differs from its required inputs.');
  await output({ reused:'true' });
}
async function createPortability() {
  await mkdir('artifacts/portability/receipt', { recursive:true });
  await writeFile('artifacts/portability/receipt/identity.json', JSON.stringify({ schema:'inno-portability/1', key:await portabilityKey(),
    status:'Passed', run:Number(process.env.GITHUB_RUN_ID), attempt:Number(process.env.GITHUB_RUN_ATTEMPT) }));
}
async function selectChecks() {
  const runs = await api('actions/workflows/documentation.yml/runs?per_page=40');
  for (const run of runs.workflow_runs) {
    if (!eligible(run) || run.id === Number(process.env.GITHUB_RUN_ID)) continue;
    const artifacts = (await api(`actions/runs/${run.id}/artifacts?per_page=100`)).artifacts;
    const receipt = artifacts.find(a => a.name === `documentation-checks-attempt-${run.run_attempt}` && !a.expired
      && a.workflow_run?.id === run.id && a.workflow_run.head_sha === run.head_sha && /^sha256:[a-f0-9]{64}$/.test(a.digest ?? ''));
    if (!receipt || !await trustedProducer(run, controlsIdentity(localInputs()))) continue;
    const jobs = (await api(`actions/runs/${run.id}/attempts/${run.run_attempt}/jobs?per_page=100`)).jobs;
    const producer = jobs.filter(job => job.name === 'Documentation projection');
    if (producer.length !== 1 || !producer[0].steps?.some(step => step.name === 'Retain independent page receipts' && step.conclusion === 'success')) continue;
    await mkdir('artifacts/checks', {recursive:true});
    await writeFile('artifacts/checks/selection.json', JSON.stringify({ documentation:{id:receipt.id,digest:receipt.digest},run:run.id,attempt:run.run_attempt }));
    await output({available:'true'}); return;
  }
  await output({available:'false'});
}
async function verifyChecks() {
  const selected = JSON.parse(await readFile('artifacts/checks/selection.json','utf8'));
  const receipt = JSON.parse(await readFile('artifacts/checks/import/identity.json','utf8'));
  if (receipt.schema !== 'inno-page-checks/1' || receipt.run !== selected.run || receipt.attempt !== selected.attempt
    || receipt.status !== 'Passed' || !receipt.pages || Object.values(receipt.pages).some(page => !/^[a-f0-9]{64}$/.test(page.content)))
    throw new Error('Authenticated page receipts are malformed or inconsistent.');
  await copyFile('artifacts/checks/import/identity.json','artifacts/checks/verified.json');
}
export function pageReceipts(plan, catalog, previous = {pages:{}}) {
  const selected = new Map(plan.pages.map(page=>[page.path,page]));
  return Object.fromEntries(catalog.pages.map(page => {
    const executed = selected.get(page.path);
    // Retain unrelated completed checks with their original input key. A later
    // selection recomputes all dependencies before accepting that key again.
    const retained = previous.pages[page.path]?.content === page.contentIdentity ? previous.pages[page.path] : {};
    return [page.path, {...retained, content:page.contentIdentity,
      ...(executed ? { input:executed.input, render:'Passed', browser:plan.browser === 'Selected'
        && plan.browserPages.some(selected => selected.path === page.path) ? 'Passed' : 'NotApplicable' } : {})}];
  }));
}
async function createChecks() {
  const plan = JSON.parse(await readFile('artifacts/ci/plan.json','utf8'));
  const result = JSON.parse(await readFile('artifacts/ci/result.json','utf8'));
  const catalog = JSON.parse(await readFile('artifacts/canonical-catalog.json','utf8'));
  if (result.status !== 'Passed') throw new Error('Incomplete page checks cannot produce receipts.');
  let previous = {pages:{}};
  try { previous = JSON.parse(await readFile('artifacts/checks/verified.json','utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const pages = pageReceipts(plan, catalog, previous);
  await mkdir('artifacts/checks/receipt',{recursive:true});
  await writeFile('artifacts/checks/receipt/identity.json',JSON.stringify({schema:'inno-page-checks/1',status:'Passed',
    run:Number(process.env.GITHUB_RUN_ID),attempt:Number(process.env.GITHUB_RUN_ATTEMPT),tool:catalog.documentationToolIdentity,pages}));
}
/** Privileged publisher recomputes selected inputs itself; it never executes producer scripts. */
export async function verifyPublicationInputs(producer, currentCommit) {
  const [source, target] = await Promise.all([remoteInputs(producer.head_sha), remoteInputs(currentCommit)]);
  const controls = controlsIdentity(target);
  if (!await trustedProducer(producer, controls, true)) throw new Error('Publication control code is not trusted.');
  const key = inputIdentity(target);
  const artifacts = (await api(`actions/runs/${producer.id}/artifacts?per_page=100`)).artifacts;
  if (!artifacts.some(a => a.name === `documentation-receipt-${key}-attempt-${producer.run_attempt}` && !a.expired
    && /^sha256:[a-f0-9]{64}$/.test(a.digest ?? ''))) throw new Error('No complete receipt matches the actual publication inputs.');
  // The receipt binds the actual PR merge candidate, which can differ from run.head_sha.
  if (producer.event !== 'pull_request' && inputIdentity(source) !== key) throw new Error('Publication inputs changed.');
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const operation = { select, verify, create, 'checks-select':selectChecks, 'checks-verify':verifyChecks, 'checks-create':createChecks,
    'portability-select':selectPortability, 'portability-verify':verifyPortability, 'portability-create':createPortability }[process.argv[2]];
  if (!operation) throw new Error('Usage: ci-evidence.mjs select|verify|create');
  await operation();
}
