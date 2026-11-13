# MiniAudio, Animation and Text migration checkpoint

## Reviewed scope

This batch maps 43 original pages: 27 MiniAudio, five Animation and eleven Text pages. The three migration inventories in `reference/provenance/` retain their original hashes, destination pages and declaration comparisons. Thirteen project entries preserve all 3,674 original declaration identities and signature hashes. Product runtime code and public signatures were not changed.

MiniAudio separates the neutral audio service, native adapter, raw ABI and toolchain. It retains device ownership, content leases, decoding preparation, callback and cleanup restrictions. Hardwareless native processing is not described as the neutral Muted backend or evidence that physical audio hardware passed. The original upstream license bytes are preserved. Its 3,034 generated declarations without individual XML still need the stated shared ABI contract; coverage is not complete member-specific semantic certification.

Animation covers explicit runtime targets, sampling-only targets, frozen playback data, binding providers, clocks, layered contributions and markers. Current cleanup collects provider disposal failures after clearing its snapshot; deferred retry is not promised. A marker at time zero is not described as an automatic start/wrap event. The Runtime script example compiled against the actual prepared projection.

Text covers imported font artifacts, runtime face ownership, backend registration, FreeType/HarfBuzz integration and the native build boundary. It explicitly distinguishes header validation from complete font validation, UTF-8 clusters from UTF-16 indices, glyph output from rendering, and requested weight/slant from implemented face selection. Engine commit `4a9edbac3553302acd80228d4aa855bef5825045` corrects source XML that incorrectly described glyph offsets as scrolling. A direct comparison excluding XML comment lines confirmed unchanged executable source. The actual SDK extraction captured seven projects and 239 declarations without Native preparation.

## Local evidence

- The final catalog contains 5,195 pages and 38 project entries out of 252 actual projects. All 11,904 bound declarations and rendered anchors passed. There are still 214 missing project entries; this is not complete migration.
- `npm run check` reported zero errors, warnings or hints. The final production build took approximately 82 seconds, including 51.64 seconds of Pagefind indexing.
- Ten reference-writer tests passed after the normalization changes. The additional focused Astro rendering assertion passed and verifies that a literal pipe remains inside its table cell. Ambiguous column counts fail before replacing existing generated output.
- The Text Runtime-script example passed after final formatting. Its single SDK graph evaluation covered 20 nodes (0.554 seconds evaluation; 0.954 seconds capture). The earlier valid MiniAudio Host and Animation Runtime-script examples were retained rather than rerun for unrelated formatting or record edits.
- Prepared Audio task search returned the correct task first in every sample. Five warm CLI processes had a 1,022.4814 ms median and 4,088-byte five-excerpt responses. The first process was recorded separately. `AUDIO_QUERY_2026_11_11.json` identifies the exact snapshot and raw samples; this is not a cold-cache measurement or a comparison against a different corpus.
- The index writer's final formatting refresh parsed one page and reused 5,194, taking 9.933 seconds. Owner-registration IO remains distinct from Markdown parsing; this is one observation, not a five-sample indexing certificate.
- Browser review confirmed the corrected OpenSL table row, a light-mode Text task at 390 × 844 and a dark-mode Animation task at 1440 × 1000. Each inspected task had one H1, visible prerequisites/constraints, working navigation and no document overflow. This does not replace the full accessibility and device matrix.

## First failures and corrections

The first rendered batch failed four native anchors. Unseparated upstream Setext headings and framed ASCII tables became excessively long headings in the canonical parser and produced different website anchors. They also displaced a real Audio task in search results. The generator now normalizes those explicit comment conventions while preserving fenced code and original constraints. Search weights were not changed to conceal the content defect.

Browser review then found the literal name `OpenSL|ES` splitting a table column and hiding its Android information. The converter now escapes an unspaced interior pipe when needed to preserve the framed table's declared column count, and rejects unresolved ambiguity. A focused test initially retained its old expected row after the fixture changed; the assertion was corrected to require the literal name and both complete cells. Syntax-error and assertion-failure logs remain alongside the passing retries.

The first Text catalog attempt correctly rejected links to not-yet-generated type indexes. Authoritative project contracts were prepared before generation, the reference writer created their indexes, and the incoming links were then restored and validated. No placeholder reference pages or failed green catalogs were introduced.

## Evidence locations and remaining gates

Engine captures and logs remain under `artifacts/acceptance/english-documentation/`. Docs evidence includes `miniaudio-animation-rendered-projection.json` (initial failure), `audio-query-first-failure.json`, `native-comment-format-tests.log`, `native-table-pipe-tests.log`, the corrected writer/rendering logs, `text-final-example-results.json`, `text-site-check.log`, `text-final-site-build.log` and `text-final-rendered-projection.json`.

Source API status remains Unverified. Full content migration, example and semantic coverage, legacy removal, paired PR certification, GitHub App credentials, actual Pages publication, Windows/macOS matrices and draft-release verification remain open. Existing engine issues are not closed by this documentation checkpoint.
