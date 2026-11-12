import { appendFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const prefix = 'https://api.github.com/repos/Wolfiora/InnoEngine.Docs';
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Resume only a failed evidence-selection job whose immutable input now has a protected certificate. */
export async function resumeSourceValidation({ importRun, token }) {
  requireValue(/^[1-9][0-9]*$/.test(String(importRun)) && token, 'An exact completed import run and scoped repository token are required.');
  async function request(endpoint, method = 'GET') {
    const response = await fetch(prefix + endpoint, { method, headers: { Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error' });
    requireValue(response.ok, `Documentation resume request failed (${response.status}): ${endpoint}`);
    return response.status === 204 || response.status === 201 ? null : response.json();
  }
  async function list(endpoint, field) {
    const result = [];
    for (let page = 1; ; page++) {
      const body = await request(`${endpoint}${endpoint.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
      requireValue(Array.isArray(body[field]), 'Malformed resume collection.');
      result.push(...body[field]);
      if (body[field].length < 100) return result;
    }
  }
  const producer = await request(`/actions/runs/${importRun}`);
  const repository = await request('');
  requireValue(producer.id === Number(importRun) && producer.repository?.full_name === 'Wolfiora/InnoEngine.Docs'
    && producer.head_repository?.full_name === 'Wolfiora/InnoEngine.Docs' && producer.status === 'completed'
    && producer.conclusion === 'success' && producer.event === 'workflow_dispatch'
    && producer.path === '.github/workflows/source-evidence.yml'
    && [repository.default_branch, 'docs-modernization'].includes(producer.head_branch), 'Resume requires a successful protected source-evidence import.');
  const artifacts = await list(`/actions/runs/${importRun}/artifacts`, 'artifacts');
  const certificates = artifacts.filter(item => new RegExp(`^source-evidence-[a-f0-9]{40}-attempt-${producer.run_attempt}$`).test(item.name));
  requireValue(certificates.length === 1 && !certificates[0].expired && /^sha256:[a-f0-9]{64}$/.test(certificates[0].digest ?? '')
    && certificates[0].workflow_run?.id === producer.id && certificates[0].workflow_run?.head_sha === producer.head_sha,
  'Resume requires the exact retained import artifact.');
  const engineRevision = certificates[0].name.slice('source-evidence-'.length, 'source-evidence-'.length + 40);
  const runs = await list('/actions/workflows/documentation.yml/runs?status=failure', 'workflow_runs');
  const resumed = [];
  for (const run of runs) {
    if (run.repository?.full_name !== 'Wolfiora/InnoEngine.Docs' || run.head_repository?.full_name !== 'Wolfiora/InnoEngine.Docs'
      || run.path !== '.github/workflows/documentation.yml' || run.status !== 'completed' || run.conclusion !== 'failure'
      || !/^[a-f0-9]{40}$/.test(run.head_sha)) continue;
    // GitHub only permits reruns within 30 days of the original run. A retained certificate
    // does not extend either that window or the inspected preview's independent lifetime.
    const created = Date.parse(run.created_at);
    if (!Number.isFinite(created) || created > Date.now() || Date.now() - created >= 30 * 24 * 60 * 60 * 1000) continue;
    if (run.event === 'pull_request') {
      if (!Array.isArray(run.pull_requests) || run.pull_requests.length !== 1) continue;
      const original = run.pull_requests[0];
      const current = await request(`/pulls/${original.number}`);
      if (current.state !== 'open' || current.head?.sha !== run.head_sha || current.head.sha !== original.head?.sha
        || !original.base?.sha || current.base?.sha !== original.base.sha) continue;
    } else if (['push', 'workflow_dispatch'].includes(run.event)) {
      const current = await request(`/branches/${encodeURIComponent(run.head_branch)}`);
      if (current.commit?.sha !== run.head_sha) continue;
    } else continue;
    const content = await request(`/contents/reference/engine.lock.json?ref=${run.head_sha}`);
    requireValue(content.encoding === 'base64' && content.size > 0 && content.size <= 4 * 1024 * 1024, 'Invalid immutable source binding.');
    const binding = JSON.parse(Buffer.from(content.content, 'base64').toString('utf8'));
    if (binding.repository !== 'https://github.com/Wolfiora/InnoEngine' || binding.revision !== engineRevision) continue;
    const jobs = await list(`/actions/runs/${run.id}/jobs?filter=all`, 'jobs');
    const latest = name => jobs.filter(job => job.name === name).sort((a, b) => b.id - a.id)[0];
    const source = latest('Certify documentation source');
    const projection = latest('Documentation projection');
    if (source?.status !== 'completed' || source.conclusion !== 'failure' || projection?.conclusion !== 'success'
      || !source.steps?.some(step => step.name === 'Select authenticated evidence already imported into this repository' && step.conclusion === 'failure')) continue;
    const previews = await list(`/actions/runs/${run.id}/artifacts`, 'artifacts');
    const preview = previews.filter(item => item.name === `documentation-preview-attempt-${projection.run_attempt}`);
    if (preview.length !== 1 || preview[0].expired || preview[0].size_in_bytes <= 0
      || preview[0].workflow_run?.id !== run.id || preview[0].workflow_run?.head_sha !== run.head_sha
      || !/^sha256:[a-f0-9]{64}$/.test(preview[0].digest ?? '')) continue;
    const closing = await request(`/actions/runs/${run.id}`);
    if (closing.status !== 'completed' || closing.conclusion !== 'failure' || closing.run_attempt !== run.run_attempt || closing.head_sha !== run.head_sha) continue;
    await request(`/actions/jobs/${source.id}/rerun`, 'POST');
    resumed.push({ run: run.id, job: source.id, previousAttempt: run.run_attempt, engineRevision,
      reason: `New authenticated source evidence from import run ${importRun}; preserve the successful projection and first failed attempt.` });
  }
  return { importRun: Number(importRun), engineRevision, resumed };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const result = await resumeSourceValidation({ importRun: process.env.IMPORT_RUN, token: process.env.GH_TOKEN });
  console.log(JSON.stringify(result));
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,
    result.resumed.map(row => `- Resumed source job ${row.job} in run ${row.run}: ${row.reason}`).join('\n')
      || 'No unchanged candidate is waiting for this source certificate; no checks were repeated.');
}
