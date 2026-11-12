import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectSourceCertificate } from '../scripts/inspect-source-certificate.mjs';

for (const mode of ['', 'wrong-tree', 'wrong-commit', 'wrong-producer', 'missing-receipt', 'wrong-repository', 'wrong-format', 'unavailable-source', 'missing-tested-commit']) {
  test(`imported source tree: ${mode || 'authenticated exact input'}`, async () => {
    const revision = 'a'.repeat(40), tree = 'b'.repeat(40);
    const certificate = { format: 'inno-documentation-source/2', repository: 'https://github.com/Wolfiora/InnoEngine', sourceTree: tree, sourceCommit: revision,
      producers: [{ origin: 'https://github.com/Wolfiora/InnoEngine/actions/runs/11/attempts/2', receiptIdentity: 'c'.repeat(64) }] };
    const selection = { engine: { commit: revision, run: 11, attempt: 2 } };
    const commit = { sha: revision, tree: { sha: tree } };
    if (mode === 'wrong-tree') commit.tree.sha = 'd'.repeat(40);
    if (mode === 'wrong-commit') commit.sha = 'd'.repeat(40);
    if (mode === 'wrong-producer') selection.engine.run = 12;
    if (mode === 'missing-receipt') delete certificate.producers[0].receiptIdentity;
    if (mode === 'wrong-repository') certificate.repository = 'https://github.com/Other/Engine';
    if (mode === 'wrong-format') certificate.format = 'unverified/1';
    if (mode === 'missing-tested-commit') delete certificate.sourceCommit;
    const request = async (url, options) => {
      assert.equal(url, `https://api.github.com/repos/Wolfiora/InnoEngine/git/commits/${revision}`);
      assert.equal(options.headers.Authorization, 'Bearer read-engine');
      assert.equal(options.redirect, 'error');
      return { ok: mode !== 'unavailable-source', status: 404, json: async () => commit };
    };
    const run = () => inspectSourceCertificate({ certificate, selection, token: 'read-engine', request });
    if (mode) await assert.rejects(run);
    else assert.deepEqual(await run(), { sourceTree: tree, producerCommit: revision, testedCommit: revision, run: 11, attempt: 2 });
  });
}

for (const mode of ['', 'wrong-head-parent', 'wrong-base-parent', 'extra-parent', 'missing-run-pr', 'wrong-event', 'another-pr', 'changed-run-head']) {
  test(`imported PR merge: ${mode || 'authenticate tested tree independently of run head'}`, async () => {
    const head = 'a'.repeat(40), base = 'b'.repeat(40), merge = 'c'.repeat(40), tree = 'd'.repeat(40);
    const certificate = { format: 'inno-documentation-source/2', repository: 'https://github.com/Wolfiora/InnoEngine',
      sourceCommit: merge, sourceTree: tree,
      producers: [{ origin: 'https://github.com/Wolfiora/InnoEngine/actions/runs/11/attempts/2', receiptIdentity: 'e'.repeat(64) }] };
    const selection = { engine: { commit: head, run: 11, attempt: 2,
      metadata: { event: 'pull_request', pull_requests: [{ head: { sha: head }, base: { sha: base } }] } } };
    const commit = { sha: merge, tree: { sha: tree }, parents: [{ sha: base }, { sha: head }] };
    if (mode === 'wrong-head-parent') commit.parents[1].sha = base;
    if (mode === 'wrong-base-parent') commit.parents[0].sha = head;
    if (mode === 'extra-parent') commit.parents.push({ sha: 'f'.repeat(40) });
    if (mode === 'missing-run-pr') delete selection.engine.metadata.pull_requests;
    if (mode === 'wrong-event') selection.engine.metadata.event = 'push';
    if (mode === 'another-pr') selection.engine.metadata.pull_requests.push({ head: { sha: head }, base: { sha: base } });
    if (mode === 'changed-run-head') selection.engine.metadata.pull_requests[0].head.sha = base;
    const request = async url => {
      assert.equal(url, `https://api.github.com/repos/Wolfiora/InnoEngine/git/commits/${merge}`);
      return { ok: true, json: async () => commit };
    };
    const run = () => inspectSourceCertificate({ certificate, selection, token: 'read-engine', request });
    if (mode) await assert.rejects(run);
    else assert.deepEqual(await run(), { sourceTree: tree, producerCommit: head, testedCommit: merge, run: 11, attempt: 2 });
  });
}
