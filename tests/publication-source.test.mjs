import test from 'node:test';
import assert from 'node:assert/strict';
import { authorizeRun, authorizePairing } from '../scripts/publication-source.mjs';

function source() {
  const repository = 'Wolfiora/InnoEngine.Docs';
  const commit = 'a'.repeat(40);
  const workflow = '.github/workflows/documentation.yml';
  return { repository, commit, workflow, branch: 'main', aggregate: 'Documentation validation', artifactName: 'documentation-site', events: ['push', 'workflow_dispatch'],
    run: { id: 11, run_attempt: 2, repository: { full_name: repository }, head_repository: { full_name: repository },
      status: 'completed', conclusion: 'success', path: workflow, head_branch: 'main', head_sha: commit, event: 'push' },
    jobs: [{ name: 'Documentation validation', run_id: 11, status: 'completed', conclusion: 'success' }],
    artifacts: [{ id: 31, name: 'documentation-site-attempt-2', expired: false, size_in_bytes: 100,
      digest: 'sha256:' + 'b'.repeat(64), workflow_run: { id: 11, head_sha: commit } }] };
}

test('accepts one successful exact attempt and selects no earlier retry payload', () => {
  const f = source();
  f.artifacts.push({ ...f.artifacts[0], id: 30, name: 'documentation-site-attempt-1' });
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
  ['earlier attempt only', f => { f.artifacts[0].name = 'documentation-site-attempt-1'; }],
  ['wrong producer', f => { f.artifacts[0].workflow_run.id = 12; }],
  ['duplicate artifact', f => { f.artifacts.push({ ...f.artifacts[0] }); }]
]) test(`rejects ${name}`, () => { const f = source(); mutate(f); assert.throws(() => authorizeRun(f)); });

function pair() {
  const manifest = { commit: 'a'.repeat(40), engine: { revision: 'b'.repeat(40), tree: 'c'.repeat(40) }, snapshot: 'd'.repeat(64), contentIdentity: 'e'.repeat(64) };
  const row = { platform: 'platform-one', receipt: { commit: 'f'.repeat(40), tree: 'a'.repeat(64), environment: 'b'.repeat(64),
    planIdentity: 'c'.repeat(64), resultsIdentity: 'd'.repeat(64), required: 3, passed: 2, reused: 1 },
    documentation: { engineCommit: 'f'.repeat(40), engineTree: manifest.engine.tree, documentationCommit: manifest.commit,
      documentationSnapshot: manifest.snapshot, contentIdentity: manifest.contentIdentity } };
  row.receipt.documentation = row.documentation;
  delete row.documentation;
  return { manifest, certificate: [row], expectedPlatforms: ['platform-one'], engineRun: { id: 22, head_sha: manifest.engine.revision } };
}

test('accepts only the complete actual matrix bound to the same site content', () => {
  assert.equal(authorizePairing(pair()).status, 'Passed');
});

for (const [name, mutate] of [
  ['missing platform', f => { f.expectedPlatforms.push('platform-two'); }],
  ['empty matrix', f => { f.certificate = []; f.expectedPlatforms = []; }],
  ['partial results', f => { f.certificate[0].receipt.passed = 1; }],
  ['missing pairing', f => { delete f.certificate[0].receipt.documentation; }],
  ['stale content', f => { f.certificate[0].receipt.documentation.contentIdentity = 'f'.repeat(64); }],
  ['another engine tree', f => { f.certificate[0].receipt.documentation.engineTree = 'f'.repeat(40); }],
  ['changed engine', f => { f.engineRun.head_sha = 'f'.repeat(40); }]
]) test(`rejects ${name} in publication pairing`, () => { const f = pair(); mutate(f); assert.throws(() => authorizePairing(f)); });
