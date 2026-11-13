import { appendFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const sha = (value, length = 40) => typeof value === 'string' && new RegExp(`^[a-f0-9]{${length}}$`).test(value);
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Verify a completed Docs main producer and its exact retained attempt. No engine CI is consulted. */
export function authorizeRun({ run, jobs, artifacts, repository, workflow, branch, commit, aggregate, artifactName, events }) {
  requireValue(repository === 'Wolfiora/InnoEngine.Docs' && branch === 'main' && workflow === '.github/workflows/documentation.yml'
    && aggregate === 'Documentation validation' && artifactName === 'documentation-site'
    && events.every(event => ['push', 'workflow_dispatch'].includes(event)), 'Publication policy permits only the Docs main producer.');
  requireValue(run.repository?.full_name === repository && run.head_repository?.full_name === repository, 'Publication cannot consume a fork or another repository.');
  requireValue(run.status === 'completed' && run.conclusion === 'success', 'Publication requires a successful completed run.');
  requireValue(run.path === workflow && run.head_branch === branch && run.head_sha === commit && sha(commit)
    && events.includes(run.event), 'Workflow, event or immutable source does not match the selected publication.');
  requireValue(Number.isSafeInteger(run.id) && run.id > 0 && Number.isSafeInteger(run.run_attempt) && run.run_attempt > 0, 'Run identity is invalid.');
  const required = jobs.filter(job => job.name === aggregate);
  requireValue(required.length === 1 && required[0].run_id === run.id && required[0].status === 'completed'
    && required[0].conclusion === 'success', 'The required aggregate did not pass exactly once.');
  const selected = artifacts.filter(artifact => artifact.name === `${artifactName}-attempt-${run.run_attempt}`);
  requireValue(selected.length === 1 && !selected[0].expired && selected[0].size_in_bytes > 0
    && selected[0].workflow_run?.id === run.id && selected[0].workflow_run?.head_sha === commit
    && /^sha256:[a-f0-9]{64}$/.test(selected[0].digest ?? ''), 'The exact successful attempt has no retained immutable artifact.');
  return { id: selected[0].id, name: selected[0].name, digest: selected[0].digest, run: run.id, attempt: run.run_attempt, commit };
}

async function github(endpoint, token) {
  const response = await fetch('https://api.github.com' + endpoint, { headers: { Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error' });
  requireValue(response.ok, `GitHub publication request failed (${response.status}): ${endpoint}`);
  return response.json();
}
async function list(endpoint, field, token) {
  const collected = [];
  for (let page = 1; ; page++) {
    const result = await github(`${endpoint}?per_page=100&page=${page}`, token);
    requireValue(Array.isArray(result[field]), 'GitHub publication collection is malformed.');
    collected.push(...result[field]);
    if (result[field].length < 100) return collected;
  }
}

/** Select only verified main artifacts; merge-only commit differences may reuse the identical Git tree. */
export async function selectPublication({ docsRun, docsCommit, token }) {
  requireValue(token && /^[1-9][0-9]*$/.test(docsRun) && (docsCommit === undefined || sha(docsCommit)), 'Select an exact Documentation run and optional commit.');
  const repository = 'Wolfiora/InnoEngine.Docs';
  const prefix = `/repos/${repository}`;
  const run = await github(`${prefix}/actions/runs/${docsRun}`, token);
  requireValue(run.id === Number(docsRun), 'GitHub returned a different producer run.');
  const commit = docsCommit ?? run.head_sha;
  const [jobs, artifacts, current, producer] = await Promise.all([
    list(`${prefix}/actions/runs/${docsRun}/attempts/${run.run_attempt}/jobs`, 'jobs', token),
    list(`${prefix}/actions/runs/${docsRun}/artifacts`, 'artifacts', token),
    github(`${prefix}/commits/main`, token), github(`${prefix}/commits/${commit}`, token),
  ]);
  const documentation = authorizeRun({ run, jobs, artifacts, repository, workflow: '.github/workflows/documentation.yml',
    branch: 'main', commit, aggregate: 'Documentation validation', artifactName: 'documentation-site', events: ['push', 'workflow_dispatch'] });
  requireValue(producer.sha === commit && sha(current.sha) && sha(producer.commit?.tree?.sha)
    && producer.commit.tree.sha === current.commit?.tree?.sha, 'The selected main artifact has different publication inputs; validate the current main tree.');
  return { documentation, publicationCommit: current.sha, publicationTree: producer.commit.tree.sha };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [operation, output] = process.argv.slice(2);
  if (operation !== 'select' || !output || process.argv.length !== 4) throw new Error('Usage: publication-source.mjs select OUTPUT');
  const selected = await selectPublication({ docsRun: process.env.DOCUMENTATION_RUN,
    docsCommit: process.env.DOCUMENTATION_COMMIT || undefined, token: process.env.GH_TOKEN });
  await writeFile(output, JSON.stringify(selected, null, 2) + '\n', { flag: 'wx' });
  if (process.env.GITHUB_ENV) await appendFile(process.env.GITHUB_ENV, `DOCUMENTATION_COMMIT=${selected.documentation.commit}\n`);
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `documentation-attempt=${selected.documentation.attempt}\n`);
}
