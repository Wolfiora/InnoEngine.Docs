# API draft/main implementation

Status: In progress. This approved design replaces mandatory engine/Docs PR pairing and full-engine certification as a website publication prerequisite. It does not change engine functional acceptance.

## Publication boundary

Engine master exports complete eligible C# and actual projected script facts. A restricted App writes only Docs draft. Documentation checks run for draft/main updates and PR merge candidates; draft never deploys. A human merges draft into main before Pages publication. API editorial coverage is advisory, with neutral warnings; corrupt facts, failed examples and broken site output remain failures.

## Current local work

- Canonical per-type/member composition, XML/manual ownership and actual Scope capture are implemented in engine tooling.
- Draft/main validation and main-only artifact deployment replace the paired source-certificate chain.
- A protected workflow reports API editorial coverage from a digest-verified data artifact, without running candidate code with write credentials.
- Independent example receipts bind code, owner selection, actual compile references and logical projection comparisons. They do not certify engine runtime behavior.
- The full inventoried content has completed per-symbol migration: 18,335 registered symbols, six preserved manual fragments, 2,729 composed pages and all 252 project guides. Historical relocation and available website projection checks pass. The current branch is not deployable merely because these local checks pass.

## Retired responsibilities

The following Docs mechanisms have been removed from current callers:

| Retired item | Replacement |
| --- | --- |
| source-evidence workflow and full Engine CI import | Selected API facts plus scoped example compilation receipts |
| resume-documentation workflow and source-validation retry helper | Normal Docs workflow failures with explicit diagnostics |
| notify-engine-pairing workflow and callback | One-way master-to-draft API synchronization |
| publication pairing and latest-engine-head lookup | Successful Docs main producer, exact artifact digest and current main input tree |
| head-equals-merge candidate helper | Validate the actual GitHub PR merge candidate |
| normalized full-source certificate reader in the website | Independent example receipt input validation |

Archive traversal, missing/extra bytes, expired artifacts, fork origins, wrong producer attempts and skipped aggregates remain covered by the replacement publication tests. Original historical evidence is preserved in Git and historical acceptance records.

## Local evidence

- `artifacts/api-draft-all-node-01.log`: 171 Node tests passed before the latest declaration/receipt hardening.
- `artifacts/api-draft-gates-03.log`: 112 focused replacement gate tests passed, including neutral reporting, real reporting failure, script projection evidence, exact main artifacts and rejection of invented declarations.
- Engine `documentation-tests-11.log`: 109 query/synchronization tests passed; five additional excluded-owner cases and the final per-member edit-link case passed separately.
- Engine `example-tests-04.log`: five real managed example compilation tests passed.
- Engine `migrated-examples-01.json`: all 134 current executable example groups passed against actual managed references and both logical script projections.
- Docs `api-draft-all-node-02.log`: 141 current Node tests passed after retiring the independent API writer and certificate inspection chain.
- Docs `api-draft-original-migration-02.json`: complete original documentation disposition reconciliation passed without rewriting historical payloads.
- Docs `api-draft-rendered-projection-01.json`: all 2,729 rendered pages preserve canonical links, symbols and section anchors.
- Docs `api-draft-browser-02.log`: 87 responsive, light/dark, keyboard and search checks passed using the installed Edge channel. The first attempt failed because the pinned headless browser was absent; its report is preserved. The fixed-version runtime is being prepared separately.

These are local results. App provisioning, protected branch configuration, actual hosted API export, cross-repository draft pushes and Pages deployment are still unverified. No production PR has been merged.

## Remaining gates

1. Final-input site and all 93 pinned-browser checks passed; keep historical macOS capture status explicit until current producers replace them.
2. Complete independent export preparation and all actual target/configuration captures.
3. Remove the remaining engine-side paired publication callers after wiring independent export; the old Docs API renderer and navigation have been removed.
4. Prepare scoped example receipts from actual compiler inputs and wire changed-example execution.
5. Exercise hosted synchronization, concurrency, draft checks, manual content protection and main artifact-only publication.
6. Finish visual/accessibility acceptance, five warm samples, rule provenance, migration inventories and owned-artifact cleanup.

Do not report completion while actionable implementation remains. Manual production merges and unavailable external permissions are explicitly separate gates.
