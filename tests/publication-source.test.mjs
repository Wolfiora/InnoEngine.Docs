import test from 'node:test';
import assert from 'node:assert/strict';
import { authorizeRun, authorizePairing, selectSourceCertificate, selectRelayedCertificate } from '../scripts/publication-source.mjs';

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
  const manifest = { commit: 'a'.repeat(40), engine: { revision: 'b'.repeat(40), tree: 'c'.repeat(40) }, snapshot: 'd'.repeat(64), contentIdentity: 'e'.repeat(64),
    sourceEvidenceIdentity: 'f'.repeat(64), exampleEvidence: { required: 1, covered: 1 } };
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
  ['missing source proof', f => { delete f.manifest.sourceEvidenceIdentity; }],
  ['unverified example change', f => { f.manifest.exampleEvidence.covered = 0; }],
  ['another engine tree', f => { f.certificate[0].receipt.documentation.engineTree = 'f'.repeat(40); }],
  ['invalid engine identity', f => { f.engineRun.head_sha = 'master'; }]
]) test(`rejects ${name} in publication pairing`, () => { const f = pair(); mutate(f); assert.throws(() => authorizePairing(f)); });

test('a source-certified prose correction reuses the matching engine matrix without pretending to be its old Docs snapshot', () => {
  const f = pair();
  f.manifest.contentIdentity = '1'.repeat(64);
  f.manifest.snapshot = '2'.repeat(64);
  f.manifest.commit = '3'.repeat(40);
  assert.equal(authorizePairing(f).correspondence, 'SourceEquivalentDocumentation');
});

test('an actual default-branch merge can certify the same engine input tree at a different commit', () => {
  const f = pair();
  f.engineRun.head_sha = '4'.repeat(40);
  assert.equal(authorizePairing(f).engineRevision, f.engineRun.head_sha);
  f.certificate[0].receipt.documentation.engineTree = '5'.repeat(40);
  assert.throws(() => authorizePairing(f), /source tree/);
});

for (const failure of [null, 'internal-pr', 'stale-pr', 'missing-source-artifact', 'failed-engine', 'wrong-revision']) {
  test(`explicit source preparation ${failure ?? 'accepts an authenticated exact source certificate'}`, async () => {
    const original = globalThis.fetch;
    const commit = 'a'.repeat(40);
    const repository = 'Wolfiora/InnoEngine';
    const fixture = source();
    Object.assign(fixture.run, { repository: { full_name: repository }, head_repository: { full_name: repository },
      head_branch: 'ai-pipeline', path: '.github/workflows/rendering-ci.yml', head_sha: failure === 'wrong-revision' ? 'b'.repeat(40) : commit,
      conclusion: failure === 'failed-engine' ? 'failure' : 'success' });
    fixture.jobs[0].name = 'Engine validation';
    fixture.artifacts[0].name = 'documentation-source-certification-attempt-2';
    if (failure === 'internal-pr' || failure === 'stale-pr') {
      fixture.run.event = 'pull_request';
      fixture.run.head_branch = 'feature';
      fixture.run.pull_requests = [{ head: { sha: failure === 'stale-pr' ? 'b'.repeat(40) : commit } }];
    }
    const requests = [];
    globalThis.fetch = async (url, options) => {
      requests.push(url);
      assert.equal(options.redirect, 'error');
      assert.equal(options.headers.Authorization, 'Bearer fixture-token');
      const body = url.includes('/jobs?') ? { jobs: fixture.jobs }
        : url.includes('/artifacts?') ? { artifacts: failure === 'missing-source-artifact' ? [] : fixture.artifacts }
          : url.endsWith('/actions/runs/11') ? fixture.run : { default_branch: 'master' };
      return { ok: true, json: async () => body };
    };
    try {
      const request = selectSourceCertificate({ engineRun: '11', binding: { repository: 'https://github.com/Wolfiora/InnoEngine', revision: commit },
        bootstrap: !['internal-pr', 'stale-pr'].includes(failure), token: 'fixture-token' });
      if (failure && failure !== 'internal-pr') await assert.rejects(request);
      else {
        const selection = await request;
        assert.equal(selection.engine.id, 31);
        assert.equal(selection.engine.digest, 'sha256:' + 'b'.repeat(64));
        assert.equal(selection.engine.commit, commit);
      }
      assert.equal(requests.length, 4);
      assert.ok(requests.every(url => url.startsWith('https://api.github.com/repos/Wolfiora/InnoEngine')));
    } finally { globalThis.fetch = original; }
  });
}

for (const failure of [null, 'equivalent-engine-commit', 'wrong-workflow', 'wrong-branch', 'failed-import', 'wrong-engine', 'expired', 'earlier-attempt', 'missing-digest', 'fork']) {
  test(`repository-local evidence ${failure ?? 'reuses a successful protected relay without cross-repository credentials'}`, async () => {
    const original = globalThis.fetch;
    const revision = 'd'.repeat(40);
    const f = source();
    f.run.path = '.github/workflows/source-evidence.yml';
    f.run.event = 'workflow_dispatch';
    f.jobs[0].name = 'Import source evidence';
    const tree = 'c'.repeat(40);
    f.artifacts[0].name = `source-evidence-tree-${tree}-attempt-2`;
    if (failure === 'wrong-workflow') f.run.path = '.github/workflows/documentation.yml';
    if (failure === 'wrong-branch') f.run.head_branch = 'feature';
    if (failure === 'failed-import') f.run.conclusion = 'failure';
    if (failure === 'wrong-engine') f.artifacts[0].name = 'source-evidence-tree-' + 'e'.repeat(40) + '-attempt-2';
    if (failure === 'expired') f.artifacts[0].expired = true;
    if (failure === 'earlier-attempt') f.artifacts[0].name = `source-evidence-tree-${tree}-attempt-1`;
    if (failure === 'missing-digest') delete f.artifacts[0].digest;
    if (failure === 'fork') f.run.head_repository.full_name = 'Other/InnoEngine.Docs';
    const requests = [];
    globalThis.fetch = async (url, options) => {
      requests.push(url);
      assert.equal(options.headers.Authorization, 'Bearer repository-read-token');
      assert.equal(options.redirect, 'error');
      const body = url.includes('/jobs?') ? { jobs: f.jobs }
        : url.includes('/artifacts?') ? { artifacts: f.artifacts }
          : url.endsWith('/actions/runs/11') ? f.run : { default_branch: 'main' };
      return { ok: true, json: async () => body };
    };
    try {
      const selectedRevision = failure === 'equivalent-engine-commit' ? 'f'.repeat(40) : revision;
      const result = selectRelayedCertificate({ binding: { revision: selectedRevision, sourceTree: tree, repository: 'https://github.com/Wolfiora/InnoEngine' },
        bootstrap: false, token: 'repository-read-token' });
      if (failure && failure !== 'equivalent-engine-commit') await assert.rejects(result);
      else {
        const selection = await result;
        assert.equal(selection.documentation.id, 31);
        assert.equal(selection.engineRevision, selectedRevision);
        assert.equal(selection.engineTree, tree);
        assert.equal(selection.documentation.digest, 'sha256:' + 'b'.repeat(64));
      }
      assert.ok(requests.every(url => url.startsWith('https://api.github.com/repos/Wolfiora/InnoEngine.Docs')));
    } finally { globalThis.fetch = original; }
  });
}
