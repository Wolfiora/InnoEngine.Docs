# Delivery requirements

Use English `type(scope): description` titles and English PR bodies. Describe final behavior, source identities, actual evidence, and unexecuted checks. Use `Aaron Liao <hsuankailiao@gmail.com>` as Git author and committer; do not add co-author trailers.

Engine master exports complete API facts independently of unrelated functional matrices. Protected automation imports them into this repository's persistent draft branch. API prose ownership is per type/member; independent Manual content is not part of synchronization. No paired PR metadata, latest-engine-head match or full-engine source certificate is a website publication prerequisite.

Draft pushes and PRs validate without deployment. A human draft-to-main merge authorizes GitHub Pages publication after Documentation validation succeeds. Deploy the exact existing Pages artifact, including authenticated same-input reuse; do not rebuild, repackage or re-upload in the deploy job. Protect main with current-base required validation, discussion resolution and no force-push; reviewer approval is not required. Never automatically merge or delete/reset draft. Missing manual API prose remains advisory; integrity, examples and website failures block publication.

GitHub Pages is the sole publisher. The github-pages environment permits main only. The deployment job alone receives pages:write and id-token:write; use the repository GITHUB_TOKEN and job OIDC token, never a personal hosting secret. Verify actual Pages configuration and report missing permissions as external blockers. Published content must remain below the documented 1 GB site limit. Do not confuse the transport archive limit with the published-site limit. Never report skipped, failed, canceled or unexecuted work as passed.

This policy supersedes previous hosting migrations. Preserve historical evidence, but remove retired provider configuration, adapters, tests and active instructions rather than maintaining compatibility wrappers.

Preserve original failures and explain retries. Clean only task-owned temporary output, protecting active users and required evidence. Completion includes the full approved migration, callers, tests, deployment, and legacy removal.

## Shared output and evidence reuse

Archive the checked site once for both preview and delivery (90 days); retain diagnostics separately (30 days). Reuse Windows projection evidence only from successful same-repository draft/main push runs of the same workflow with identical Git tree, rendering origin, Node version and Windows runner image. Import the small receipt using its authenticated artifact digest and require the original site artifact to remain available. Retain the original producer identity; do not relabel its site as a new build. Linux portability still runs on the current runner. Missing evidence executes checks; failed integrity validation blocks. The deploy job references the original Pages artifact ID without uploading it again.
