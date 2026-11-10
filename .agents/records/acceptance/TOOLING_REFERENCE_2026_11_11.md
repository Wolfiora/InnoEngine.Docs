# Build and query tooling checkpoint

The documentation candidate is bound to engine commit `417557eb7687c7b488b67e0131430e9675feb496`. Source API status remains **Unverified**.

## Source and content

One existing SDK extraction captured 14 selected CLR project surfaces through 129 evaluated nodes (1.071 seconds evaluation, 4.211 seconds capture). The 252-project inventory was refreshed through the existing engine exporter. Previously bound Identity, Editor and Native declarations, XML and source locations matched exactly; the comparison is in `reference/provenance/source-rebinding-417557eb.json`.

The four tooling owners contribute 179 declarations. New English project pages explain CLI preparation, the standard distribution and architecture validation. Documentation tooling now has exact structured type/member pages. The managed script task uses the production command already exercised at the Editor checkpoint. Three baseline project pages have explicit dispositions in `reference/provenance/tooling-migration.json`; all their original symbol identities remain represented. Added tooling methods do not change product APIs.

## Executed checks

- The generated site adapter built through its managed dependency closure in 7.22 seconds with zero warnings/errors. It now uses an ignored explicit SDK project so the four-worker maximum and disabled build servers are actual supported MSBuild options.
- The first bootstrap attempt is retained in `artifacts/tooling-catalog-bootstrap.log`: the SDK file-app CLI rejected `-m` and `-nodeReuse`. The corrected attempt is `tooling-catalog-bootstrap-02.log`. This is a diagnosed correction, not a blind retry.
- Source projection passed for 3,527 pages, 252 inventoried projects and 7,486 bound declarations.
- Astro checking reported zero errors, warnings and hints. Production build completed in 52.76 seconds, including 33.36 seconds of Pagefind work.
- Rendered projection passed: canonical anchors, exact declarations and Pages base paths matched. Raw reports are `artifacts/tooling-source-projection.json` and `artifacts/tooling-rendered-projection.json`.

Refreshing generated source links to the new engine revision changed 3,473 page payloads. Their index publication took 65.329 seconds, of which 41.513 seconds was new owner registration. This is not a warm unchanged-content sample. The earlier small update reused 3,498 pages and indexed three new pages in 7.829 seconds. Ordinary prepared-snapshot reads do neither operation.

## Scope limits

Only 14 of the 252 project entries are currently present. Generated page count is not a migration completion denominator. Full English coverage, external validator cutover, legacy query removal, API certification, paired CI, platform execution and publication remain open. The old Architecture query entry is still captured as an existing API, not declared removed. No website deployment or source execution certificate is claimed by these checks.

## Captured API provenance

API manifests now require their own exact captured revision and source tree. The reference writer uses that capture for source links instead of the documentation candidate's moving revision. A candidate-only rebind with unchanged facts preserves page bytes and modification times. Source behavior compatibility still requires separate certification; the capture is not automatically trusted as current execution evidence.

Nineteen writer/projection tests passed, including candidate rebinding, immutable source links, missing provenance, changed declarations and protected authored edits. The existing 3,527-page rendered output passed the updated projection checks without rebuilding the site. The explicit index confirmation parsed zero pages, retained the current generation without rewriting its manifest, and took 27.393 seconds (21.572 seconds confirming owner registrations). This remains an observed IO cost, not prepared-query latency or proof of a stable warm upper bound.
