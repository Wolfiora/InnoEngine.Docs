# Native preflight guidance and migration audit — 2026-11-11

The validation guide and exact API XML now document exit code 2 for blocked input preparation, explicit local source preparation and hosted replanning. The Docs binding selects engine `8beee5a6d6c7d2d4c8459c6e624a558570450fe1`, tree `ef3f569ebdee283570ae0453d747cdaafcd10db5`. The unchanged Build and Editor entry facts were compared before updating the Validation XML capture; their source facts remained identical.

Local evidence in `artifacts/native-preflight-*`:

- Snapshot `ac384eb0ec877fa81e13eb76c70951da39484fdb526738507935bdbbc6662521`: 2,530 pages, one parsed and 2,529 reused in the final refresh. The measured refresh took 5.955 seconds; it is a single observation, not a five-sample benchmark.
- Website checks: zero errors/warnings and five existing hints. Static generation: approximately 64 seconds, including 34.49 seconds for Pagefind.
- Available source/rendered projection: Passed for 2,530 pages and all 252 project entries. Source API status remains Unverified. Unchanged presentation components did not justify repeating the full browser matrix.
- Registered cache retirement: 44,181,643 logical bytes reclaimed, 74,559,803 protected, zero skipped. Stable current caches and first failures remain.

The first API-generation shell wrapper incorrectly treated an unset native-process exit variable as failure after the PowerShell generator had succeeded. Its log contains the successful generation result; the generated XML reference and final projection were checked. The generator was not repeatedly rerun to obtain a green result.

## Migration audit

`scripts/check-migration.mjs --engine-root <checkout>` reads the existing engine baseline register. It verifies exact original Git bytes, complete origin coverage, current English destinations, reviewed source mappings, native-scope retirements and historical evidence preservation. It reads source history in one batch; it does not parse Markdown again, invoke SDKs or contact the network.

`migration-disposition.json` accounts for 454 originals: 364 reviewed destinations, 73 approved native-reference retirements and 17 archived payloads. Eleven cases in `migration-contracts-bound-scope.log` pass, including malformed/cyclic review mappings and altered project-scope input. Earlier ten-case results are overlapping evidence, not eleven additional cases. The earlier failed disposition report is retained. Nine Input/Storage destination fields were corrected from space-joined strings to explicit arrays.

The engine register now distinguishes its original recorded checkout hashes from exact Git baseline identities. This audit requires that updated register; it is a migration acceptance operation, not a recurring website-build prerequisite or an implicit documentation-query scan. The engine's `DOCUMENTATION_DISPOSITIONS_2026_11_11.md` records the provenance corrections and existing screenshot archive.

Physical legacy removal, source certificates, three platform captures, compatibility carry-forward, real Windows/macOS execution, App provisioning, Pages and draft-release evidence remain outstanding. No full publication or migration completion is claimed.
