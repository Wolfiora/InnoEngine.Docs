# Canonical documentation cutover

The Docs candidate binds engine commit `ce462dee9fc831228cd5bc0560f7f5b82be0afb0`, tree `6962529408ff117f116cd9bc31b825e5bc6ed680`. That commit removes the engine product documentation tree and superseded Architecture Wiki/query implementations. The unrelated Editor Assets working-tree edit is excluded from the commit and this binding.

The selected source API facts now expose the three surviving Architecture tool entry types and eight declarations. The retired Architecture `DocumentationCommand` page was removed through its existing ownership manifest; the independent Documentation library remains the query authority. Existing authored explanations remain intact.

## Evidence

| Check | Result |
| --- | --- |
| Projection regressions | 29 passed. Consumer-project/obsolete-entry negatives remain enforced; ordinary English “InnoEngine Editor” is accepted. |
| Migration regressions | 12 passed, including a retained old engine source path. |
| Actual migration audit | 454 original files accounted for: 364 reviewed destinations, 73 approved native/generated reference retirements, 17 byte-identical historical images. Retired original paths are absent. |
| Astro check | Zero errors/warnings; five existing hints. |
| Production build | 2,529 pages, approximately 63 seconds; Pagefind approximately 31.93 seconds. |
| Rendered canonical projection | Passed, no errors. Source API status remains Unverified. |

Raw diagnostics: `artifacts/cutover-*`, `migration-cutover.json`, `migration-cutover-tests.log` and `legacy-content-boundary-recheck.log`. Initial false-positive projection and script-reference fixture failures remain retained in their original evidence locations.

The prepared snapshot is `2943697dfda1d2ccc5ffe672f1658121d49bb3e5c66156f952343adc249a1ed6`, with content identity `95dcd495600bcd62950b169bd2e0678f4ab85a99233d06774774d79b5ae51370`. A deliberate parser schema update reparsed 2,530 then-current pages in 37.38 seconds. After the API update, preparation parsed four pages and reused 2,525 in 11.11 seconds. These are individual preparation observations, not five-sample query benchmarks; prepared reads do not repeat this work.

This is local authoring evidence. The strict clean-checkout bootstrap, trusted source certificates, three unavailable platform captures, live hosted CI, paired promotion and actual Pages deployment remain separate unfinished obligations. No publication or complete source verification is claimed.
