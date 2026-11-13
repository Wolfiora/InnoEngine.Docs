import test from 'node:test';
import assert from 'node:assert/strict';
import { editorialCheck, publishEditorialCheck } from '../scripts/api-editorial-report.mjs';

const context = { sha: 'a'.repeat(40), runUrl: 'https://github.com/Wolfiora/InnoEngine.Docs/actions/runs/42' };
const report = (count = 0) => ({ schema: 'inno-api-editorial/1', status: 'Passed', symbols: 200,
  conclusion: count ? 'neutral' : 'success', pendingSynchronization: [], warnings: Array.from({ length: count }, (_, index) => ({
    symbol: `engine:Probe:M:Probe.Read${index}`, path: `content/en/api/engine/probe/_members/read-${index}.md`,
    code: 'XmlOnly', message: 'This API still uses XML-synchronized prose.',
  })) });

test('XML-only API prose produces neutral, not failed publication', () => {
  assert.equal(editorialCheck(report(3), context).conclusion, 'neutral');
  assert.equal(editorialCheck(report(), context).conclusion, 'success');
});

test('tool failures, stale synchronization and malformed reports cannot become neutral', () => {
  for (const invalid of [null, { ...report(), status: 'Failed' }, { ...report(), pendingSynchronization: ['file.md'] },
    { ...report(1), conclusion: 'success' }, { ...report(), symbols: 0 }]) {
    assert.throws(() => editorialCheck(invalid, context));
  }
  const escaping = report(1);
  escaping.warnings[0].path = 'content/en/api/engine/../../manual/index.md';
  assert.throws(() => editorialCheck(escaping, context), /Malformed/);
});

test('large reports are bounded and annotations are sent in API-sized batches', async () => {
  const calls = [];
  const github = { rest: { checks: {
    create: async (request) => { calls.push(request); return { data: { id: 7 } }; },
    update: async (request) => { calls.push(request); },
  } } };
  assert.equal(await publishEditorialCheck(github, 'Wolfiora/InnoEngine.Docs', report(200), context), 7);
  assert.deepEqual(calls.map((call) => call.output.annotations.length), [50, 50]);
  assert.match(calls[0].output.summary, /200/);
});
