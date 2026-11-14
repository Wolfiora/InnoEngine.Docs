# API reading and Vercel preparation

The user requested the original complete sidebar, compact type tables, explicit XML-only notices, adjacent source/edit footer links, an explanation of stable identities and a Vercel deployment path. This change restores the native Starlight sidebar and state persistence, removes the custom pruned sidebar implementation, and retains canonical category routing.

Engine tooling is pinned to `cf1e7e133d8b471eb1926e51d616acf3d49afe31`. Types now render one member table. Explicit `source: xml` generates a visible Tip above required contracts; missing-source and manual fragments do not display this notice. Configuration/target strings remain in source/reference provenance. Canonical source links are projected into the website footer immediately above the GitHub edit link. No registered API file or symbol URL changed; all six manual fragments remain untouched.

## Functional evidence

| Check | Result |
| --- | --- |
| Engine documentation tests | 131 passed; zero failures/skips |
| Docs Node tests | 163 passed |
| Final publication workflow boundary recheck | 8 passed |
| Astro check | Zero errors/warnings; eight informational hints |
| Production build and search | 18,502 pages |
| Browser journeys | 114 passed across desktop/tablet/mobile, light/dark, keyboard, source ownership and complete navigation |
| Rendered projection | Passed; all 18,502 pages, 228 projects, zero missing owners |
| Site bytes | 2,134,049,192 |

Snapshot: `98a6b84e9c8eacce9c01315d1f108c9fd8ad22466729d0a559a962f4fbfc91c5`.
Content identity: `394439a5ac743a390a9964a6c80599ea74c200f70bb4d8cdcc862b2f362392cc`.

Evidence is retained in ignored `artifacts/api-reading-*` files and `artifacts/browser/api-reading-01/`. Desktop member-table and dark mobile member screenshots were inspected. The local rendered report is `AvailableProjection`: source semantic certification and executable-example compilation are not claimed by this local run. Hosted documentation CI supplies its own required results. No Native/product/stress/performance matrix was run.

First failures remain recorded: an old test expected the intentionally removed body editing link; the publication boundary test originally assumed Pages was the sole host; the first local Astro invocation preceded completion of the CLI catalog export. Updated behavioral assertions passed, and the Astro retry ran only after the complete catalog was available. Production catalog preparation already publishes atomically.

## Publication boundary

General document validation no longer applies GitHub Pages' size quota to every host. Pages retains its 1 GB guard in its own publication transport. Vercel uses the authenticated, fully verified main artifact, a locked CLI, Build Output API configuration and split archive upload; it does not rebuild. Tests reject altered bytes and escaping/existing output directories. Transport moves its owned site rather than making another multi-GB copy.

Vercel account/project credentials, plan quota acceptance and an actual Vercel deployment remain external setup, not completed acceptance. The existing live site and repository settings were not changed. The contribution guide contains the exact setup and token/variable names. A github.io hostname cannot be reassigned to Vercel. Production remains a human draft-to-main merge; no PR is automatically merged.

Stable build/index directories were reused, test-owned temporary directories cleaned themselves, and no source checkout copies were created. Current generated site/index and first-failure evidence are retained for review. Other sessions' engine edits remain unchanged.
