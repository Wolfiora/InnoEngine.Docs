# Task query entry points

The final reading review used ordinary task phrases against the full 2,533-page prepared catalog. `launch editor`, `Missing references` and `plugin lifecycle` initially ranked type/member references ahead of existing user or host guides. The content now declares relevant aliases on its authoritative task/explanation pages. The ownership explanation also names resource ownership explicitly in its title. No engine API, executable example, query implementation or separate search dictionary changed.

## Actual prepared queries

Snapshot `205d3e28cb82c0c9b019a5cbdfcc8c44f865ff7142d50e996d69c3fa0d82fac3` binds engine `857bac8bacbfe39d03c048932092450abfcb8d6f`. Every query below returned the expected page first:

| Query | First page identity |
| --- | --- |
| launch editor | `getting-started.editor` |
| add editor panel | `extending.editor-panels` |
| Missing references | `manual.references.resolve-missing` |
| resource ownership | `architecture.ownership` |
| native cache | `architecture.build-artifacts` |
| plugin lifecycle | `extending.plugin-host` |

Each response remains an explicitly labeled excerpt with a stable resource identity and continuation. Reading the complete section and its linked contracts remains necessary before implementation. Source API status remains `Unverified`; navigation quality is not source certification.

The initial alias-only ownership attempt still ranked a more specialized heading first. The corrected descriptive title resolved that actual result without changing the general ranking algorithm. The before/after query outputs remain under the engine's owned `artifacts/acceptance/english-documentation/` directory as `prepared-query-task-journeys.json` and `prepared-query-task-alias-journeys.json`.

The two incremental preparations took 7,744.6157 ms (five parsed pages, 2,528 reused) and 7,699.6273 ms (one parsed page, 2,532 reused). These are distinct update observations, not a controlled performance comparison. Earlier preparation on the same machine took 28,593.5268 ms; do not hide that variance. Queries themselves did not prepare a snapshot, invoke the SDK, build an engine product, prepare Native inputs or request the network.

The final content passed 34 link/projection cases with no skips. The preceding committed candidate `a8e6d426` also passed hosted production rendering and browser journeys in Docs run 43208888752; its source-certification gate failed because authenticated source evidence was unavailable. That hosted result does not certify this later content update. Matching source import and protected publication remain external acceptance obligations.
