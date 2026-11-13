import test from 'node:test';
import assert from 'node:assert/strict';
import { selectAutomaticPublication } from '../scripts/publication-source.mjs';

for (const failure of [null, 'pr-preview', 'fork', 'failed-docs', 'stale-docs', 'wrong-workflow',
  'missing-aggregate', 'expired-artifact', 'missing-digest', 'failed-engine', 'unfinished-engine',
  'no-engine-run', 'engine-advanced', 'older-green-only']) {
  test(`automatic publication ${failure ?? 'resolves current trusted inputs without building or dispatching'}`, async () => {
    const docsSha = 'a'.repeat(40), engineSha = 'b'.repeat(40);
    const docsRepo = 'Wolfiora/InnoEngine.Docs', engineRepo = 'Wolfiora/InnoEngine';
    function producer(repository, id, commit, branch, workflow) {
      return { id, run_attempt: 1, repository: { full_name: repository }, head_repository: { full_name: repository },
        status: 'completed', conclusion: 'success', path: `.github/workflows/${workflow}.yml`,
        head_branch: branch, head_sha: commit, event: 'push' };
    }
    const docs = producer(docsRepo, 11, docsSha, 'main', 'documentation');
    const engine = producer(engineRepo, 22, engineSha, 'master', 'rendering-ci');
    if (failure === 'pr-preview') docs.event = 'pull_request';
    if (failure === 'fork') docs.head_repository.full_name = 'Other/InnoEngine.Docs';
    if (failure === 'failed-docs') docs.conclusion = 'failure';
    if (failure === 'wrong-workflow') docs.path = '.github/workflows/another.yml';
    if (['failed-engine', 'older-green-only'].includes(failure)) engine.conclusion = 'failure';
    if (failure === 'unfinished-engine') engine.status = 'in_progress';
    const requests = [];
    let engineBranchReads = 0;
    const original = globalThis.fetch;
    globalThis.fetch = async (url, options) => {
      requests.push(url);
      assert.equal(options.method, undefined);
      assert.equal(options.redirect, 'error');
      assert.equal(options.headers.Authorization, 'Bearer fixture');
      const isDocs = url.includes('/InnoEngine.Docs');
      const run = isDocs ? docs : engine;
      let body;
      if (url.includes('/workflows/rendering-ci.yml/runs?')) body = { workflow_runs:
        failure === 'no-engine-run' ? [] : failure === 'older-green-only'
          ? [engine, { ...engine, id: 21, conclusion: 'success' }] : [engine] };
      else if (url.includes('/branches/')) {
        if (!isDocs) engineBranchReads++;
        body = { commit: { sha: isDocs ? failure === 'stale-docs' ? 'c'.repeat(40) : docsSha
          : failure === 'engine-advanced' && engineBranchReads > 1 ? 'c'.repeat(40) : engineSha } };
      } else if (url.includes('/jobs?')) body = { jobs: failure === 'missing-aggregate' && isDocs ? []
        : [{ name: isDocs ? 'Documentation validation' : 'Engine validation', run_id: run.id, status: 'completed', conclusion: 'success' }] };
      else if (url.includes('/artifacts?')) body = { artifacts: [{ id: 31, name: `${isDocs ? 'documentation-site' : 'engine-certification'}-attempt-1`,
        expired: failure === 'expired-artifact', size_in_bytes: 100,
        digest: failure === 'missing-digest' ? null : 'sha256:' + 'd'.repeat(64), workflow_run: { id: run.id, head_sha: run.head_sha } }] };
      else if (url.includes('/actions/runs/')) body = run;
      else body = { default_branch: isDocs ? 'main' : 'master' };
      return { ok: true, json: async () => body };
    };
    try {
      const selection = selectAutomaticPublication({ docsRun: '11', token: 'fixture' });
      if (failure) await assert.rejects(selection);
      else {
        const value = await selection;
        assert.equal(value.documentation.commit, docsSha);
        assert.equal(value.engine.commit, engineSha);
        assert.equal(value.engine.run, 22);
        assert.equal(value.bootstrap, false);
      }
      assert.ok(requests.every(url => url.startsWith('https://api.github.com/repos/Wolfiora/')));
    } finally { globalThis.fetch = original; }
  });
}
