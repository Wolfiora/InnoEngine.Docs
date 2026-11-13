# Runtime and scripting migration

Twelve additional project entries now explain the compiler/projection/reload boundary and runtime/adapters/Shell composition. Eighteen original pages, including API fragments and category indexes, retain explicit reviewed destinations. All 633 selected baseline declarations retain their symbol identities and signature hashes; generated reference pages preserve their source XML and shared contracts.

Task and explanation pages cover logical script imports, export manifests, SDK-bound compilation, transactional reload, runtime host composition, Session/subsystem ownership, frame suspension and product shutdown. Original rules concerning Authoring annotation erasure, reverse plugin-dependency retirement, atomic source publication, pending work, irreversible cleanup failures and collectible verification remain explicit. The old DefaultEngine introduction's implicit concrete-backend wording now agrees with the actual required injected factories.

Source capture: f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5, tree 80b17070e8921bf918abff6a99dd7afb1e1797f6. This batch reuses the successful 45-owner capture (121 SDK nodes; 1.061 seconds evaluation, 6.396 seconds capture), partitioning its facts by the reviewed owners without repeating extraction. Source/runtime certification remains Unverified.

## Local checks

- Three scripting example groups passed: the actual Runtime-script facade, a host export manifest and sample-source candidate validation. Their 29-node graph took 0.470 seconds evaluation and 1.251 seconds capture. The logical Runtime reference came from the existing generated project; no Host DLL was substituted.
- Seven runtime host example groups passed with one 77-node graph (0.878 seconds evaluation, 2.639 seconds capture). A first PowerShell argument-grouping failure is preserved separately; correcting the invocation did not change the examples or assertions.
- Canonical/source and rendered projection passed for 1,264 pages, 189/252 project entries and 6,368 bound declarations. Sixty-three project entries remain.
- The initial combined site build took 27.46 seconds including 14.05 seconds Pagefind work. A visual fix then rebuilt the site in 24.90 seconds including 13.55 seconds Pagefind work. These are individual observations, not a before/after performance claim.

Snapshot: bbdb54446cd8bb1fdab3004a71d96d3cc1d422d3b9416e03ed257639036bbc8c.
Content identity: 19e6f6624b42b7b92bc5c5ad440ed50fd855428cc23e200cae32a72309f2e177.

Evidence: artifacts/scripting-examples.json, runtime-examples.json, runtime-scripting-rendered.json and the corresponding owned logs. Later style-only changes do not invalidate unchanged compiled example content.

## Actual visual correction

Desktop inspection exposed a real readability defect: inherited overflow-wrap:anywhere split the Diagnostic heading and short INNO2001/INNO2002 identities inside tables. Table cells and their inline code now preserve words, while the table itself retains horizontal overflow containment. Normal prose and long code blocks retain their existing handling.

All 72 Edge browser cases passed in 43.0 seconds across desktop/tablet/mobile, including the new unbroken-diagnostic-identity regression, light/dark reading, keyboard search, navigation, deep links and essential content without JavaScript. Actual light desktop scripting and dark mobile runtime screenshots were inspected again; document scroll width equals viewport width and short identities remain intact.

The first standalone inspection used an obsolete assumed Astro executable location and failed before serving a page. It was corrected to use the installed package's declared bin. A subsequent simultaneous preview was correctly rejected because the browser suite already owned the repository preview; after that suite stopped, the standalone inspection passed without replacing its server. Preserve these boundaries rather than using preview --force.

Before/fixed images and inspection logs remain under artifacts/scripting-desktop*, runtime-mobile* and runtime-scripting-visual*. Browser evidence remains in artifacts/browser/results.json; preceding platform results were preserved separately.

## Prepared query observations and disk

Five actual searches for "use script api" returned the task first, each with a 4,320-byte result and explicit excerpt/Unverified provenance. The median including new CLI process startup was 903.3223 ms. Raw observations are in RUNTIME_SCRIPTING_QUERY_2026_11_11.json. The site build overlapped these observations, so they are not a controlled comparison or a claim about isolated best-case performance. No SDK, engine build, Native preparation or network work occurs in these prepared-snapshot reads.

Registered Docs retirement reclaimed 43,299,191 logical bytes and protected 31,174,047 bytes for the current snapshot. C-drive free space afterward was 40,612,212,736 bytes; do not attribute unrelated disk changes to this cleanup.

Full remaining content migration, API/source certification, legacy removal, validation refinement, cross-platform CI, paired publication and actual Pages deployment are still open. These local results do not close #75 or certify a formal release.
