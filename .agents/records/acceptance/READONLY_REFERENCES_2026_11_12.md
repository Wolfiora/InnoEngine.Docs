# Read-only reference inspection and private product surfaces

This candidate binds engine `7e12d767c39771d8746f3e23ba6190bd2c82eb72`, source tree `d2336c9dabddb6a13e331aee2dc0affcc93e8f72`. The engine includes the requested master/logo merge. The source revision is a candidate, not a complete source certification.

## Captured facts

Actual SDK-selected Debug source for Browser Player (`browser-wasm`) and macOS Player (`macos-arm64`) contains no authored public or protected surface. Their captures are now recorded in the existing inventory and API binding. Their shared Player usage remains documented. No native compilation or product execution was performed to obtain these empty surfaces. macOS Editor has a public composition API and still requires its actual resolved references and capture; it is not covered by the empty-surface case.

Engine reference resolution now explicitly uses design-time inspection when resolving an already selected source graph. The real Windows failure entered Task publisher compilation with project builds disabled; missing bootstrap reference assemblies then failed source inspection. The correction preserves actual evaluated inputs and required metadata for every nonempty source surface. Source syntax errors, missing files, conditional public declarations and generated inputs remain failures or required full captures.

The engine's separate Console regression proves a private color change selects Editor presentation contracts without selecting the unrelated Build integration suite. It removes an unused product reference rather than filtering tests or weakening assertions.

## Local acceptance

- Both new facts were captured from the exact engine candidate with their target-specific SDK Compile inputs. Source files and reference manifests retain explicit identities.
- Canonical publication: 2,531 pages; five parsed and 2,526 reused. One observed writer run took 31,599.1738 ms, including owner registration and lock activity. This is not a prepared-read benchmark or a five-sample performance claim.
- Astro checking and production build passed. Canonical/rendered projection reported zero errors.
- Logs: `artifacts/readonly-reference-catalog.log`, `readonly-reference-check.log`, `readonly-reference-build.log`, and `readonly-reference-projection.json`.
- Engine regression evidence and the retained first hosted failure are in `CI_43067538817.md`: all fourteen documentation-selection cases, nineteen source-reference/example cases, all seven selected source-surface cases across corrected fixtures, and the real Console selection case passed.

The complete documentation gate remains blocked by the macOS Editor source capture and a matching complete source certificate. The restricted cross-repository GitHub App is not provisioned at repository level; organization credentials could not be inspected. Pages is configured but no production deployment is claimed. Historical browser acceptance remains bound to its original candidate.
