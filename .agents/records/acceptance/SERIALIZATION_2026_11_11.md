# Serialization tasks and declaration migration

Three project entries, six task/backend guides and one architecture explanation cover ordinary persistence, independent property restoration, immutable captures, converters and dynamic/static metadata. The reference contains 162 exact declarations across 30 types. Four baseline pages retain reviewed destinations and unchanged declaration signatures in [migration provenance](../../../reference/provenance/serialization-migration.json).

Facts were captured from engine `330aecafb5ea35864dd6bec8bd953d00bee6a28c`, tree `7b4748263dae1f6a843e251b82e8620191e47d71`. The 13-node SDK graph evaluated in 0.992 seconds and captured in 2.756 seconds. Source execution and script-projection certification remain separate.

## Review findings

The current property mode is `CollectFailures`, not the old prose's nonexistent `Compatible` enum value. Its checkpoint removes queued completion work; it cannot undo arbitrary setter/converter side effects. A later completion callback can fail after earlier callbacks ran. The rewritten tasks state these transaction limits instead of promising automatic domain rollback.

Neutral property bytes and immutable value snapshots are distinguished from in-memory property snapshots retaining a CLR Type. Capture-key guidance preserves exact identity, complete revision/context/order proof, nested converter invalidation and callback/thread borrowing. Metadata generation remains distinct from automatic DTO converter generation and dynamic reflection selection.

## Local evidence

- Canonical source projection passed for 5,628 pages and 13,914 matching bound declarations. There are 74 project entries and 178 missing entries; source API status remains Unverified.
- Six host example groups passed compilation. Five unchanged groups reuse their original matching page identities and rehashed compiler references; the corrected save-state group has its own successful report. `artifacts/serialization-example-reconciliation.json` accounts for all six without rerunning unchanged groups. No examples were executed.
- The production site built 5,628 pages in 119 seconds, including 76.62 seconds for Pagefind. This build preceded the final save-state code-order correction; exact corrected rendered output remains part of the next combined site gate, not claimed here.
- [Five independent CLI query samples](SERIALIZATION_QUERY_2026_11_11.json) all returned the property-restoration task first. Median wall time was 1,409.43 ms, including CLR startup and snapshot opening; each result was 1,241 bytes and explicitly an Excerpt. This is not an in-process or cross-machine performance claim.

The query snapshot is `b0b6b6fed9f9ec8e339904eb8ea0cb97e0080e69e726b57ed7e3960e4677ba45`. Prepared queries did not evaluate SDK projects, build the engine, prepare Native dependencies or contact the network.

## Preserved failures

The initial API capture rejected an incorrectly specified adapter path. The corrected path came from the actual project inventory. Initial indexing rejected links to not-yet-generated type pages; the previous reader snapshot remained active while generation prerequisites were made consistent.

The save-state example initially put top-level helper methods after a class declaration. Reordering fixed the C# error. One retry selected the preceding snapshot before explicit preparation finished and therefore reproduced the original error; it was not a new-source failure. The final retry waited for and selected the corrected immutable snapshot and passed. All three example reports remain separate under `artifacts/serialization-*`; no retry replaced the first failure.

No Native product build, engine behavior change, full remote matrix, Pages publication or release certification is inferred. The missing source certification, remaining migration and external automation credentials continue to block overall completion.
