import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { parse } from 'yaml';
import { spawnSync } from 'node:child_process';

const workflow = async name => parse(await readFile(new URL(`../.github/workflows/${name}.yml`, import.meta.url), 'utf8'), { uniqueKeys: true });

for (const [name, variable, operation, input] of [
  ['Select only changed or uncovered executable examples', 'PREVIOUS_AVAILABLE', 'plan', 'artifacts/previous-examples'],
  ['Reconcile reused and newly executed example groups', 'COMPILED_EXAMPLES', 'complete', 'artifacts/examples/compiled.json'],
]) for (const available of [true, false]) test(`${operation} passes ${available ? 'one complete path' : 'no optional path'} through PowerShell`, async () => {
  const value = await workflow('documentation');
  const step = value.jobs.projection.steps.find(candidate => candidate.name === name);
  assert.equal(step.shell, 'pwsh');
  // Execute the actual workflow body; capture its native command arguments without compiling examples.
  const script = `function node { ConvertTo-Json -InputObject @($args) -Compress }; $global:LASTEXITCODE = 0\n${step.run}`;
  const result = spawnSync('pwsh', ['-NoLogo', '-NoProfile', '-NonInteractive', '-Command', script], {
    encoding: 'utf8', env: { ...process.env, [variable]: String(available) },
  });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), ['scripts/example-work.mjs', operation, ...(available ? [input] : [])]);
});

test('editorial reporting uses trusted workflow code and is outside the required aggregate', async () => {
  const value = await workflow('api-editorial');
  assert.deepEqual(value.permissions, { contents: 'read', actions: 'read', checks: 'write' });
  assert.deepEqual(value.on.workflow_run, { workflows: ['Documentation'], types: ['completed'] });
  assert.doesNotMatch(JSON.stringify(value.jobs), /npm ci|npm install|dotnet|secrets\.|create-github-app-token|actions\/cache/);
  for (const step of value.jobs.report.steps) if (step.uses?.startsWith('actions/checkout@')) assert.equal(step.with.ref, undefined);
  const required = await workflow('documentation');
  assert.doesNotMatch(JSON.stringify(required.jobs.validation.needs), /editorial/);
});

test('only draft/main updates and PRs enter documentation validation; feature pushes do not', async () => {
  const value = await workflow('documentation');
  assert.deepEqual(value.on.push.branches, ['draft', 'main']);
  assert.deepEqual(value.on.pull_request.branches, ['draft', 'main']);
  assert.equal(value.env.DOCUMENTATION_COMMIT, '${{ github.sha }}');
  assert.equal(value.jobs.source, undefined);
  assert.deepEqual(value.jobs.validation.needs, ['reuse', 'projection', 'tooling-portability']);
  assert.equal(value.jobs.validation.if, 'always()');
  assert.match(JSON.stringify(value.jobs.validation.steps), /PROJECTION_RESULT.*success/);
  assert.match(JSON.stringify(value.jobs.validation.steps), /PORTABILITY_RESULT.*success/);
});

test('candidate validation has no App, deployment or cross-repository mutation permissions', async () => {
  const value = await workflow('documentation');
  assert.deepEqual(value.permissions, { contents: 'read', actions: 'read' });
  const text = JSON.stringify(value.jobs);
  assert.doesNotMatch(text, /secrets\.|create-github-app-token|pull_request_target|deploy-pages|source-evidence|Engine validation/);
  assert.equal(value.jobs.projection.steps.find(step => step.run === 'npm run build').env.INNO_DOCS_EXAMPLE_MANIFEST, 'artifacts/examples/manifest.json');
  for (const [name, job] of Object.entries(value.jobs)) {
    if (name !== 'deploy') assert.equal(job.permissions, undefined);
    for (const step of job.steps) if (step.uses && !step.uses.startsWith('./')) assert.match(step.uses, /@[a-f0-9]{40}$/);
  }
});

test('only validated main inputs can deploy the single Pages artifact', async () => {
  const value = await workflow('documentation');
  const deploy = value.jobs.deploy;
  assert.deepEqual(deploy.permissions, { contents:'read', actions:'read', pages:'write', 'id-token':'write' });
  assert.equal(deploy.environment.name, 'github-pages');
  assert.match(deploy.if, /needs.validation.result == 'success'/);
  assert.match(deploy.if, /github.ref == 'refs\/heads\/main'/);
  assert.match(deploy.if, /github.event_name == 'push'/);
  assert.doesNotMatch(JSON.stringify(deploy.steps), /npm ci|npm run build|upload-artifact|upload-pages-artifact/);
  const uploads = value.jobs.projection.steps.filter(step => step.uses?.startsWith('actions/upload-pages-artifact@'));
  assert.equal(uploads.length, 1);
  assert.equal(uploads[0].with.path, 'dist/');
  assert.equal(uploads[0].with['retention-days'], 90);
  assert.equal(value.jobs.projection.steps.filter(step => step.with?.path === 'dist/').length, 1);
  for (const retired of ['vercel.json', '.github/workflows/publish.yml', '.github/deployment/package.json', 'scripts/vercel-output.mjs', 'scripts/prepare-catalog.ps1', 'scripts/publication-source.mjs']) {
    await assert.rejects(access(new URL('../' + retired, import.meta.url)), /ENOENT/);
  }
});
