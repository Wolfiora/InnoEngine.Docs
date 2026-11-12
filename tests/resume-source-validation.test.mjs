import test from 'node:test';
import assert from 'node:assert/strict';
import { resumeSourceValidation } from '../scripts/resume-source-validation.mjs';

for (const mode of ['matching', 'changed-head', 'changed-base', 'other-engine', 'other-failure', 'failed-preview', 'already-resumed',
  'fork', 'untrusted-import', 'expired-certificate', 'wrong-attempt', 'wrong-producer',
  'expired-run', 'missing-run-date', 'expired-preview', 'missing-preview', 'other-preview-producer', 'previous-preview-attempt']) {
  test(`source-only resumption: ${mode}`, async () => {
    const original = globalThis.fetch;
    const repo = { full_name: 'Wolfiora/InnoEngine.Docs' };
    const engine = 'a'.repeat(40), commit = 'b'.repeat(40), base = 'c'.repeat(40), receiver = 'd'.repeat(40);
    const producer = { id: 11, repository: repo, head_repository: repo, head_sha: receiver, run_attempt: 2,
      path: '.github/workflows/source-evidence.yml', event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_branch: 'main' };
    const artifact = { id: 31, name: `source-evidence-${engine}-attempt-2`, expired: false, digest: 'sha256:' + 'e'.repeat(64),
      workflow_run: { id: 11, head_sha: receiver } };
    const run = { id: 22, repository: repo, head_repository: repo, head_sha: commit, run_attempt: 1, created_at: new Date().toISOString(),
      path: '.github/workflows/documentation.yml', event: 'pull_request', status: 'completed', conclusion: 'failure', head_branch: 'feature',
      pull_requests: [{ number: 7, head: { sha: commit }, base: { sha: base } }] };
    const pull = { state: 'open', head: { sha: commit }, base: { sha: base } };
    const binding = { repository: 'https://github.com/Wolfiora/InnoEngine', revision: engine };
    const preview = { name: 'documentation-preview-attempt-1', expired: false, size_in_bytes: 10,
      digest: 'sha256:' + 'e'.repeat(64), workflow_run: { id: 22, head_sha: commit } };
    const jobs = [{ id: 41, run_attempt: 1, name: 'Documentation projection', status: 'completed', conclusion: 'success' },
      { id: 42, name: 'Certify documentation source', status: 'completed', conclusion: 'failure',
        steps: [{ name: 'Select authenticated evidence already imported into this repository', conclusion: 'failure' }] }];
    if (mode === 'changed-head') pull.head.sha = 'f'.repeat(40);
    if (mode === 'changed-base') pull.base.sha = 'f'.repeat(40);
    if (mode === 'other-engine') binding.revision = 'f'.repeat(40);
    if (mode === 'other-failure') jobs[1].steps[0].name = 'Require complete content and source evidence for the same static output';
    if (mode === 'failed-preview') jobs[0].conclusion = 'failure';
    if (mode === 'fork') run.head_repository = { full_name: 'Other/InnoEngine.Docs' };
    if (mode === 'untrusted-import') producer.path = '.github/workflows/arbitrary.yml';
    if (mode === 'expired-certificate') artifact.expired = true;
    if (mode === 'wrong-attempt') artifact.name = `source-evidence-${engine}-attempt-1`;
    if (mode === 'wrong-producer') artifact.workflow_run.id = 99;
    if (mode === 'expired-run') run.created_at = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000).toISOString();
    if (mode === 'missing-run-date') delete run.created_at;
    if (mode === 'expired-preview') preview.expired = true;
    if (mode === 'other-preview-producer') preview.workflow_run.id = 99;
    if (mode === 'previous-preview-attempt') jobs[0].run_attempt = 2;
    const writes = [];
    globalThis.fetch = async (url, options) => {
      assert.equal(options.redirect, 'error');
      assert.equal(options.headers.Authorization, 'Bearer scoped-resume');
      assert.ok(url.startsWith('https://api.github.com/repos/Wolfiora/InnoEngine.Docs'));
      if (options.method === 'POST') {
        writes.push(url);
        assert.ok(url.endsWith('/actions/jobs/42/rerun'));
        return { ok: true, status: 201 };
      }
      let body;
      if (url.endsWith('/actions/runs/11')) body = producer;
      else if (url.includes('/actions/runs/11/artifacts?')) body = { artifacts: [artifact] };
      else if (url.includes('/actions/workflows/documentation.yml/runs?')) body = { workflow_runs: [run] };
      else if (url.endsWith('/pulls/7')) body = pull;
      else if (url.includes('/contents/reference/engine.lock.json?')) body = { encoding: 'base64', size: 200, content: Buffer.from(JSON.stringify(binding)).toString('base64') };
      else if (url.includes('/actions/runs/22/jobs?')) body = { jobs };
      else if (url.includes('/actions/runs/22/artifacts?')) body = { artifacts: mode === 'missing-preview' ? [] : [preview] };
      else if (url.endsWith('/actions/runs/22')) body = mode === 'already-resumed' ? { ...run, status: 'in_progress', run_attempt: 2 } : run;
      else if (url.endsWith('/InnoEngine.Docs')) body = { default_branch: 'main' };
      else throw new Error('Unexpected request: ' + url);
      return { ok: true, status: 200, json: async () => body };
    };
    try {
      const result = resumeSourceValidation({ importRun: '11', token: 'scoped-resume' });
      if (['untrusted-import', 'expired-certificate', 'wrong-attempt', 'wrong-producer'].includes(mode)) await assert.rejects(result);
      else {
        const report = await result;
        assert.equal(report.resumed.length, mode === 'matching' ? 1 : 0);
        if (mode === 'matching') assert.match(report.resumed[0].reason, /New authenticated source evidence.*preserve the successful projection/);
      }
      assert.equal(writes.length, mode === 'matching' ? 1 : 0);
    } finally { globalThis.fetch = original; }
  });
}
