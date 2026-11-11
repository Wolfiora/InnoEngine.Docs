# Module, type and reload documentation

Four project entries and six task/explanation pages cover source composition, explicit static facts, stable type lookup, owned registries, generation publication and reload troubleshooting. Seven baseline pages preserve every declaration marker in [migration provenance](../../../reference/provenance/extensibility-migration.json): 268 declarations across 38 types, with no missing or changed signatures.

The capture uses engine `7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae`, tree `cf05b6ef5766e5d8e51c486b687e3cfb6068a0c0`. Its nine-node SDK graph evaluated in 0.362 seconds and captured in 0.795 seconds. Two source XML summaries now describe ModuleHost's explicitly selected source instead of promising dynamic load-context discovery or shadow copies; implementation and API signatures are unchanged.

## Preserved behavior boundaries

The tasks distinguish stable TypeRef identity from live CLR references and runtime lookup hints. They preserve strong snapshot consistency and require timely release rather than suggesting weak type caches as an unload workaround. Synchronous operation protection is distinct from strict asynchronous Build/Export reading protection.

Registry construction tracks candidate ownership before validation can fail. Reversible activation and cleanup-only completion remain separate, as do ordinary aggregate errors and nested pending-retirement signals. A terminal failure retains its transaction/dependencies and requires host replacement. Resource-retirement deadlines are explicitly unrelated to normal compilation duration.

Static catalog facts distinguish compile-time generic rejection from an unlinked valid construction. Declaration registration, linked factories, source preparation and generation publication retain their separate owners.

## Local evidence

- Canonical source projection passed for 5,680 pages and 14,182 bound declarations, with no projection errors. There are 78 project entries and 174 missing entries; full migration and API source certification remain incomplete.
- All four host example groups passed compilation. The three unchanged groups reuse their matching page identities and rehashed reference bytes. The corrected type-discovery group passed separately; reconciliation is retained in `artifacts/extensibility-example-reconciliation.json`. No runtime/unload execution is claimed.
- The site build produced 5,680 pages in 131 seconds, including 78.46 seconds for Pagefind. It includes the corrected serialization example from the preceding batch. It precedes the final type-discovery example-class correction, so exact final rendered acceptance remains in the next combined site gate.

The first type-discovery example report failed because two separate code blocks introduced top-level statements into one compilation. Both helpers now have explicit example classes. The original failure and successful corrected report remain separate. Subsequent batches wait for example success before the full site build to avoid repeating an expensive projection after a small C# example correction.

No Native preparation, full Windows/macOS matrix, cross-repository publication, actual Pages deployment or release certification is inferred. Captured source facts remain independently pinned when the current candidate moves.
