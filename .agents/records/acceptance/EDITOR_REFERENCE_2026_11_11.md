# Editor documentation checkpoint

This checkpoint covers the Editor Core, Interactions, Diagnostics, Annotations, Settings, Logging and Stats documentation. It is not full engine migration or source certification.

## Content and provenance

The ten baseline files in `reference/provenance/editor-migration.json` were reviewed against their new task, explanation and reference destinations. All 895 selected API identities and signature hashes are preserved. Core, Interactions and Settings inclusion pages are part of this accounting. Logging and Stats have no selected public CLR declarations; their implementation and use are explained without inventing a public API.

The site now renders 3,498 pages and 7,307 bound symbols. Most pages are API projections. Eleven project entries cover only part of the pinned 251-project inventory; the engine subsequently added a separate CLI test owner, so the next source binding must refresh that inventory.

## Executed checks

- Astro checking: zero errors, warnings or hints.
- Production build: 3,498 pages in 56.24 seconds, including 35.73 seconds for Pagefind.
- Canonical-to-rendered projection: passed for page identities, anchors and declarations.
- Canonical examples: all 11 groups passed, comprising 12 C# blocks. The first run retained a missing script-reference prerequisite and a missing ImGui reference in the panel example. After declaring the actual presentation dependency and preparing the real script projection, both passed.
- Script preparation used the managed authoring command and also compiled the documented `Mover` behavior. It did not prepare a Native product. The example validator evaluated 60 SDK nodes once and finished in 8.38 seconds.

Example snapshot: `44112344adfca2d6ccbb818b08787d528f427c219750c6d0132334218f8c5977`. Content identity: `b0587e910c434a80e845d2625eec04f978d3ef93afc0f9819ffd852a98d84dfa`. Source API status remains **Unverified**: compiling examples against prepared references is not a certificate for all current source behavior.

Local raw evidence remains under `artifacts/`: `editor-example-results-02.json`, `editor-example-validation-02.log`, `editor-site-check.log`, `editor-site-build.log`, `editor-source-projection.json` and `editor-rendered-projection.json`. First-failure evidence is retained separately.

## Visual review

The production preview was inspected through the browser at the Pages base path. The Panel task was readable at 1440×1000 in dark mode and 390×844 in light mode. Mobile navigation opened and followed the actual Editor Core project, type index and EditorPanel links. At 768×1024, the API member table and `OnDetach` anchor worked; signatures scrolled within their code blocks while ownership and retirement constraints stayed visible. Document scroll width did not exceed viewport width in these observations. Temporary viewport overrides were reset.

This is a representative review, not a complete accessibility audit of every page.

## Remaining obligations

Full content migration, remaining project/API coverage, source certification, precise validation obligations, external-documentation cutover, paired PR checks, real Windows/macOS CI and Pages publication remain unfinished. Cross-repository GitHub App credentials are still an external setup blocker. The old engine documentation tree has not been removed prematurely.

Index measurements are recorded separately in `INDEX_PUBLICATION_2026_11_11.json`. The improved warm median is not a guaranteed upper bound: a later index confirmation took 83.106 seconds, mostly in page preparation, and remains an unresolved IO-variability observation.
