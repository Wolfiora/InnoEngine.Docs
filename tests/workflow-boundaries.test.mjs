import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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
  assert.deepEqual(value.jobs.validation.needs, ['projection']);
  assert.equal(value.jobs.validation.if, 'always()');
  assert.match(JSON.stringify(value.jobs.validation.steps), /PROJECTION_RESULT.*success/);
});

test('candidate validation has no App, deployment or cross-repository mutation permissions', async () => {
  const value = await workflow('documentation');
  assert.deepEqual(value.permissions, { contents: 'read', actions: 'read' });
  const text = JSON.stringify(value.jobs);
  assert.doesNotMatch(text, /secrets\.|create-github-app-token|pull_request_target|deploy-pages|source-evidence|Engine validation/);
  assert.match(text, /--complete/);
  assert.match(text, /--example-manifest/);
  for (const job of Object.values(value.jobs)) {
    assert.equal(job.permissions, undefined);
    for (const step of job.steps) if (step.uses && !step.uses.startsWith('./')) assert.match(step.uses, /@[a-f0-9]{40}$/);
  }
});

test('publication only accepts main and transports checked artifacts to the selected host without rebuilding', async () => {
  const value = await workflow('publish');
  assert.deepEqual(value.on.workflow_run, { workflows: ['Documentation'], types: ['completed'], branches: ['main'] });
  assert.deepEqual(Object.keys(value.on.workflow_dispatch.inputs), ['documentation_run', 'documentation_commit']);
  assert.match(value.jobs.verify.if, /conclusion == 'success'/);
  assert.match(value.jobs.verify.if, /head_repository.full_name == github.repository/);
  assert.match(value.jobs.verify.if, /head_branch == 'main'/);
  assert.match(value.jobs.verify.if, /github.ref == 'refs\/heads\/main'/);
  assert.equal(value.jobs.deploy.needs, 'verify');
  assert.deepEqual(value.jobs.deploy.permissions, { pages: 'write', 'id-token': 'write' });
  const text = JSON.stringify(value.jobs);
  assert.doesNotMatch(text, /npm install|npm run build|prepare-catalog|actions\/cache|engine_run|engine_commit|create-github-app-token|bootstrap/);
  const installs = value.jobs.verify.steps.filter(step => /npm ci/.test(step.run ?? ''));
  assert.equal(installs.length, 1);
  assert.equal(installs[0].run, 'npm ci --prefix .github/deployment');
  assert.equal(installs[0].if, "env.DOCS_HOSTING == 'vercel'");
  const privileged = value.jobs.verify.steps.filter(step => /secrets\./.test(JSON.stringify(step)));
  assert.equal(privileged.length, 1);
  assert.equal(privileged[0].if, "env.DOCS_HOSTING == 'vercel'");
  assert.equal(privileged[0].env.VERCEL_TOKEN, '${{ secrets.VERCEL_TOKEN }}');
  assert.match(privileged[0].run, /--prebuilt --archive=split-tgz --prod/);
  assert.match(value.jobs.deploy.if, /DOCS_HOSTING != 'vercel'/);
  assert.match(text, /publication-source.mjs select artifacts\/publication\/closing-selection.json/);
  for (const step of value.jobs.verify.steps) if (step.uses?.startsWith('actions/checkout@')) {
    assert.equal(step.with.ref, undefined);
    assert.equal(step.with['persist-credentials'], false);
  }
});
