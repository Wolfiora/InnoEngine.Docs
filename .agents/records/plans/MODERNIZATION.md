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

Full page migration/review, exact API reference coverage, remaining task guides, all active rule translations, shared parser/validator migration, engine/Docs reference binding, paired PR verification, cross-repository App setup, actual Pages publication, visual/accessibility matrix, Windows/macOS CI, draft-release verification and legacy removal remain required.

Do not label preview builds as complete documentation certification. Do not delete the old engine product documentation until its reviewed destinations and callers have migrated.

## Initial failures and corrections

- TypeScript 7 did not satisfy the selected Astro checker peer range. The exact dependency was corrected to TypeScript 6.0.3; reproducible installation succeeded.
- Starlight directory index pages use the directory slug, not a trailing `/index`. Navigation was corrected after the first build identified that mismatch.
- Astro 7's Markdown processor configuration replaced deprecated top-level remark options.
- The Python skill validator could not run because the local Python command resolves to a Windows application alias. Engine rule/skill checks and explicit metadata review remain available; this is not claimed as a Python validator pass.

## Evidence boundary

The initial content build and three Markdown link tests passed. Browser inspection confirmed the homepage, hierarchical navigation and Missing search results. Broader visual acceptance and publication are still pending. The engine's independent snapshot tests retain their TRX and first failures under its owned acceptance output.
