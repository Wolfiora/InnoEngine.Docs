import { appendFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const requireValue = (condition, message) => { if (!condition) throw new Error(message); };
const sha = (value, length = 40) => typeof value === 'string' && new RegExp(`^[a-f0-9]{${length}}$`).test(value);

/** Authorize one successful workflow source before downloading or reading its candidate payload. */
export function authorizeRun({ run, jobs, artifacts, repository, workflow, branch, commit, aggregate, artifactName, events }) {
  requireValue(run.repository?.full_name === repository && run.head_repository?.full_name === repository, 'Publication cannot consume a fork or another repository.');
  requireValue(run.status === 'completed' && run.conclusion === 'success', 'Publication requires a successful completed run.');
  requireValue(run.path === workflow && run.head_branch === branch && run.head_sha === commit && sha(commit)
    && events.includes(run.event), 'Workflow, event or immutable source does not match the selected publication.');
  requireValue(Number.isSafeInteger(run.id) && run.id > 0 && Number.isSafeInteger(run.run_attempt) && run.run_attempt > 0, 'Run identity is invalid.');
  const required = jobs.filter((job) => job.name === aggregate);
  requireValue(required.length === 1 && required[0].run_id === run.id && required[0].status === 'completed'
    && required[0].conclusion === 'success', 'The required aggregate did not pass exactly once.');
  const selected = artifacts.filter((artifact) => artifact.name === `${artifactName}-attempt-${run.run_attempt}`);
  requireValue(selected.length === 1 && !selected[0].expired && selected[0].size_in_bytes > 0
    && selected[0].workflow_run?.id === run.id && selected[0].workflow_run?.head_sha === commit
    && /^sha256:[a-f0-9]{64}$/.test(selected[0].digest ?? ''), 'The exact successful attempt has no retained immutable artifact.');
  return { id: selected[0].id, name: selected[0].name, digest: selected[0].digest, run: run.id, attempt: run.run_attempt, commit };
}

/** Check the matrix's already-reconciled receipt and its exact documentation pair; never infer success from missing rows. */
export function authorizePairing({ certificate, manifest, engineRun, expectedPlatforms }) {
  requireValue(Array.isArray(certificate) && certificate.length === expectedPlatforms.length && expectedPlatforms.length > 0, 'Publication requires the complete engine matrix.');
  requireValue(sha(manifest.sourceEvidenceIdentity, 64) && sha(engineRun.head_sha) && sha(manifest.engine.revision)
    && Number.isSafeInteger(manifest.exampleEvidence?.required) && manifest.exampleEvidence.required >= 0
    && manifest.exampleEvidence.covered === manifest.exampleEvidence.required,
  'Publication requires the site producer\'s authenticated source and complete executable example evidence.');
  const seen = new Set();
  let exactCandidate = true;
  for (const row of certificate) {
    requireValue(expectedPlatforms.includes(row.platform) && !seen.has(row.platform), 'Missing, duplicate or unexpected platform certification.');
    seen.add(row.platform);
    const receipt = row.receipt;
    const pair = row.receipt?.documentation;
    requireValue(receipt && sha(receipt.commit) && sha(receipt.tree, 64) && sha(receipt.environment, 64)
      && sha(receipt.planIdentity, 64) && sha(receipt.resultsIdentity, 64)
      && Number.isSafeInteger(receipt.required) && receipt.required > 0
      && Number.isSafeInteger(receipt.passed) && receipt.passed >= 0 && Number.isSafeInteger(receipt.reused) && receipt.reused >= 0
      && receipt.required === receipt.passed + receipt.reused, 'Engine certification lacks complete required results.');
    requireValue(pair && pair.engineCommit === receipt.commit && pair.engineTree === manifest.engine.tree,
      'Engine certification does not bind the verified documentation source tree.');
    exactCandidate &&= pair.documentationCommit === manifest.commit && pair.documentationSnapshot === manifest.snapshot
      && pair.contentIdentity === manifest.contentIdentity;
  }
  // A reviewed prose-only update or merge commit can retain the same certified source tree. The site
  // producer separately verifies every current API reference and executable example against its authenticated
  // source certificate; matching file names, signatures alone or a preview cannot supply this evidence.
  return { status: 'Passed', engineRun: engineRun.id, engineRevision: engineRun.head_sha, documentedRevision: manifest.engine.revision,
    correspondence: exactCandidate ? 'ExactCandidate' : 'SourceEquivalentDocumentation',
    engineTree: manifest.engine.tree, documentationCommit: manifest.commit, snapshot: manifest.snapshot, contentIdentity: manifest.contentIdentity };
}

async function github(endpoint, token) {
  const response = await fetch('https://api.github.com' + endpoint, { headers: { Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error' });
  requireValue(response.ok, `GitHub evidence request failed (${response.status}): ${endpoint}`);
  return response.json();
}

async function list(endpoint, field, token) {
  const collected = [];
  for (let page = 1; ; page++) {
    const result = await github(`${endpoint}${endpoint.includes('?') ? '&' : '?'}per_page=100&page=${page}`, token);
    requireValue(Array.isArray(result[field]), 'GitHub evidence collection is malformed.');
    collected.push(...result[field]);
    if (result[field].length < 100) return collected;
  }
}

/** Locate a certificate relayed by the protected receiver, using this repository's read-only token. */
export async function selectRelayedCertificate({ binding, bootstrap, token }) {
  requireValue(token && sha(binding.revision) && sha(binding.sourceTree) && binding.repository === 'https://github.com/Wolfiora/InnoEngine',
    'An exact engine binding and repository read token are required.');
  const repository = 'Wolfiora/InnoEngine.Docs';
  const prefix = `/repos/${repository}`;
  const metadata = await github(prefix, token);
  const artifactName = `source-evidence-tree-${binding.sourceTree}`;
  const candidates = await list(`${prefix}/actions/artifacts`, 'artifacts', token);
  for (const artifact of candidates.filter(item => !item.expired && item.name.startsWith(artifactName + '-attempt-')).sort((a, b) => b.id - a.id)) {
    requireValue(Number.isSafeInteger(artifact.workflow_run?.id), 'Relayed evidence has no authenticated producer.');
    const run = await github(`${prefix}/actions/runs/${artifact.workflow_run.id}`, token);
    if (run.status !== 'completed' || run.conclusion !== 'success') continue;
    const branch = bootstrap && run.head_branch === 'docs-modernization' ? 'docs-modernization' : metadata.default_branch;
    const jobs = await list(`${prefix}/actions/runs/${run.id}/attempts/${run.run_attempt}/jobs`, 'jobs', token);
    if (artifact.name !== `${artifactName}-attempt-${run.run_attempt}`) continue;
    const authorized = authorizeRun({ run, jobs, artifacts: [artifact],
      repository, workflow: '.github/workflows/source-evidence.yml', branch, commit: run.head_sha,
      aggregate: 'Import source evidence', artifactName, events: ['workflow_dispatch'] });
    return { documentation: { ...authorized, name: artifact.name, metadata: run }, engineRevision: binding.revision, engineTree: binding.sourceTree };
  }
  throw new Error('Blocked: no successful protected source-evidence import exists for this exact engine source tree. Complete the matching engine certification and evidence relay; do not rebuild the website.');
}

/** Select an authenticated source certificate before the site build; never run from a read-only query. */
export async function selectSourceCertificate({ engineRun, binding, bootstrap, token }) {
  requireValue(token && /^[1-9][0-9]*$/.test(engineRun) && sha(binding.revision)
    && binding.repository === 'https://github.com/Wolfiora/InnoEngine', 'An exact engine binding, run and scoped token are required.');
  const repository = 'Wolfiora/InnoEngine';
  const prefix = `/repos/${repository}`;
  const metadata = await github(prefix, token);
  const run = await github(`${prefix}/actions/runs/${engineRun}`, token);
  const internalCandidate = !bootstrap && run.event === 'pull_request' && Array.isArray(run.pull_requests)
    && run.pull_requests.length > 0 && run.pull_requests.every(pull => pull.head?.sha === binding.revision);
  const branch = bootstrap ? 'ai-pipeline' : internalCandidate ? run.head_branch : metadata.default_branch;
  const jobs = await list(`${prefix}/actions/runs/${engineRun}/attempts/${run.run_attempt}/jobs`, 'jobs', token);
  const artifacts = await list(`${prefix}/actions/runs/${engineRun}/artifacts`, 'artifacts', token);
  // A preserved certificate can remain valid after an unrelated branch advance. Exact source/ref binding
  // is checked by the canonical query core; publication separately requires a current candidate pair.
  return { engine: { ...authorizeRun({ run, jobs, artifacts, repository, branch, commit: binding.revision,
    workflow: '.github/workflows/rendering-ci.yml', aggregate: 'Engine validation',
    artifactName: 'documentation-source-certification', events: ['push', 'workflow_dispatch', 'pull_request', 'merge_group', 'schedule'] }), metadata: run } };
}

/** Explicit authenticated preparation; ordinary documentation queries never use this transport. */
export async function selectPublicationSources({ docsRun, docsCommit, engineRun, engineCommit, bootstrap, token }) {
  requireValue(token && /^[1-9][0-9]*$/.test(docsRun) && /^[1-9][0-9]*$/.test(engineRun)
    && sha(docsCommit) && sha(engineCommit), 'Explicit run IDs, commits and an evidence token are required.');
  const sources = [
    { repository: 'Wolfiora/InnoEngine.Docs', id: docsRun, commit: docsCommit, workflow: '.github/workflows/documentation.yml',
      aggregate: 'Documentation validation', artifactName: 'documentation-site', bootstrapBranch: 'docs-modernization', events: ['push', 'workflow_dispatch'] },
    { repository: 'Wolfiora/InnoEngine', id: engineRun, commit: engineCommit, workflow: '.github/workflows/rendering-ci.yml',
      aggregate: 'Engine validation', artifactName: 'engine-certification', bootstrapBranch: 'ai-pipeline', events: ['push', 'workflow_dispatch', 'pull_request', 'merge_group'] }
  ];
  const authorized = [];
  for (const source of sources) {
    const prefix = `/repos/${source.repository}`;
    const repository = await github(prefix, token);
    const branch = bootstrap ? source.bootstrapBranch : repository.default_branch;
    const current = await github(`${prefix}/branches/${encodeURIComponent(branch)}`, token);
    requireValue(current.commit?.sha === source.commit, `The selected ${source.repository} branch changed; re-evaluate its candidate.`);
    const run = await github(`${prefix}/actions/runs/${source.id}`, token);
    const jobs = await list(`${prefix}/actions/runs/${source.id}/attempts/${run.run_attempt}/jobs`, 'jobs', token);
    const artifacts = await list(`${prefix}/actions/runs/${source.id}/artifacts`, 'artifacts', token);
    const platforms = source.repository === 'Wolfiora/InnoEngine'
      ? jobs.filter((job) => job.name.startsWith('Validate / ')).map((job) => {
        requireValue(job.status === 'completed' && job.conclusion === 'success', 'An actual engine matrix producer did not pass.');
        return job.name.slice('Validate / '.length);
      }) : [];
    authorized.push({ ...authorizeRun({ ...source, branch, run, jobs, artifacts }), metadata: run, platforms });
  }
  return { documentation: authorized[0], engine: authorized[1], bootstrap };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [operation, ...args] = process.argv.slice(2);
  if (operation === 'select' && args.length === 1) {
    const selected = await selectPublicationSources({ docsRun: process.env.DOCUMENTATION_RUN, docsCommit: process.env.DOCUMENTATION_COMMIT,
      engineRun: process.env.ENGINE_RUN, engineCommit: process.env.ENGINE_COMMIT, bootstrap: process.env.BOOTSTRAP === 'true', token: process.env.GH_TOKEN });
    await writeFile(args[0], JSON.stringify(selected, null, 2) + '\n', { flag: 'wx' });
    for (const [name, source] of Object.entries(selected).filter(([name]) => name !== 'bootstrap'))
      await appendFile(process.env.GITHUB_OUTPUT, `${name}-artifact=${source.id}\n${name}-attempt=${source.attempt}\n`);
  } else if (operation === 'source' && args.length === 2) {
    const binding = JSON.parse(await readFile(args[0], 'utf8'));
    const selected = await selectSourceCertificate({ engineRun: process.env.ENGINE_RUN, binding,
      bootstrap: process.env.BOOTSTRAP === 'true', token: process.env.GH_TOKEN });
    await writeFile(args[1], JSON.stringify(selected, null, 2) + '\n', { flag: 'wx' });
  } else if (operation === 'relayed' && args.length === 2) {
    const binding = JSON.parse(await readFile(args[0], 'utf8'));
    const selected = await selectRelayedCertificate({ binding, bootstrap: process.env.BOOTSTRAP === 'true', token: process.env.GH_TOKEN });
    await writeFile(args[1], JSON.stringify(selected, null, 2) + '\n', { flag: 'wx' });
  } else if (operation === 'pair' && args.length === 3) {
    const [selection, certificate, manifest] = await Promise.all(args.map(async (file) => JSON.parse(await readFile(file, 'utf8'))));
    console.log(JSON.stringify(authorizePairing({ certificate, manifest, engineRun: selection.engine.metadata,
      expectedPlatforms: selection.engine.platforms })));
  } else throw new Error('Usage: publication-source.mjs select OUTPUT | source BINDING OUTPUT | relayed BINDING OUTPUT | pair SELECTION CERTIFICATE MANIFEST');
}
