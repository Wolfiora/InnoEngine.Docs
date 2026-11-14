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
  assert.deepEqual(value.jobs.validation.needs, ['projection', 'tooling-portability']);
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
  for (const job of Object.values(value.jobs)) {
    assert.equal(job.permissions, undefined);
    for (const step of job.steps) if (step.uses && !step.uses.startsWith('./')) assert.match(step.uses, /@[a-f0-9]{40}$/);
  }
});

test('Vercel imports main directly while GitHub remains a non-deploying acceptance gate', async () => {
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  assert.equal(config.framework, 'astro');
  assert.equal(config.installCommand, 'npm ci');
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.deepEqual(config.git.deploymentEnabled, { '**': false, main: true });
  assert.deepEqual(config.routes[0], { src: '^/$', status: 307, headers: { Location: '/InnoEngine.Docs/' } });
  assert.equal(config.routes[1].handle, 'filesystem');
  assert.equal(config.routes[2].status, 404);
  const required = await workflow('documentation');
  assert.doesNotMatch(JSON.stringify(required), /deploy-pages|VERCEL_TOKEN|DOCS_HOSTING|vercel\.cmd/);
  assert.equal(required.jobs['tooling-portability']['runs-on'], 'ubuntu-24.04');
  assert.equal(required.jobs.projection.steps.find(step => step.name === 'Prepare canonical API content and editorial observations').run, 'npm run docs:prepare');
  for (const retired of ['.github/workflows/publish.yml', '.github/deployment/package.json', 'scripts/vercel-output.mjs', 'scripts/prepare-catalog.ps1', 'scripts/publication-source.mjs']) {
    await assert.rejects(access(new URL('../' + retired, import.meta.url)), /ENOENT/);
  }
});
