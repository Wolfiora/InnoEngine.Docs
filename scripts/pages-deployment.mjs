import path from 'node:path';
import { lstat, readdir, appendFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { eligible } from './validation-reuse.mjs';
const repository = 'Wolfiora/InnoEngine.Docs';
const pageUrl = 'https://wolfiora.github.io/InnoEngine.Docs/';
const requireValue = (value, message) => { if (!value) throw new Error(message); };

/** Include all delivered files, including the publication receipt, in the host limit. */
export async function checkSize(directory, limit = 1_000_000_000) {
  let bytes = 0;
  async function visit(file) {
    const info = await lstat(file);
    requireValue(!info.isSymbolicLink(), 'Pages output cannot contain links.');
    if (info.isDirectory()) for (const name of await readdir(file)) await visit(path.join(file, name));
    else {
      requireValue(info.isFile() && info.nlink === 1, 'Pages output must contain ordinary files only.');
      bytes += info.size;
    }
  }
  await visit(directory);
  requireValue(bytes > 0 && bytes <= limit, `Pages output is ${bytes} bytes; the publication limit is ${limit}.`);
  return bytes;
}

export function publicationInput(env) {
  requireValue(env.GITHUB_REPOSITORY === repository && env.GITHUB_REF === 'refs/heads/main'
    && ['push', 'workflow_dispatch'].includes(env.GITHUB_EVENT_NAME), 'Only the main publication workflow may deploy.');
  requireValue(/^[a-f0-9]{40}$/.test(env.GITHUB_SHA ?? '') && /^[1-9][0-9]*$/.test(env.SITE_ARTIFACT_ID ?? ''), 'An exact commit and checked artifact are required.');
}

/** Deploy the existing immutable Pages archive by ID, including trusted cross-run reuse. */
export async function deploy(env = process.env) {
  publicationInput(env);
  const api = async (endpoint, method = 'GET', body) => {
    const response = await fetch(`https://api.github.com/repos/${repository}/${endpoint}`, {
      method, redirect: 'error', signal: AbortSignal.timeout(30_000),
      headers: { Authorization: `Bearer ${env.GH_TOKEN}`, Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28', ...(body ? { 'Content-Type': 'application/json' } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    requireValue(response.ok, `Pages ${method} ${endpoint} failed (${response.status}).`);
    return response.status === 204 ? null : response.json();
  };
  const main = await api('git/ref/heads/main');
  requireValue(main.object.sha === env.GITHUB_SHA, 'A newer main revision superseded this publication.');
  const settings = await api('pages');
  requireValue(settings.build_type === 'workflow' && settings.html_url === pageUrl, 'Pages must use GitHub Actions and the canonical repository URL.');
  const artifact = await api(`actions/artifacts/${env.SITE_ARTIFACT_ID}`);
  requireValue(!artifact.expired && artifact.size_in_bytes > 0 && /^sha256:[a-f0-9]{64}$/.test(artifact.digest ?? ''), 'The checked site archive is missing, expired or unverified.');
  const producer = await api(`actions/runs/${artifact.workflow_run?.id}`);
  const current = producer.id === Number(env.GITHUB_RUN_ID);
  requireValue((current || eligible(producer)) && producer.repository?.full_name === repository
    && producer.head_repository?.full_name === repository && producer.path === '.github/workflows/documentation.yml'
    && artifact.name === `documentation-site-attempt-${producer.run_attempt}`
    && artifact.workflow_run.head_sha === producer.head_sha, 'Site artifact producer is not trusted.');
  const [source, target] = await Promise.all([api(`git/commits/${producer.head_sha}`), api(`git/commits/${env.GITHUB_SHA}`)]);
  requireValue(source.tree.sha === target.tree.sha, 'Site artifact belongs to different publication inputs.');
  const checks = await api(`actions/runs/${env.GITHUB_RUN_ID}/jobs?per_page=100`);
  requireValue(checks.jobs.some(job => job.name === 'Documentation validation' && job.conclusion === 'success'), 'Current required validation has not passed.');
  requireValue(env.ACTIONS_ID_TOKEN_REQUEST_URL?.startsWith('https:') && env.ACTIONS_ID_TOKEN_REQUEST_TOKEN, 'Pages requires the job-scoped OIDC identity.');
  const identityResponse = await fetch(env.ACTIONS_ID_TOKEN_REQUEST_URL, { redirect: 'error', signal: AbortSignal.timeout(30_000),
    headers: { Authorization: `Bearer ${env.ACTIONS_ID_TOKEN_REQUEST_TOKEN}` } });
  requireValue(identityResponse.ok, 'GitHub OIDC identity request failed.');
  const identity = await identityResponse.json();
  requireValue(typeof identity.value === 'string' && identity.value.length > 0, 'GitHub OIDC identity is missing.');
  const deployment = await api('pages/deployments', 'POST', { artifact_id: artifact.id, pages_build_version: env.GITHUB_SHA, oidc_token: identity.value });
  const id = String(deployment.id ?? deployment.status_url?.split('/').pop() ?? '');
  requireValue(typeof id === 'string' && /^[a-zA-Z0-9_-]+$/.test(id), 'Pages returned no valid deployment identity.');
  const cancellation = new AbortController();
  const abort = () => cancellation.abort();
  process.once('SIGINT', abort); process.once('SIGTERM', abort);
  let completed = false;
  try {
    // This is the documented Pages deployment limit, not a build-duration heuristic.
    const deadline = Date.now() + 600_000;
    while (Date.now() < deadline) {
      cancellation.signal.throwIfAborted();
      const result = await api(`pages/deployments/${id}`);
      if (result.status === 'succeed') {
        completed = true;
        await appendFile(env.GITHUB_OUTPUT, `page_url=${pageUrl}\n`);
        await appendFile(env.GITHUB_STEP_SUMMARY, `Published [GitHub Pages](${pageUrl}) from verified artifact ${artifact.id}, producer run ${producer.id}. No rebuild or second archive upload.\n`);
        return;
      }
      requireValue(!['deployment_failed', 'deployment_content_failed', 'deployment_cancelled', 'deployment_lost'].includes(result.status), `Pages reported ${result.status}.`);
      console.log(`Pages deployment: ${result.status}`);
      await new Promise(resolve => setTimeout(resolve, 10_000));
    }
    throw new Error('Pages reached its documented deployment timeout.');
  } finally {
    process.removeListener('SIGINT', abort); process.removeListener('SIGTERM', abort);
    if (!completed) await api(`pages/deployments/${id}/cancel`, 'POST').catch(() => console.error('Pages cancellation could not be confirmed; inspect the deployment.'));
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  if (process.argv[2] === 'size' && process.argv[3]) console.log(`Pages output: ${await checkSize(process.argv[3])} bytes.`);
  else if (process.argv[2] === 'deploy') await deploy();
  else throw new Error('Usage: pages-deployment.mjs size DIRECTORY | deploy');
}
