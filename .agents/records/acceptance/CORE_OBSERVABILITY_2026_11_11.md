# Events, diagnostics and logging migration

Six baseline pages have reviewed destinations in [the provenance map](../../../reference/provenance/core-observability-migration.json): three project overviews and their API fragments. All 220 original declaration identities/signatures are preserved. The new task guides distinguish ordered events, recoverable current issues and append-only history.

## Actual source corrections

The old narrative named a nonexistent `DiagnosticManager`, prohibited a public `DiagnosticSource` constructor and described only `Log` as a Logging script export. Source inspection corrected these claims, kept actual host/script boundaries and included `LogSessionId`.

Event dispatch visits the concrete type before base types; priority sorts within each type bucket. Log sink removal changes later snapshots without joining callbacks or disposing the removed sink. Diagnostic secondary stderr reporting can propagate a writer failure. These are current-source observations, not newly executed failure reproductions.

Engine commit `c7c2e650d4607be0611e3419a95d9e13a76a2554` updates only XML comments in EventHub, LogRouter and DiagnosticHub. XML fragments parse, and removing XML-comment lines leaves the executable source exactly unchanged. No public signature or runtime behavior was modified. The declaration capture records that exact commit and tree; the website continues to mark source API certification Unverified.

## Evidence

- One SDK graph captured the three source CLR surfaces: 12 nodes, 0.351 seconds graph evaluation and 0.744 seconds capture. This was metadata extraction, not Native preparation or a product build.
- The final canonical generation parsed 51 changed pages and reused 5,210 pages, totaling 5,261. Recorded phases were setup/lock 693.7821 ms, page preparation 5,575.1638 ms (including parsing 178.8529 ms and owner registration 2,690.6131 ms), catalog validation 2,458.5837 ms, index projection 759.8017 ms, freshness validation 512.9686 ms, publication 130.61 ms and total 10,131.0099 ms. Nested phase values are not additive to their containing phase.
- Available source and rendered projection passed: 53 of 252 project entries, 12,124 bound declarations and no reported errors. Remaining 199 entries and source certification still prevent complete publication.
- All three executable groups compiled: the Events and Logging tasks used the actual Runtime script projection, and the diagnostic reporter example used host references. Their single graph used 12 nodes. Compilation is not execution of the demonstrated feature.
- Astro checking reported no errors, warnings or hints. The production build generated 5,261 pages in approximately 84 seconds; Pagefind took 53.41 seconds. These are single observations, not comparative warm benchmark claims.
- Prepared query `report resolve current issues` selected the correct task first in snapshot `d972fe178fcceb2a988b63e4c36680f9210fba8455a03c088e0a3eb8a1edb899`. Its result remained explicitly an excerpt, with Unverified source status. It did not prepare or compile the engine.

Raw reports and logs remain under `artifacts/observability-*`. The first generation attempt rejected a missing bound project/surface association before writing reference pages; the actual extracted relationships were then added to the inventory and its canonical hash updated. Existing presentation components were unchanged; the wider visual matrix remains an overall completion gate.

## Remaining scope

This is one reviewed content family, not complete migration or pipeline certification. Full source/API evidence, remaining Manual/projects, cross-repository automation, final legacy removal, Pages publication and release acceptance remain open. The in-progress engine PR run is not promoted to success by these documentation checks.
