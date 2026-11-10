# English documentation modernization

Status: implementation in progress. This record does not certify final coverage or deployment.

## Source and ownership

The initial engine baseline is `a4e44769715c0577fb0a4c13b2d14ad998ddd8e1`. Its inventory contains 437 product Markdown pages and 249 project files. The engine owns the original inventory and source rule mapping; this repository owns English narrative content and website presentation.

The public repository was created with `main` as its default branch. Implementation is on `docs-modernization`; it must reach `main` through a reviewed PR. Neither repository may be automatically merged.

## Current implementation

- Astro/Starlight reads `content/en/` directly; no duplicate framework content tree is maintained.
- Task navigation, Markdown link projection, light/dark styling, local browser search and the GitHub Pages base path are implemented.
- Initial English tasks cover startup, projects, Console diagnostics, Console styling, identity/Missing and ownership. This is a representative slice, not complete engine coverage.
- The engine's new tooling library separates snapshot preparation from read-only queries and exposes structured requests and resource identities.
- Existing logo bytes and the separate branding license are preserved.

## Remaining completion gates

Full page migration/review, exact API reference coverage, remaining task guides, cross-repository rule authority, shared parser/validator migration, source API evidence binding, paired PR verification, cross-repository App setup, actual Pages publication, visual/accessibility matrix, Windows/macOS CI, draft-release verification and legacy removal remain required. All 58 active engine rule units are now English with the original 241 identities preserved.

Do not label preview builds as complete documentation certification. Do not delete the old engine product documentation until its reviewed destinations and callers have migrated.

## Initial failures and corrections

- TypeScript 7 did not satisfy the selected Astro checker peer range. The exact dependency was corrected to TypeScript 6.0.3; reproducible installation succeeded.
- Starlight directory index pages use the directory slug, not a trailing `/index`. Navigation was corrected after the first build identified that mismatch.
- Astro 7's Markdown processor configuration replaced deprecated top-level remark options.
- The Python skill validator could not run because the local Python command resolves to a Windows application alias. Engine rule/skill checks and explicit metadata review remain available; this is not claimed as a Python validator pass.

## Evidence boundary

The initial content build and three Markdown link tests passed. Browser inspection confirmed the homepage, hierarchical navigation and Missing search results. Broader visual acceptance and publication are still pending. The engine's independent snapshot tests retain their TRX and first failures under its owned acceptance output.

## Canonical projection and managed bootstrap

The site now consumes the engine library's catalog export for navigation, content identities, source binding and rendered anchors. The Node checker does not parse Markdown. Nine local tests cover links, stale same-length edits, file discovery, missing or duplicate rendered headings, base-path escapes, binding/manifest tampering, missing coverage and path escape.

The explicit preparation adapter successfully built only the documentation tooling and its six managed dependencies in 6.8 seconds on the development machine. Its generated host and build outputs stay beneath artifacts/tooling-bootstrap; it did not build an Editor product or Native library. This is one initial observation, not a controlled performance comparison.

The initial canonical projection validated 21 available pages. Missing project entries and Unverified source API status remained visible. The added Editor panel task is based on the actual EditorPanel, EditorPanelAttribute, reload-state, interaction and Stats implementations; its lifecycle and ownership claims do not imply an executed full product journey.

The new Documentation workflow preserves a static preview before checking full coverage. Its fixed Documentation validation aggregate rejects failed, missing, skipped or canceled prerequisites. It is not yet a successful remote CI or Pages deployment result. Full content and API evidence are intentionally required before that aggregate can pass.
