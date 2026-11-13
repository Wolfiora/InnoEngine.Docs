# Engine-only documentation scope

The user explicitly excluded backend-native and generated binding API documentation on 2026-11-11. This report records that scope change; it does not certify the remaining engine migration, source API execution or deployment.

## Changes and preserved boundaries

- The bound project inventory identifies eight backend-native implementation projects. Their project overviews explain engine integration; raw native type/member reference and raw-binding examples are outside scope. Managed adapters, script-projected engine APIs, engine tooling and test-infrastructure obligations remain.
- Removed 4,327 owned generated Markdown pages and their five active ownership manifests. [The retirement inventory](NATIVE_REFERENCE_RETIREMENT_2026_11_11.json) preserves each original path/hash and ownership record against Docs commit `93b50c16480bb15249a90afeaef94778bf4d1684`. Historical evidence and legal notices were not rewritten.
- Filtered native declarations from the active derived API facts, removed the now-empty SDL fact payload and retired its unused imported-link map. Remaining managed references retain exact source identities. Native correctness tests, deployment validation and engine source were not reduced.
- Generation rejects backend-native projects. Coverage rejects bound native declarations and invalid attempts to exempt engine source or tests. Removed the obsolete `SharedAbi` generation escape; missing explicit engine XML still fails.
- Updated five existing native project overviews, navigation, incoming links, query instructions and active rules. Three other native project overviews still require review as part of the remaining migration; excluded native members are not missing documentation work.

## Actual local verification

The 34 generator, source-projection and Markdown-link regressions passed with no skips. Tests include native scope exclusion, prohibited engine/test exemptions, explicit native input rejection and preservation of missing-engine-contract failures.

Canonical indexing and both source and rendered-HTML projection checks passed for snapshot `bc932f18bde9629b53384891771d752bc680858502bcb7bb9fda876c320fac36`, content identity `eb65048b4d17966ca7110d0cfd367906905dc2c747bf915ccbd819c38eca43d0`. The site contains **812 pages, 81 project entries and 4,524 bound engine declarations**. All 4,524 have matching reference markers/signatures. This is available-content coverage, not semantic certification or complete project coverage: **171 of 252 project entries remain missing**, and source API status remains `Unverified`.

The first index attempt detected an old MiniAudio section link. Its first failure remains in `artifacts/engine-only-docs-index.log`; the corrected link targets the retained integration contract. Corrected indexing and rendered projection passed. Artifacts use the stable existing workspace/cache locations.

## Measurements and limits

- First successful scope-reduction index: 3,639.7366 ms, 812 pages, seven parsed and 805 reused. This is one incremental publication measurement, not a cold index or five-run benchmark.
- Production site build: 28.19 seconds; route generation 6.03 seconds, Pagefind 12.54 seconds. The preceding 5,139-page build took approximately 150 seconds with Pagefind 82.32 seconds. These single observations have different approved content populations and possible background activity; they are not a controlled implementation speedup claim.
- [Five warm exact-symbol queries](ENGINE_ONLY_QUERY_2026_11_11.json): median **591.1751 ms**, including separate CLI process startup and immutable snapshot verification. Each returned the same 1,535-byte engine result and two necessary contract continuations as before native reference retirement. No engine/native build, SDK evaluation or network request occurred during the queries.
- The earlier lazy-search comparison and its explicit [median correction](QUERY_MEDIAN_CORRECTION_2026_11_11.json) remain distinct evidence. Neither dataset is rewritten to imply current certification.

The engine source and tooling candidate is `5e5ed64c981a51f1568004415ad80c44f32da9c0`. Tooling XML facts were refreshed at that exact candidate; other unchanged engine facts preserve their individual captures. Complete engine content migration, legacy verifier cutover, visual/accessibility acceptance, Windows/macOS certification, paired publication and live Pages deployment remain unfinished.
