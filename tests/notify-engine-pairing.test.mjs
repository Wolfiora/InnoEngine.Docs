import test from 'node:test';
import assert from 'node:assert/strict';
import { notifyEnginePairing } from '../scripts/notify-engine-pairing.mjs';

const commit = 'a'.repeat(40);
function transport(mode) {
  const calls = [];
  const request = async (url, options) => {
    calls.push({ url, options });
    if (url.includes('/InnoEngine/actions/workflows/')) {
      assert.equal(options.headers.Authorization, 'Bearer engine-dispatch');
      assert.equal(options.method, 'POST');
      assert.deepEqual(JSON.parse(options.body), { ref: 'master', inputs: { documentation_revision: commit, bootstrap: false } });
      return { ok: true };
    }
    assert.equal(options.headers.Authorization, 'Bearer docs-read');
    let value;
    if (url.endsWith('/actions/runs/11')) {
      value = { id: 11, run_attempt: 1, repository: { full_name: 'Wolfiora/InnoEngine.Docs' }, head_repository: { full_name: 'Wolfiora/InnoEngine.Docs' },
        path: '.github/workflows/documentation.yml', head_sha: commit, head_branch: 'feature', event: 'pull_request',
        pull_requests: [{ head: { sha: commit } }], status: 'completed', conclusion: 'success' };
      if (mode === 'failed') value.conclusion = 'failure';
      if (mode === 'fork') value.head_repository.full_name = 'Other/Docs';
      if (mode === 'stale') value.pull_requests[0].head.sha = 'b'.repeat(40);
      if (mode === 'wrong-workflow') value.path = '.github/workflows/other.yml';
    } else if (url.includes('/jobs?')) value = { jobs: mode === 'missing-job' ? [] : [{ run_id: 11, name: 'Documentation validation', status: 'completed', conclusion: 'success' }] };
    else if (url.includes('/artifacts?')) value = { artifacts: mode === 'missing-artifact' ? [] : [{ id: 4, name: 'documentation-site-attempt-1',
      expired: mode === 'expired', size_in_bytes: 100, digest: 'sha256:' + 'b'.repeat(64), workflow_run: { id: 11, head_sha: commit } }] };
    else if (url.endsWith('/InnoEngine.Docs')) value = { default_branch: 'main' };
    else throw new Error(`Unexpected endpoint ${url}`);
    return { ok: true, json: async () => value };
  };
  return { request, calls };
}
for (const mode of ['', 'failed', 'fork', 'stale', 'wrong-workflow', 'missing-job', 'missing-artifact', 'expired']) {
  test(`protected pairing callback: ${mode || 'valid internal candidate'}`, async () => {
    const { request, calls } = transport(mode);
    const run = () => notifyEnginePairing({ runId: '11', bootstrap: false, readToken: 'docs-read', dispatchToken: 'engine-dispatch', request });
    if (mode) await assert.rejects(run);
    else assert.equal((await run()).status, 'Dispatched');
    assert.equal(calls.filter(call => call.options.method === 'POST').length, mode ? 0 : 1);
  });
}
