# InnoEngine documentation instructions

This repository owns the English documentation and website for InnoEngine. The engine repository owns runtime source, XML comments, API extraction, engine rules, and validation tooling.

## Start a task

1. Confirm the branch, existing changes, requested behavior, and documentation owner. Preserve other sessions' changes.
2. Read [documentation](.agents/rulebook/documentation.md) for content changes, [presentation](.agents/rulebook/presentation.md) for site changes, and [delivery](.agents/rulebook/delivery.md) before delivery.
3. Use the pinned engine source and manifests. Do not infer public behavior from a name, an internal implementation, or an adjacent consumer repository.
4. Identify the finite checks required by the change. Reuse matching evidence; commits, pushes, and report edits do not independently justify rerunning checks.

## Content and ownership

- Write active documentation, instructions, rules, and new records in English. Preserve historical evidence and legal notices.
- Keep readable content in `content/en/`. Keep generated API/project facts in `reference/`; do not duplicate narrative authority.
- Document the engine's APIs and managed adapter usage. Backend-native and generated binding APIs are outside documentation scope; do not extract, generate or translate their member references. Keep concise engine integration and ownership boundaries where readers need them.
- Keep tutorials, tasks, explanations, and API reference distinct. Link necessary lifecycle, threading, failure, and ownership contracts.
- Never hide a necessary constraint in an excerpt, collapsed block, or unreported continuation.
- Read source declarations and existing contracts before documenting an API. Generated signatures are not proof of semantic quality.
- Do not fabricate supported platforms, editor workflows, examples, or features. Mark actual limitations clearly.
- Engine changes require the engine's own applicable rules and a paired PR. Do not copy its rulebook here.

## Execution and completion

Use the pinned Node version and `npm ci`. Run content/reference checks, a production build, and applicable browser checks for changed behavior. Rendering documentation must not prepare Native products.

Do not publish an unverified engine/documentation pair, merge PRs automatically, or replace the last successful site with a failed candidate. Report actual checks, incomplete migration, and external blockers accurately.

Keep caches and transient output in ignored, task-owned locations. Preserve first-failure evidence and active readers. Never clean another session's artifacts.
