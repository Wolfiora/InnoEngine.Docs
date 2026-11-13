# Settings and host IO migration

Four baseline pages have reviewed destinations in [Settings provenance](../../../reference/provenance/settings-migration.json) and [IO provenance](../../../reference/provenance/core-io-migration.json). The 157 Settings and 90 IO declaration identities/signatures are unchanged. The old IO overview also repeated 27 of the fragment's markers; they map to the same new reference, not a second authority.

## Content and source review

Four task guides explain settings lookup, contribution composition, host document persistence and temporary process output. Two authoritative project entries associate the tasks with 37 generated type pages and their indexes. The review read the actual settings lookup, registry/composer, byte stores, publication, lease, path, process-claim and stream-retirement implementations.

Engine `5ecbbcffbd10358c754edf398408a14d4059870c` changes only Settings XML. The standard lookup's exceptions, disposed-store scope failure and rollback revision behavior now match implementation. Removing XML lines leaves executable text unchanged, and XML fragments parse. No product behavior or public signature changed.

The documentation distinguishes generation rollback from authoring document restoration, which can itself fail on storage errors. It also distinguishes post-commit directory cleanup from installation failure. ProcessOwnedDirectory retirement failure leaves a claim for later maintenance; repeated disposal of the same instance does not retry after its lease has been released. These are source-reviewed contracts, not new runtime failure reproductions.

## Local evidence

- Source CLR extraction selected the actual Settings graph (13 nodes; final capture 0.355 seconds evaluation and 0.643 seconds capture) and IO graph (4 nodes; 0.282 and 0.499 seconds). No Native preparation was requested.
- All three example groups compiled. Settings used the existing actual Runtime script projection; IO used the SDK-resolved host project references. This verifies compilation, not execution or complete source API certification.
- Final snapshot `63adcc5ad0e23c42ef257ccdeba7d4da8aa71ca2d55973cfecfa35934416015a` contains 5,306 pages, 55 of 252 project entries and 12,371 bound declarations. Available source and rendered projections passed. The remaining 197 project entries and source certification still block full publication.
- Final incremental indexing parsed 17 pages and reused 5,289. Total was 9,857.4521 ms: setup/lock 675.2469, page preparation 5,293.4532 (nested parsing 133.9348 and registration 2,503.6396), catalog validation 2,441.7117, index projection 841.9067, freshness 461.3065 and publication 143.7327. These are individual observations, not before/after benchmark claims.
- The first Settings index attempt rejected missing explicit example-project metadata. The original failure log remains at `artifacts/settings-index-initial.log`; the corrected attempt retained the existing published generation and passed. No duplicate process was launched to race the failed writer.
- [Five warm CLI samples](SETTINGS_QUERY_2026_11_11.json) include a fresh CLR process and snapshot opening each time. Median was 1,475.3302 ms. Every result selected the Settings task first, returned one explicit excerpt, and retained Unverified source status. This is not an in-process MCP query latency measurement.
- Astro checking reported zero errors, warnings and hints. One combined production build generated 5,306 pages in approximately 84 seconds; Pagefind took 52.21 seconds. Source and rendered anchor/API projection checks passed after that build.
- Browser review at the available 883-pixel viewport showed the process-output task's title, introductory contract, navigation and code block in the light theme without ordinary page overflow (document width 868). The wider desktop/tablet/mobile and dark-theme matrix remains an overall gate.

## CI SDK selection

The previous real Docs runner selected SDK 10.0.404 from a latest-patch declaration while local validation used 10.0.402. The Docs workflow now calls the exact SDK composite action from its already pinned engine tooling checkout. That action installs the declared version into an isolated directory and verifies the selected version. YAML and the pinned action source were inspected locally; a real run of this workflow change remains pending.

## Boundaries

Raw logs and reports remain under the owned `artifacts/settings-*`, `artifacts/core-io-*` and `artifacts/settings-io-*` paths. Existing query publication and presentation components were reused. This batch does not complete the full migration, engine CI, cross-repository App setup, source certification, Pages deployment or release acceptance.
