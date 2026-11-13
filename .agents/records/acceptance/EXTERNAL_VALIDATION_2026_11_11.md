# External documentation validation integration — 2026-11-11

This local authoring candidate binds engine commit `b8d6c801595a5fc719c651b451123191ef4dd07f`, tree `277771f0472056016d5d0630dac1642e52830ba6`. It documents protected snapshot selection, per-owner API facts, canonical example contexts, shared resolved SDK graphs and standalone evidence integrity checks.

## Changed content and facts

- Updated the validation task, evidence explanation and tooling project entry.
- Refreshed Architecture and development-entry source facts through the existing extractor. Build and Editor entry declarations/XML were compared with the preceding facts and are unchanged.
- Regenerated only the two affected tool references through their existing ownership manifests. Human-authored shared contracts remain separate from generated declarations.
- Backend-native and generated binding member references remain outside the approved scope. Managed integration and ownership documentation remain included.

## Local results

| Check | Observed result |
| --- | --- |
| Canonical snapshot | `c70ec0fe6cdf57f0f02bfa1fbfea180ac04ee23acedb0d466e427fa7f45a3bc3`; content `1b1a69566cac35ca451b5984e6f3694d69d6130dcc607a6123423088d0ad7e5c`. |
| Incremental preparation | 2,529 pages: five parsed, 2,524 reused; 6,852.5293 ms total. This single authoring observation is not a five-sample benchmark, and overlapping phase counters must not be summed. |
| Selected source comparison | Architecture and Validation owners passed in one eight-node graph. This is bounded API/XML comparison, not a whole-engine certificate. |
| Site check | Zero errors, zero warnings and five existing hints across 66 checked files. |
| Static site | 2,529 pages built in 57.11 seconds; Pagefind completed in 31.55 seconds. |
| Canonical/rendered projection | Passed for the available projection: all 252 project entries and 12,272 selected declarations; zero projection errors. Source API state remains Unverified. |
| Registered cache retirement | 44,242,822 logical bytes reclaimed; 74,540,433 protected bytes retained; zero skipped candidates. This is not a physical disk-space measurement. |

Raw Docs evidence is retained in `artifacts/external-validation-*`. Engine source comparison is in `artifacts/acceptance/english-documentation/external-validation-api-comparison.json`. The engine acceptance record `EXTERNAL_DOCUMENTATION_VALIDATION_2026_11_11.md` retains the actual execution regressions and hosted protocol fixtures; their results are not duplicated as website certification.

## Preparation boundaries and first failures

The reference generator initially rejected the old canonical catalog after the source binding changed. Refreshing the explicit authoring snapshot resolved that prerequisite. An initial CLI invocation also correctly rejected a Docs cache placed outside its selected workspace owner; the corrected invocation selected the Docs workspace that already owns that cache. Neither check was disabled.

The engine checkout contains an unrelated uncommitted Editor source edit belonging to another session. It was preserved and excluded from the engine commit. This candidate used the existing, explicitly selected authoring CLI to prepare immutable documentation; the clean-checkout site bootstrap and hosted publication gate were not represented as passing. No query triggered a hidden build or network request.

No presentation implementation or browser behavior changed, so unchanged earlier browser evidence was not rerun or relabeled as a new full browser acceptance.

## Remaining delivery requirements

The macOS Editor/Player and Browser Player source captures, complete trusted source certificate, hosted candidate checkout coordination, cross-repository App setup, real Windows/macOS CI and actual Pages deployment remain outstanding. The old engine Wiki tree/callers and remaining broad impact-selection paths are not removed by this stage. No overall completion, merge, formal release or issue closure is claimed.
