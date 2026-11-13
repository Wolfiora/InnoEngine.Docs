# InnoEngine documentation instructions

This repository owns the English documentation and website for InnoEngine. The engine repository owns runtime source, XML comments, API extraction, engine rules, and validation tooling.

## Start a task

1. Confirm the branch, existing changes, requested behavior, and documentation owner. Preserve other sessions' changes.
2. Read [documentation](.agents/rulebook/documentation.md) for content changes, [presentation](.agents/rulebook/presentation.md) for site changes, and [delivery](.agents/rulebook/delivery.md) before delivery. Inherited complete units retain their original identities in the engine registry; load them with its `Test-AgentRules.ps1 -DocsRoot <this-checkout> -Rules wiki -ShowInstructions`. This repository is their sole text authority.
3. Use the pinned engine source and manifests. Do not infer public behavior from a name, an internal implementation, or an adjacent consumer repository.
4. Identify the finite checks required by the change. Reuse matching evidence; commits, pushes, and report edits do not independently justify rerunning checks.

## Content and ownership

- Write active documentation, instructions, rules, and new records in English. Preserve historical evidence and legal notices.
- Keep readable content in `content/en/`. Keep generated API/project facts in `reference/`; do not duplicate narrative authority.
- API reference covers public and externally usable protected C# engine, Editor, Build and tooling contracts, plus actual script projections. All backends, extern, test and fixture APIs are excluded. Keep useful integration guidance, ownership boundaries and legal provenance.
- Keep tutorials, tasks, explanations, and API reference distinct. Link necessary lifecycle, threading, failure, and ownership contracts.
- Never hide a necessary constraint in an excerpt, collapsed block, or unreported continuation.
- Read source declarations and existing contracts before documenting an API. Generated signatures are not proof of semantic quality.
- Do not fabricate supported platforms, editor workflows, examples, or features. Mark actual limitations clearly.
- Engine changes follow the engine's applicable rules. Maintain API XML there; master automatically synchronizes API facts and default prose into this repository's `draft`. No paired PR metadata is required.
- Each API type and member has independent prose ownership. `source: xml` or no source marker means synchronization may replace the registered fragment. Set `source: manual` when taking over its prose; generated declarations remain authoritative. Unknown markers fail. Missing or stale manual explanations produce neutral editorial warnings, not publication blockers.
- Start ordinary documentation work from `draft`; feature branches without PRs do not run CI. Draft updates and PRs validate and preview. A human `draft` to `main` merge publishes the checked site. Never automatically merge, reset, force-push or delete the persistent draft branch.

## Execution and completion

Use the pinned Node version and `npm ci`. Run content/reference checks, a production build, and applicable browser checks for changed behavior. Rendering documentation must not prepare Native products.

Verify the complete selected API package, content, executable examples and exact site artifact. Do not wait for unrelated full-engine certification or require the selected API version to equal the newest master. Keep the previous site on failure. Report API synchronization, Docs validation, editorial work and deployment separately; identify incomplete migration and external blockers accurately.

Keep caches and transient output in ignored, task-owned locations. Preserve first-failure evidence and active readers. Never clean another session's artifacts.
