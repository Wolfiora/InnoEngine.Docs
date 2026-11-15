# Incremental CI and release promotion

Implementation of the approved November 16 plan. This record distinguishes implementation from remote checks and human publication.

## Execution model

Incremental draft work selects canonical page composition changes, incoming links, contracts, includes, category/pagination context and representative presentation cases. Release PRs render all pages, generate Pagefind and run full reading checks. Main deploys one trusted matching Release artifact or validates once when inputs differ. Manual runs explicitly select the mode.

Operational Markdown is checked separately without product rendering. Plans and results use Passed, Reused, Failed, Blocked and NotApplicable; unknown scope expands conservatively. Partial previews list their pages, expire after seven days and cannot pass the publication barrier.

Page receipts bind composed content, direct relationships and rendering controls/environment. Compiler receipts retain code/owner/surface groups and actual compiler/API input context. Missing dependency precision expands conservatively rather than guessing. Immutable .NET bundles derive from evaluated project references, source/resources, imports, SDK and package versions; commit identity alone does not invalidate them. Linux portability uses an independent receipt. Authenticated receipt corruption fails; ordinary cache corruption is isolated and rebuilt.

The old whole-Git-tree validation-reuse script and its protocol/callers are removed. Release artifacts are archived once for 90 days; diagnostics for 30 days. PR candidates can be promoted only with trusted main control code; control-changing PRs revalidate after merge. No PR scripts execute in the privileged deployment job.

## Evidence and delivery

Finite tooling tests and the engine's owner/no-op/manual-publication regressions are in progress. Actual incremental, Release and reuse run identities will be recorded after the changes are published. No formal PR merge or production deployment is authorized by implementation alone.
