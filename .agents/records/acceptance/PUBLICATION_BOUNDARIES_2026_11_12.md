# Verified static publication boundaries

The Documentation producer now freezes a file manifest only after its complete source/content/browser gate passes. The separate manual promotion workflow authenticates the selected successful attempts, downloads their exact digests, verifies bounded extraction and all static bytes, checks the reconciled engine/documentation pair, and deploys through a separate Pages job. No candidate source is executed and no site rebuild occurs during promotion.

The publication installation requests Actions read and Contents read only for the two repositories. `INNO_DOCS_APP_ID` and `INNO_DOCS_APP_PRIVATE_KEY` remain external setup requirements until their real installation and access are verified. PR preview artifacts cannot publish. The migration bootstrap is explicitly restricted to the approved development branches.

## Local acceptance

- 39 JavaScript publication scenarios passed: unchanged bytes, failed/incomplete/stale completion, wrong source/event/workflow, forks, missing aggregates, expired artifacts, earlier retry payloads, missing matrix rows, stale pairing, same-length edits, extra/missing files, path escape and hard links.
- Ten real ZIP extraction scenarios passed: accepted ordinary content, tampered digest, escaping/absolute/drive/backslash paths, duplicate entries, symbolic-link metadata, foreign owners and existing destinations.
- Both workflow YAML files parsed without duplicate-key errors.
- The engine's paired receipt implementation passed 31 aggregation cases and five retention protocol cases. These are protocol tests, not actual platform certification.

The first archive fixture exposed a PowerShell case-insensitive variable collision between the typed `Archive` parameter and the opened ZIP object. The opened object now has an independent name. The first failed fixture remains in the task-owned diagnostics alongside the passing corrected run.

Evidence: `artifacts/publication-boundary-tests.log`, `artifacts/publication-archive-corrected-tests.log`, and the engine's `artifacts/acceptance/english-documentation/publication-report-tests.log` and `publication-retention-tests.log`.

## Outstanding acceptance

This does not certify a deployment. Matching source API evidence, actual successful Windows/macOS results, installation provisioning, authenticated artifact retrieval and a real Pages promotion are still required. No prior failure was relabeled successful and neither PR was merged.
