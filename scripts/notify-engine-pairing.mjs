import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { authorizeRun } from './publication-source.mjs';

/** Protected completion callback. It reads metadata and requests reconciliation; it never certifies an engine PR. */
export async function notifyEnginePairing({ runId, bootstrap, readToken, dispatchToken, request = fetch }) {
  if (!/^[1-9][0-9]*$/.test(String(runId)) || !readToken || !dispatchToken) throw new Error('Pairing notification requires an exact run and separate read/dispatch credentials.');
  const prefix = 'https://api.github.com/repos/Wolfiora/InnoEngine.Docs';
  async function read(endpoint) {
    const response = await request(prefix + endpoint, { headers: { Authorization: `Bearer ${readToken}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error' });
    if (!response.ok) throw new Error(`Documentation producer metadata failed (${response.status}).`);
    return response.json();
  }
  async function list(endpoint, field) {
    const rows = [];
    for (let page = 1; ; page++) {
      const value = await read(`${endpoint}?per_page=100&page=${page}`);
      if (!Array.isArray(value[field])) throw new Error('Malformed producer evidence collection.');
      rows.push(...value[field]);
      if (value[field].length < 100) return rows;
    }
  }
  const run = await read(`/actions/runs/${runId}`);
  const repository = await read('');
  const candidate = run.event === 'pull_request' && run.head_repository?.full_name === 'Wolfiora/InnoEngine.Docs'
    && run.pull_requests?.length > 0 && run.pull_requests.every(pull => pull.head?.sha === run.head_sha);
  const branch = candidate ? run.head_branch : bootstrap ? 'docs-modernization' : repository.default_branch;
  authorizeRun({ run, jobs: await list(`/actions/runs/${runId}/attempts/${run.run_attempt}/jobs`, 'jobs'),
    artifacts: await list(`/actions/runs/${runId}/artifacts`, 'artifacts'), repository: 'Wolfiora/InnoEngine.Docs',
    workflow: '.github/workflows/documentation.yml', branch, commit: run.head_sha, aggregate: 'Documentation validation',
    artifactName: 'documentation-site', events: ['pull_request', 'push', 'merge_group', 'workflow_dispatch'] });
  const response = await request('https://api.github.com/repos/Wolfiora/InnoEngine/actions/workflows/documentation-pairing.yml/dispatches', {
    method: 'POST', headers: { Authorization: `Bearer ${dispatchToken}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error',
    body: JSON.stringify({ ref: bootstrap ? 'ai-pipeline' : 'master', inputs: { documentation_revision: run.head_sha, bootstrap } })
  });
  if (!response.ok) throw new Error(`Engine pairing dispatch failed (${response.status}).`);
  return { status: 'Dispatched', documentationRevision: run.head_sha, run: run.id };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  console.log(JSON.stringify(await notifyEnginePairing({ runId: process.env.DOCUMENTATION_RUN, bootstrap: process.env.BOOTSTRAP === 'true',
    readToken: process.env.GH_TOKEN, dispatchToken: process.env.INNO_ENGINE_DISPATCH_TOKEN })));
}
