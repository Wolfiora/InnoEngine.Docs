import test from 'node:test';
import assert from 'node:assert/strict';
import { selectTrustedExamples } from '../scripts/example-work.mjs';

function fixture() {
  const commit = 'a'.repeat(40);
  const run = { id: 12, run_attempt: 2, repository: { full_name: 'Wolfiora/InnoEngine.Docs' },
    head_repository: { full_name: 'Wolfiora/InnoEngine.Docs' }, head_sha: commit, head_branch: 'main',
    path: '.github/workflows/documentation.yml', event: 'push', status: 'completed', conclusion: 'success' };
  const jobs = [{ name: 'Documentation validation', run_id: 12, status: 'completed', conclusion: 'success' }];
  const artifacts = [{ id: 24, name: 'documentation-examples-attempt-2', expired: false, size_in_bytes: 42,
    workflow_run: { id: 12, head_sha: commit }, digest: 'sha256:' + 'b'.repeat(64) }];
  return { run, jobs, artifacts };
}

test('missing baseline requires compilation without inventing a successful receipt', async t => {
  const prior = globalThis.fetch; t.after(() => { globalThis.fetch = prior; });
  globalThis.fetch = async () => ({ ok: false, status: 404 });
  assert.equal((await selectTrustedExamples('fixture')).status, 'Unavailable');
  assert.equal((await selectTrustedExamples()).status, 'Unavailable');
});

for (const [name, change, accepted] of [
  ['exact successful main attempt', () => {}, true],
  ['foreign origin', f => { f.run.head_repository.full_name = 'foreign/fork'; }, false],
  ['failed aggregate', f => { f.jobs[0].conclusion = 'failure'; }, false],
  ['missing digest', f => { delete f.artifacts[0].digest; }, false],
  ['wrong producer commit', f => { f.artifacts[0].workflow_run.head_sha = 'c'.repeat(40); }, false],
]) test(`example reuse authorizes ${name}`, async t => {
  const prior = globalThis.fetch; t.after(() => { globalThis.fetch = prior; });
  const f = fixture(); change(f);
  globalThis.fetch = async (url, options) => {
    assert.equal(options.headers.Authorization, 'Bearer fixture');
    const value = url.includes('/workflows/') ? { workflow_runs: [f.run] }
      : url.includes('/jobs?') ? { jobs: f.jobs } : { artifacts: f.artifacts };
    return { ok: true, status: 200, json: async () => value };
  };
  if (accepted) assert.equal((await selectTrustedExamples('fixture')).documentation.id, 24);
  else await assert.rejects(selectTrustedExamples('fixture'));
});

test('an authentication failure is not disguised as an absent baseline', async t => {
  const prior = globalThis.fetch; t.after(() => { globalThis.fetch = prior; });
  globalThis.fetch = async () => ({ ok: false, status: 403 });
  await assert.rejects(selectTrustedExamples('fixture'), /403/);
});
