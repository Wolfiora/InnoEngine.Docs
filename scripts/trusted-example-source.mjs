const sha = (value, length = 40) => typeof value === 'string' && new RegExp(`^[a-f0-9]{${length}}$`).test(value);
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Verify a completed Docs main producer and its exact retained attempt. No engine CI is consulted. */
export function authorizeRun({ run, jobs, artifacts, repository, workflow, branch, commit, aggregate, artifactName, events }) {
  requireValue(repository === 'Wolfiora/InnoEngine.Docs' && branch === 'main' && workflow === '.github/workflows/documentation.yml'
    && aggregate === 'Documentation validation' && artifactName === 'documentation-examples'
    && events.every(event => ['push', 'workflow_dispatch'].includes(event)), 'Example receipt reuse policy permits only the Docs main producer.');
  requireValue(run.repository?.full_name === repository && run.head_repository?.full_name === repository, 'Example receipt reuse cannot consume a fork or another repository.');
  requireValue(run.status === 'completed' && run.conclusion === 'success', 'Example receipt reuse requires a successful completed run.');
  requireValue(run.path === workflow && run.head_branch === branch && run.head_sha === commit && sha(commit)
    && events.includes(run.event), 'Workflow, event or immutable source does not match the selected example receipt.');
  requireValue(Number.isSafeInteger(run.id) && run.id > 0 && Number.isSafeInteger(run.run_attempt) && run.run_attempt > 0, 'Run identity is invalid.');
  const required = jobs.filter(job => job.name === aggregate);
  requireValue(required.length === 1 && required[0].run_id === run.id && required[0].status === 'completed'
    && required[0].conclusion === 'success', 'The required aggregate did not pass exactly once.');
  const selected = artifacts.filter(artifact => artifact.name === `${artifactName}-attempt-${run.run_attempt}`);
  requireValue(selected.length === 1 && !selected[0].expired && selected[0].size_in_bytes > 0
    && selected[0].workflow_run?.id === run.id && selected[0].workflow_run?.head_sha === commit
    && /^sha256:[a-f0-9]{64}$/.test(selected[0].digest ?? ''), 'The exact successful attempt has no retained immutable artifact.');
  return { id: selected[0].id, name: selected[0].name, digest: selected[0].digest, run: run.id, attempt: run.run_attempt, commit };
}

