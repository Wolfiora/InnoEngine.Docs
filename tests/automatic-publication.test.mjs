import test from 'node:test';
import assert from 'node:assert/strict';
import { selectPublication } from '../scripts/publication-source.mjs';

for (const failure of [null, 'same-tree-merge', 'pr-preview', 'draft', 'fork', 'failed-docs', 'changed-main-tree',
  'wrong-workflow', 'missing-aggregate', 'expired-artifact', 'missing-digest', 'wrong-commit']) {
  test(`publication selection ${failure ?? 'needs only the successful Docs main artifact'}`, async () => {
    const commit = 'a'.repeat(40), tree = 'b'.repeat(40), repository = 'Wolfiora/InnoEngine.Docs';
    const run = { id: 11, run_attempt: 1, repository: { full_name: repository }, head_repository: { full_name: repository },
      status: 'completed', conclusion: 'success', path: '.github/workflows/documentation.yml', head_branch: 'main', head_sha: commit, event: 'push' };
    if (failure === 'pr-preview') run.event = 'pull_request';
    if (failure === 'draft') run.head_branch = 'draft';
    if (failure === 'fork') run.head_repository.full_name = 'Other/InnoEngine.Docs';
    if (failure === 'failed-docs') run.conclusion = 'failure';
    if (failure === 'wrong-workflow') run.path = '.github/workflows/another.yml';
    const requests = [];
    const original = globalThis.fetch;
    globalThis.fetch = async (url, options) => {
      requests.push(url);
      assert.equal(options.method, undefined);
      assert.equal(options.redirect, 'error');
      assert.equal(options.headers.Authorization, 'Bearer fixture');
      let body;
      if (url.includes('/jobs?')) body = { jobs: failure === 'missing-aggregate' ? []
        : [{ name: 'Documentation validation', run_id: 11, status: 'completed', conclusion: 'success' }] };
      else if (url.includes('/artifacts?')) body = { artifacts: [{ id: 31, name: 'documentation-site-attempt-1',
        expired: failure === 'expired-artifact', size_in_bytes: 100,
        digest: failure === 'missing-digest' ? null : 'sha256:' + 'd'.repeat(64), workflow_run: { id: 11, head_sha: commit } }] };
      else if (url.includes('/commits/')) body = { sha: url.endsWith('/main') && failure === 'same-tree-merge' ? 'f'.repeat(40) : commit,
        commit: { tree: { sha: url.endsWith('/main') && failure === 'changed-main-tree' ? 'c'.repeat(40) : tree } } };
      else if (url.endsWith('/actions/runs/11')) body = run;
      else throw new Error('Unexpected endpoint: ' + url);
      return { ok: true, json: async () => body };
    };
    try {
      const selection = selectPublication({ docsRun: '11', docsCommit: failure === 'wrong-commit' ? 'e'.repeat(40) : undefined, token: 'fixture' });
      if (failure && failure !== 'same-tree-merge') await assert.rejects(selection);
      else {
        const selected = await selection;
        assert.equal(selected.documentation.commit, commit);
        assert.equal(selected.publicationTree, tree);
        assert.equal(selected.publicationCommit, failure === 'same-tree-merge' ? 'f'.repeat(40) : commit);
        assert.equal(selected.engine, undefined);
      }
      assert.ok(requests.every(url => url.startsWith('https://api.github.com/repos/Wolfiora/InnoEngine.Docs/')));
    } finally { globalThis.fetch = original; }
  });
}
