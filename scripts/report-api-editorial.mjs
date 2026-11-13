import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { publishEditorialCheck } from './api-editorial-report.mjs';

const repository = 'Wolfiora/InnoEngine.Docs';
const prefix = `/repos/${repository}`;
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

async function request(endpoint, token, method = 'GET', body) {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    method, redirect: 'error', headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28', ...(body ? { 'Content-Type': 'application/json' } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  requireValue(response.ok, `Editorial GitHub request failed (${response.status}).`);
  return response.json();
}

/** Select data only from the exact triggering candidate run. Candidate scripts are never executed. */
export async function selectEditorial({ runId, token }) {
  requireValue(token && /^[1-9][0-9]*$/.test(String(runId)), 'Editorial selection requires a repository token and run ID.');
  const run = await request(`${prefix}/actions/runs/${runId}`, token);
  requireValue(run.id === Number(runId) && run.repository?.full_name === repository && run.head_repository?.full_name === repository
    && run.path === '.github/workflows/documentation.yml' && run.status === 'completed'
    && ['push', 'pull_request', 'workflow_dispatch', 'merge_group'].includes(run.event)
    && /^[a-f0-9]{40}$/.test(run.head_sha) && Number.isSafeInteger(run.run_attempt) && run.run_attempt > 0,
  'Editorial producer is not an eligible completed Documentation run.');
  const artifacts = [];
  for (let page = 1; ; page++) {
    const result = await request(`${prefix}/actions/runs/${runId}/artifacts?per_page=100&page=${page}`, token);
    requireValue(Array.isArray(result.artifacts), 'Malformed editorial artifact listing.');
    artifacts.push(...result.artifacts);
    if (result.artifacts.length < 100) break;
  }
  const selected = artifacts.filter(artifact => artifact.name === `api-editorial-attempt-${run.run_attempt}`);
  requireValue(selected.length === 1 && Number.isSafeInteger(selected[0].id) && selected[0].id > 0
    && !selected[0].expired && selected[0].size_in_bytes > 0 && selected[0].size_in_bytes <= 32 * 1024 * 1024
    && selected[0].workflow_run?.id === run.id && selected[0].workflow_run?.head_sha === run.head_sha
    && /^sha256:[a-f0-9]{64}$/.test(selected[0].digest ?? ''), 'The triggering attempt has no valid editorial report artifact.');
  return { documentation: { id: selected[0].id, digest: selected[0].digest }, sha: run.head_sha,
    runUrl: `https://github.com/${repository}/actions/runs/${run.id}` };
}

/** Use only the protected reporter's repository-scoped Checks permission. */
export async function reportEditorial({ report, selection, token }) {
  requireValue(token, 'Editorial reporting requires a scoped token.');
  const github = { rest: { checks: {
    create: async ({ owner, repo, ...body }) => ({ data: await request(`${prefix}/check-runs`, token, 'POST', body) }),
    update: async ({ owner, repo, check_run_id, ...body }) => ({ data: await request(`${prefix}/check-runs/${check_run_id}`, token, 'PATCH', body) }),
  } } };
  return publishEditorialCheck(github, repository, report, selection);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [operation, selectionPath, reportPath] = process.argv.slice(2);
  if (operation === 'select' && selectionPath && !reportPath) {
    const event = JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'));
    const selected = await selectEditorial({ runId: event.workflow_run?.id, token: process.env.GH_TOKEN });
    await writeFile(selectionPath, JSON.stringify(selected, null, 2) + '\n', { flag: 'wx' });
  } else if (operation === 'publish' && selectionPath && reportPath) {
    const bytes = await readFile(reportPath);
    requireValue(bytes.length > 0 && bytes.length <= 32 * 1024 * 1024, 'Editorial JSON size is invalid.');
    await reportEditorial({ report: JSON.parse(bytes.toString('utf8')),
      selection: JSON.parse(await readFile(selectionPath, 'utf8')), token: process.env.GH_TOKEN });
  } else throw new Error('Usage: report-api-editorial.mjs select SELECTION | publish SELECTION REPORT');
}
