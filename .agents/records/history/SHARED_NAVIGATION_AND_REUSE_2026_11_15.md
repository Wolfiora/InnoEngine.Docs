# Shared navigation and validation reuse

Historical implementation record. Hosting details are superseded by [Pages publication](../plans/PAGES_PUBLICATION_2026_11_15.md).

## Requested behavior

Replace per-page complete sidebar HTML with shared, content-addressed child lists. Ordinary categories are disclosure-only; categories with canonical home pages use a separate left plus/minus button and linked label. Keep alphabetical API navigation, reader choice persistence, animations in both directions, reduced-motion support, and no-JavaScript category-table reading paths.

## Implementation

- `scripts/shared-navigation.mjs` derives fragments from the existing navigation and catalog, with no second project or API map.
- `src/pages/navigation-data/[id].json.ts` publishes each fragment once. Content identities appear in URLs; Vercel serves immutable cache headers.
- `src/components/Sidebar.astro` renders root entries only. `src/scripts/sidebar.ts` lazily loads child lists, caches requests, retries failures, and animates disclosures. The recursive full-tree HTML component is removed.
- Starlight's internal sidebar keeps authored tutorial navigation for pagination; the large API tree is handled by the shared sidebar rather than reconstructed as framework sidebar data on every page.
- `check-projection.mjs` checks each shared fragment once. Every page still receives HTML, heading, anchor, declaration and link checks.
- CI uploads the checked website once, retained for 90 days. This artifact is both the downloadable preview and delivery output. Diagnostics retain their 30-day policy.
- `validation-reuse.mjs` selects successful draft/main push evidence only, requiring identical Git tree and matching site origin, Node version and Windows image. Receipt archives are authenticated and bounded by the existing importer. Missing evidence runs the work; invalid provenance fails. Changed environment is a cache miss. Reuse points to the original site artifact instead of copying or relabeling it. Linux portability runs on the current environment.
- Vercel remains a separate main-only Git deployment; no hosting token, alternate publisher, or automatic merge is introduced.

## Execution boundary

The user requested implementation without local acceptance runs. No local website build, browser suite, engine build, stress run or performance benchmark was executed. Existing browser and workflow assertions are updated for the new behavior; CI runs on the final PR to draft. Results must be read from that run, not inferred from these changes.

## External cleanup

Vercel storage inspection is blocked in this session: the signed-in Edge window timed out twice, and the alternate browser creation also timed out. No deployment was deleted. Current production and rollback deployments have therefore not been endangered. Storage cleanup remains pending until account access is available; no new token is requested or stored.

No large local build artifacts were produced by this change. Other sessions and their outputs are untouched.
