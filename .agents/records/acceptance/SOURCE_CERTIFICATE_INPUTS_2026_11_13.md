# Normalized source evidence

The website and protected import now consume `inno-documentation-source/2`. The engine owns production and input compatibility; the website validates certificate-local file, source-set and execution-group references before accepting example coverage. Missing references, changed platforms/reports, invalid paths and corrupt identities remain blocked even when a caller supplies a matching digest.

The [publication guide](../../../content/en/contributing/publish-documentation.md) explains shared input authority, bounded imports, explicit invalidation and one certificate per immutable query session. The schema change introduces no second documentation parser, project graph or API extractor.

## Acceptance

- All 199 Node tests passed; 23 focused example-evidence cases passed after the final malformed-context guard.
- The production site built all 3,656 pages. Canonical/rendered validation passed with no errors and retained all 252 project entries and 18,874 selected declarations.
- The writer parsed the one changed guide and reused 3,655 page payloads. Snapshot `ad8e9a5ec4ba5ce6747ed09e7b2c13f723bb4aec4b030632a56c569d852e9849` remains explicitly source-API Unverified.
- Binding the final repair to engine `a6e294ea097024f4b1fcc4b4d43a406b6868bd7f`, tree `9d0d2da1e089a3850ea64ab12c27dc0ca98f4c52`, published snapshot `0796f131bfd7339aa4ec1fc0b92f6f1031c5b4256f81455b2a403a6ead2d6578` with zero reparsed pages and 3,656 reused payloads. The original API extraction revisions are preserved; rebinding does not fabricate new source verification.
- The actual reconstructed full-run certificate verified all 134 required executable-example pages in 46.5372 ms. This is one consumer observation, not a five-sample benchmark.
- The query library read the real 6.3 MB certificate through its public API. Source input normalization preserves every original input field; the engine acceptance record owns that field-by-field comparison and the original aggregate memory failure.

The existing hosted projection at Docs `a36a3971` passed 190 Node tests, production rendering and 87 browser journeys. Its independent source gate remains blocked because no authenticated protected import exists for the exact engine input tree. Local receipt reconstruction does not bypass that gate or authorize production publication. The follow-up schema has local acceptance at this checkpoint; matching hosted acceptance remains outstanding.

No theme, navigation, engine behavior, generated binding or formal release behavior changed. GitHub App provisioning and reviewed protected workflow activation still block the live source relay and Pages promotion.
