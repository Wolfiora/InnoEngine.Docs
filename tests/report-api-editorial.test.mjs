import test from 'node:test';
import assert from 'node:assert/strict';
import { selectEditorial, reportEditorial } from '../scripts/report-api-editorial.mjs';

for (const mode of ['valid', 'failed-site', 'fork', 'wrong-workflow', 'running', 'expired', 'wrong-attempt', 'wrong-run', 'tampered-digest']) {
  test(`trusted editorial artifact selection: ${mode}`, async () => {
    const repository = 'Wolfiora/InnoEngine.Docs', commit = 'a'.repeat(40);
    const run = { id: 11, run_attempt: 2, repository: { full_name: repository }, head_repository: { full_name: repository },
      path: '.github/workflows/documentation.yml', status: 'completed', conclusion: 'success', event: 'pull_request', head_sha: commit };
    const artifact = { id: 31, name: 'api-editorial-attempt-2', digest: 'sha256:' + 'b'.repeat(64), expired: false,
      size_in_bytes: 100, workflow_run: { id: 11, head_sha: commit } };
    if (mode === 'failed-site') run.conclusion = 'failure';
    if (mode === 'fork') run.head_repository.full_name = 'Other/Repo';
    if (mode === 'wrong-workflow') run.path = '.github/workflows/untrusted.yml';
    if (mode === 'running') run.status = 'in_progress';
    if (mode === 'expired') artifact.expired = true;
    if (mode === 'wrong-attempt') artifact.name = 'api-editorial-attempt-1';
    if (mode === 'wrong-run') artifact.workflow_run.id = 12;
    if (mode === 'tampered-digest') artifact.digest = 'sha256:unknown';
    const original = globalThis.fetch;
    globalThis.fetch = async (url, options) => {
      assert.equal(options.method, 'GET');
      assert.equal(options.redirect, 'error');
      assert.ok(url.startsWith('https://api.github.com/repos/Wolfiora/InnoEngine.Docs/'));
      return { ok: true, json: async () => url.includes('/artifacts?') ? { artifacts: [artifact] } : run };
    };
    try {
      const selected = selectEditorial({ runId: 11, token: 'fixture' });
      if (['valid', 'failed-site'].includes(mode)) assert.deepEqual(await selected, {
        documentation: { id: 31, digest: artifact.digest }, sha: commit, runUrl: 'https://github.com/Wolfiora/InnoEngine.Docs/actions/runs/11',
      });
      else await assert.rejects(selected);
    } finally { globalThis.fetch = original; }
  });
}

test('warnings produce a neutral Check with bounded annotations; reporting failures reject', async () => {
  const warnings = Array.from({ length: 123 }, (_, index) => ({ code: 'XmlOnly', symbol: `type:${index}`,
    path: `content/en/api/engine/probe/type-${index}/index.md`, message: 'XML defaults await editorial review.' }));
  const report = { schema: 'inno-api-editorial/1', status: 'Passed', conclusion: 'neutral', symbols: 123,
    warnings, pendingSynchronization: [] };
  const selection = { sha: 'a'.repeat(40), runUrl: 'https://github.com/Wolfiora/InnoEngine.Docs/actions/runs/11' };
  const requests = [], original = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    requests.push({ url, method: options.method, body: JSON.parse(options.body) });
    return { ok: true, json: async () => ({ id: 91 }) };
  };
  try {
    assert.equal(await reportEditorial({ report, selection, token: 'fixture' }), 91);
    assert.equal(requests.length, 2);
    assert.equal(requests[0].method, 'POST');
    assert.equal(requests[0].body.conclusion, 'neutral');
    assert.equal(requests[1].method, 'PATCH');
    assert.equal(requests[0].body.output.annotations.length, 50);
    assert.equal(requests[1].body.output.annotations.length, 50);
    assert.ok(requests.every(request => request.url.startsWith('https://api.github.com/repos/Wolfiora/InnoEngine.Docs/check-runs')));
    globalThis.fetch = async () => ({ ok: false, status: 403 });
    await assert.rejects(reportEditorial({ report, selection, token: 'fixture' }), /403/);
  } finally { globalThis.fetch = original; }
});
