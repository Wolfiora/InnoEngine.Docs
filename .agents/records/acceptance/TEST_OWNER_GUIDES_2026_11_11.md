# Behavior-oriented test-owner documentation

All 67 test projects in the actual bound inventory now have one English project entry. This continuation adds 42 entries after the thirteen Core guides, preserving the earlier twelve service/backend guides. The site has 144 of 252 project entries and 1,015 Markdown pages. The remaining 108 owners include production projects and fourteen support/fixture libraries; their API requirements are not waived.

## Content review

The guides distinguish domain behavior, public contracts, integration, native deployment, device journeys and performance. Shared execution and maintenance instructions remain in one guide. Project names support secondary navigation; readers can choose a behavior first.

The Core, content and Editor/runtime migrations preserve 368 named scenario examples across 111 source files and verify their presence in the pinned source. Additional narrative guides preserve SDK/native prerequisites, platform-specific cases, process isolation, ownership, cancellation, rollback and measurement limitations. Detailed method indexes that duplicated source are replaced by reviewed behavior descriptions and immutable source links; this does not delete or modify assertions.

The source review preserves actual Windows/macOS distinctions, the RmlUi Player deployment, Editor presentation's non-reusable evidence, the Jobs single-processor timing limitation, caller ownership of performance input roots, and native compilation versus physical GPU evidence. Backend tests remain documented as engine integration responsibilities; no excluded third-party binding member reference was recreated.

Provenance lives in core-tests-migration.json, content-tests-migration.json, tooling-tests-migration.json, integration-tests-migration.json and editor-runtime-tests-migration.json. The original inventory recorded checkout bytes. The ImGui guide's first migration guard found a CRLF checkout hash differing from its unchanged Git blob. The original hash is preserved and the mapping records the Git blob hash plus the verified newline-only relationship; it does not replace the original identity to hide a mismatch.

## Local checks

- Canonical source and rendered projection passed: all 67 test owners present, all 5,480 currently bound engine declarations preserved, zero errors. Source API status remains Unverified.
- Static build completed in 21.10 seconds, including 10.70 seconds Pagefind indexing. This is one observation, not a controlled performance comparison.
- Twelve new browser cases passed on local Edge: two long test guides in light/dark mode at desktop, tablet and mobile widths. They verify a single English H1, visible content/search and no document-level horizontal overflow. This is local Edge evidence, not the CI Chromium matrix.
- No engine/native tests were rerun for this prose-only migration. The new pages describe scenarios; they do not certify those scenarios for the current checkout.

Snapshot: 4e9207331a41eafb8b66a52c8745db1db80093d65a2fbb062cf94b2282314a55.
Content identity: 503eac844c51443a7b380fff1b3edc58f824c4dfbab7ba9d45ef0f3cb42ee25a.
Reviewed engine source: ec506471b863c3b6e131d13ba78ff3ce9d31e15e.

Evidence is retained in artifacts/test-guides-final-index.log, test-guides-final-site.log, test-guides-final-rendered.json, test-guides-browser.log and browser/results.json. Earlier asset browser results were preserved before the browser output directory was reused. Obsolete published query generations were retired through the registry, reclaiming 19,070,147 logical bytes while retaining the current snapshot.

Full production documentation migration, source certification, external validator cutover, complete CI, pairing and actual Pages deployment remain incomplete. Test-owner documentation coverage is not overall completion.
