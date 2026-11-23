# InnoEngine documentation instructions

This repository owns the English documentation and website for InnoEngine. The engine repository owns runtime source, XML comments, API extraction, engine rules, and validation tooling.

## Start a task

1. Confirm the branch, existing changes, requested behavior, and documentation owner. Preserve other sessions' changes.
2. Read [documentation](.agents/rulebook/documentation.md) for content changes, [presentation](.agents/rulebook/presentation.md) for site changes, and [delivery](.agents/rulebook/delivery.md) before delivery. Engine tasks select the same files with the engine `Test-AgentRules.ps1 -DocsRoot <this-checkout>`. This repository is their sole text authority.
3. Use the pinned engine source and manifests. Do not infer public behavior from a name, an internal implementation, or an adjacent consumer repository.
4. Identify the finite checks required by the change. Reuse matching evidence; commits, pushes, and report edits do not independently justify rerunning checks.

## Content and ownership

- Write active documentation, instructions, rules, and new records in English. Preserve historical evidence and legal notices.
- Keep readable content in `content/en/`. Keep generated API/project facts in `reference/`; do not duplicate narrative authority.
- API reference covers public and externally usable protected C# contracts owned by src/ and build/, plus actual script projections. Only src/ and build/ projects are eligible for Engine API. Tools, entries, platform implementations, backends, extern, tests and fixtures are excluded. Keep useful integration guidance, ownership boundaries and legal provenance.
- Keep tutorials, tasks, explanations, and API reference distinct. Link necessary lifecycle, threading, failure, and ownership contracts.
- Never hide a necessary constraint in an excerpt, collapsed block, or unreported continuation.
- Read source declarations and existing contracts before documenting an API. Generated signatures are not proof of semantic quality.
- Do not fabricate supported platforms, editor workflows, examples, or features. Mark actual limitations clearly.
- Engine changes follow the engine's applicable rules. Maintain API XML there; master automatically synchronizes API facts and default prose into this repository's `draft`. No paired PR metadata is required.
- Each API type and member has independent prose ownership. `source: xml` or no source marker means synchronization may replace the registered fragment. Set `source` to the author's nonempty name when taking over its prose. Declarations remain generated. Leave `description: null` for source XML summaries, or supply a nonempty list to override the introduction and referring tables. Show Synced for XML, Authored for named authors and Outdated for source drift affecting the same prose or an explicit warning. A normal edit to the affected text clears the automatic warning. Required `contracts` belong to generated metadata. Store only non-summary XML sections in the editable body, with second-level headings. Empty author names fail. Missing or stale manual explanations produce neutral editorial warnings, not publication blockers.
- A page that synchronization does not register is hand-written. Create and edit it by [Create a documentation page](content/en/contributing/create-a-page.md): copy its metadata template, keep the identity, relation and authoring groups with their comment lines, never change a published `uid`, and name only actual projects and page identities in relation fields. Do not add generated fields to such a page.
- Start ordinary documentation work from `draft`; feature branches without PRs do not run CI. Draft updates and PRs validate and preview. A human `draft` to `main` merge publishes the checked site. After a main update, CI fast-forwards draft to main without creating a commit. Never otherwise automatically merge, reset, force-push or delete the persistent draft branch.

## Execution and completion

Use the pinned Node version and `npm ci`. Run content/reference checks, a production build, and applicable browser checks for changed behavior. Rendering documentation must not prepare Native products.

Verify the complete selected API package, content, executable examples and site. GitHub Actions owns validation and GitHub Pages is the sole website publisher. Only a successful main push or main manual run can deploy the existing verified Pages archive; deployment never rebuilds or uploads a second site. Draft and PR runs validate and retain previews only. Do not restore an external hosting publisher. Keep the previous site on failure. Do not require unrelated full-engine certification or the newest engine master for publication. Report synchronization, validation, editorial work and deployment separately, and identify external setup blockers.

Keep caches and transient output in ignored, task-owned locations. Preserve first-failure evidence and active readers. Never clean another session's artifacts.

CI uses one input-based plan: incremental draft checks, complete Release PR checks and trusted same-input main promotion. Preserve canonical relationships, per-check receipts and the partial-preview publication barrier. Operational guidance changes do not select a product website build.
