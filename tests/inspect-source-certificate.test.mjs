import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectSourceCertificate } from '../scripts/inspect-source-certificate.mjs';

for (const mode of ['', 'wrong-tree', 'wrong-commit', 'wrong-producer', 'missing-receipt', 'wrong-repository', 'wrong-format', 'unavailable-source']) {
  test(`imported source tree: ${mode || 'authenticated exact input'}`, async () => {
    const revision = 'a'.repeat(40), tree = 'b'.repeat(40);
    const certificate = { format: 'inno-documentation-source/1', repository: 'https://github.com/Wolfiora/InnoEngine', sourceTree: tree,
      producers: [{ origin: 'https://github.com/Wolfiora/InnoEngine/actions/runs/11/attempts/2', receiptIdentity: 'c'.repeat(64) }] };
    const selection = { engine: { commit: revision, run: 11, attempt: 2 } };
    const commit = { sha: revision, tree: { sha: tree } };
    if (mode === 'wrong-tree') commit.tree.sha = 'd'.repeat(40);
    if (mode === 'wrong-commit') commit.sha = 'd'.repeat(40);
    if (mode === 'wrong-producer') selection.engine.run = 12;
    if (mode === 'missing-receipt') delete certificate.producers[0].receiptIdentity;
    if (mode === 'wrong-repository') certificate.repository = 'https://github.com/Other/Engine';
    if (mode === 'wrong-format') certificate.format = 'unverified/1';
    const request = async (url, options) => {
      assert.equal(url, `https://api.github.com/repos/Wolfiora/InnoEngine/git/commits/${revision}`);
      assert.equal(options.headers.Authorization, 'Bearer read-engine');
      assert.equal(options.redirect, 'error');
      return { ok: mode !== 'unavailable-source', status: 404, json: async () => commit };
    };
    const run = () => inspectSourceCertificate({ certificate, selection, token: 'read-engine', request });
    if (mode) await assert.rejects(run);
    else assert.deepEqual(await run(), { sourceTree: tree, producerCommit: revision, run: 11, attempt: 2 });
  });
}
