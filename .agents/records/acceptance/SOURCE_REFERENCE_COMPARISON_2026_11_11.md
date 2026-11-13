# Current source-reference comparison

Engine candidate `02482088a47691c00455070aeb9cfd51b0c803ff` (tree `34a82f451947147cd67933dc7eb9e60c6e46e9f4`) adds the shared `docs validate-api` entry. The Docs binding now selects this source and tooling revision. The newly changed Architecture capture has its own immutable provenance; unchanged captures keep their original source attribution.

## Actual source evidence

The first Debug, target-neutral comparison evaluated 172 owners in one SDK process. Evaluation reported 2.827 seconds; reference capture reported 14.309 seconds for 332 graph nodes/variants. It matched 171 owners and reported one missing declaration: the newly added `DocumentationReferences.ValidateApi` method.

After capturing that owner and updating its API page, the four owners in the affected tooling manifests passed a single comparison (1.616 seconds evaluation, 4.569 seconds capture). The two Windows product owners passed their separate target context (1.857 seconds evaluation, 4.564 seconds capture). The other 168 owners were not repeated: their expected facts and selected source inputs were unchanged. This covers 174 available source-clr owner captures, not the three still-missing macOS/Browser product captures.

Raw reports preserve the original failed batch and the bounded follow-ups beside this record. Every report retains `Unverified` for overall source certification. None establishes complete immutable execution-input provenance, script-surface coverage, semantic prose quality, device behavior or a trusted publication workflow by itself.

## Documentation and build checks

Eleven engine reference-tool regressions passed, including XML-only invalidation, source-offset stability, overload omission, invalid/duplicate discovery, different contexts and cancellation preserving a previous report. The Build entry compiled without errors/warnings. The source architecture check passed after correcting a pre-existing indexer lambda's parameter layout; the first failure is retained in the engine acceptance output.

The pinned managed-only Docs bootstrap succeeded. Final canonical and rendered projection checks passed for 2,528 pages, 252 project entries and 12,253 selected declarations. Snapshot: `5cde8d5f1d195a7ffd93840ebefdf28b4c33ad0eb07989c338ebe44f9befa328`. Site build: 53.13 seconds, including 28.90 seconds of Pagefind work. This batch changed no site theme or browser behavior; previously passing JavaScript/browser checks were not repeated without an implementation change.

Registered snapshot retirement reclaimed 44,042,491 logical bytes while protecting 59,381,143 bytes. The current snapshot, required caches and original failure evidence remain available.

## Remaining integration

Immutable reference payloads, the external validation-plan cutover, legacy removal, trusted paired-PR/publication evidence and actual Pages/cross-platform acceptance remain separate subsequent work. Complete projection continues to reject the missing target captures and unverified source state. No website deployment or overall completion is claimed here.
