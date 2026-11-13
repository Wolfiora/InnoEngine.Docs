# Test-guide migration acceptance

Twelve existing suite pages were reviewed against their actual project declarations and assertion sources at engine `80fbbb550f0de634b04605b31abc4d96b3d526f6`. Their original hashes and destinations are in [the migration record](../../../reference/provenance/testing-migration.json). Shared execution guidance has one task page; suite entries describe their specific behavior and environment rather than repeating an executable test-selection list.

## Local evidence

- Canonical indexing and source projection passed for 5,209 pages and 50 of 252 actual project entries. All 11,904 previously bound declarations remain unchanged.
- Astro checking reported zero errors, warnings or hints. The production build generated all 5,209 pages in approximately 82 seconds; Pagefind's projection took 50.32 seconds. This is an observed build, not a five-sample comparative benchmark.
- Rendered-projection checking passed with no errors, retaining exact anchors, source identities, one H1, navigation and GitHub Pages base-path checks.
- Prepared query `validate engine change` returned `contributing.validate-change` first with reason `All query terms in heading`, snapshot `43043a659d2e3cd4b842101f14e5f7bede3a474af413dffecd4a78b74b8edcd1`. The result explicitly remained an excerpt and source status remained Unverified. No SDK, native preparation or network operation was involved in that read.
- Browser inspection confirmed the guide's desktop section navigation at 1,440 px and the Text suite's light-theme layout at 390 px. The latter exposed the native requirement in the introduction, had one H1 and document width 375 px. Theme selection is inside the mobile menu; the first desktop-only selector attempt failed and the actual menu control was used. No website behavior was changed to accommodate the inspection.

Raw source/rendered reports and build logs are retained under `artifacts/testing-*`. Suite executions were not repeated for prose migration; this record does not claim fresh engine test results.

## Semantic corrections and limitations

Text's `NativeBackendShapesAndRasterizesUnicodeText` currently uses `Hello, UI!`. Its name is not comprehensive Unicode or fallback evidence. Codec corruption rejection also does not establish arbitrary invalid-font coverage. The new entry states these limits.

`contract` is an evidence category, not proof of a managed-only dependency closure. Text and MiniAudio contracts explicitly require their player product. Input/UI domain assertions remain separate, while the SDL destroyed-window assertion continues to use the real native host and original main-thread route.

Full project coverage, other test and support-library pages, source API certification, complete migration, pipeline refinement and publication remain unfinished. No legacy engine page is removed before its consumers are migrated.
