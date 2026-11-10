# Delivery requirements

Use English `type(scope): description` titles and English PR bodies. Describe final behavior, source identities, actual evidence, and unexecuted checks. Use `Aaron Liao <hsuankailiao@gmail.com>` as Git author and committer; do not add co-author trailers.

Engine behavior changes and their documentation use paired PRs. Bind immutable engine and Docs identities without circular tracked-file commit references. A prepared Docs candidate is not automatically the published documentation for a merged engine version.

Publish only a verified static artifact. Keep the previous deployment when a new candidate fails. Initial approved branch documentation is labeled development. Stable versions require real approved engine releases. Do not automatically merge PRs or publish a formal engine release.

Cross-repository permissions, branch protection, and Pages configuration require actual verification. Missing permissions are external blockers. Never report skipped, canceled, missing, or failed checks as passed.

Preserve original failures and explain retries. Clean only task-owned temporary output, protecting active users and required evidence. Completion includes the full approved migration, callers, tests, deployment, and legacy removal.
