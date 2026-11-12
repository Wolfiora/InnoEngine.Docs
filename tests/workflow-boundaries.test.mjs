import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';

const workflow = async name => parse(await readFile(new URL(`../.github/workflows/${name}.yml`, import.meta.url), 'utf8'), { uniqueKeys: true });

test('candidate execution has only repository read credentials and cannot acquire the cross-repository App', async () => {
  const value = await workflow('documentation');
  assert.deepEqual(value.permissions, { contents: 'read', actions: 'read' });
  const text = JSON.stringify(value.jobs);
  assert.doesNotMatch(text, /secrets\.|create-github-app-token|pull_request_target/);
  for (const job of Object.values(value.jobs)) {
    assert.equal(job.permissions, undefined);
    for (const step of job.steps) if (step.uses && !step.uses.startsWith('./')) assert.match(step.uses, /@[a-f0-9]{40}$/);
  }
});

test('source certification reuses a specific preview and remains a required independent gate', async () => {
  const { jobs } = await workflow('documentation');
  assert.equal(jobs.source.needs, 'projection');
  assert.equal(jobs.projection.outputs.preview, '${{ steps.preview.outputs.artifact-id }}');
  const source = JSON.stringify(jobs.source.steps);
  assert.doesNotMatch(source, /npm run build|test:browser|npm test/);
  assert.match(source, /needs\.projection\.outputs\.preview/);
  assert.match(source, /Get-PublicationArtifact\.ps1/);
  assert.match(source, /--complete/);
  assert.deepEqual(jobs.validation.needs, ['projection', 'source']);
  assert.equal(jobs.validation.if, 'always()');
  assert.match(JSON.stringify(jobs.validation.steps), /SOURCE_RESULT.*success/);
});

test('privileged receiver and resumer never execute candidate code or install candidate dependencies', async () => {
  for (const name of ['source-evidence', 'resume-documentation', 'notify-engine-pairing']) {
    const value = await workflow(name);
    const text = JSON.stringify(value.jobs);
    assert.doesNotMatch(text, /npm ci|npm install|prepare-catalog|engine-source|head\.sha|head_sha|actions\/cache/);
    for (const job of Object.values(value.jobs)) {
      for (const step of job.steps) {
        if (step.uses?.startsWith('actions/checkout@')) {
          assert.equal(step.with.ref, undefined);
          assert.equal(step.with['persist-credentials'], false);
        }
      }
    }
  }
});

test('candidate publication uses the exact head only after verifying its checked merge tree', async () => {
  const { jobs, env } = await workflow('documentation');
  assert.equal(env.DOCUMENTATION_COMMIT, '${{ github.event.pull_request.head.sha || github.sha }}');
  for (const name of ['projection', 'source']) assert.match(JSON.stringify(jobs[name].steps), /confirm-candidate\.ps1/);
  const source = await readFile(new URL('../scripts/publication-artifact.mjs', import.meta.url), 'utf8');
  assert.match(source, /commit: process\.env\.DOCUMENTATION_COMMIT/);
  assert.doesNotMatch(source, /commit: process\.env\.GITHUB_SHA/);
});

test('engine pairing uses protected code and writes a separate candidate check without engine builds', async () => {
  // The engine workflow is validated in its own repository. This callback grants only
  // fixed workflow dispatch, and it cannot itself write a successful engine check.
  const value = await workflow('notify-engine-pairing');
  assert.deepEqual(value.permissions, { contents: 'read', actions: 'read' });
  const token = value.jobs.notify.steps.find(step => step.id === 'dispatch');
  assert.equal(token.with.repositories, 'InnoEngine');
  assert.equal(token.with['permission-actions'], 'write');
  assert.equal(token.with['permission-checks'], undefined);
  assert.doesNotMatch(JSON.stringify(value.jobs), /npm ci|dotnet|engine-source|run:.*git checkout/);
});
