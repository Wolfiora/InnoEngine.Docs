import test from 'node:test';
import assert from 'node:assert/strict';
import { authorizeRun } from '../scripts/trusted-example-source.mjs';

function source() {
  const repository = 'Wolfiora/InnoEngine.Docs';
  const commit = 'a'.repeat(40);
  const workflow = '.github/workflows/documentation.yml';
  return { repository, commit, workflow, branch: 'main', aggregate: 'Documentation validation', artifactName: 'documentation-examples', events: ['push', 'workflow_dispatch'],
    run: { id: 11, run_attempt: 2, repository: { full_name: repository }, head_repository: { full_name: repository },
      status: 'completed', conclusion: 'success', path: workflow, head_branch: 'main', head_sha: commit, event: 'push' },
    jobs: [{ name: 'Documentation validation', run_id: 11, status: 'completed', conclusion: 'success' }],
    artifacts: [{ id: 31, name: 'documentation-examples-attempt-2', expired: false, size_in_bytes: 100,
      digest: 'sha256:' + 'b'.repeat(64), workflow_run: { id: 11, head_sha: commit } }] };
}

test('accepts one successful exact attempt and selects no earlier retry payload', () => {
  const f = source();
  f.artifacts.push({ ...f.artifacts[0], id: 30, name: 'documentation-examples-attempt-1' });
  assert.equal(authorizeRun(f).id, 31);
});

for (const [name, mutate] of [
  ['fork', f => { f.run.head_repository.full_name = 'Someone/InnoEngine.Docs'; }],
  ['other repository', f => { f.run.repository.full_name = 'Wolfiora/Other'; }],
  ['failed run', f => { f.run.conclusion = 'failure'; }],
  ['unfinished run', f => { f.run.status = 'in_progress'; }],
  ['untrusted workflow', f => { f.run.path = '.github/workflows/arbitrary.yml'; }],
  ['PR preview', f => { f.run.event = 'pull_request'; }],
  ['wrong branch', f => { f.run.head_branch = 'feature'; }],
  ['changed commit', f => { f.run.head_sha = 'c'.repeat(40); }],
  ['missing aggregate', f => { f.jobs = []; }],
  ['skipped aggregate', f => { f.jobs[0].conclusion = 'skipped'; }],
  ['duplicate aggregate', f => { f.jobs.push({ ...f.jobs[0] }); }],
  ['expired artifact', f => { f.artifacts[0].expired = true; }],
  ['unhashed artifact', f => { delete f.artifacts[0].digest; }],
  ['earlier attempt only', f => { f.artifacts[0].name = 'documentation-examples-attempt-1'; }],
  ['wrong producer', f => { f.artifacts[0].workflow_run.id = 12; }],
  ['duplicate artifact', f => { f.artifacts.push({ ...f.artifacts[0] }); }]
]) test(`rejects ${name}`, () => { const f = source(); mutate(f); assert.throws(() => authorizeRun(f)); });
