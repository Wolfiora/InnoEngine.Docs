# Navigable categories and independent API elements

## Delivered behavior

Engine and Scripting have clickable directory homes and native expandable groups. Navigation derives from the canonical catalog instead of Starlight's default `src/content/docs` filesystem assumptions. Category tables explain child categories and types. Script scopes retain populated alphabetical sections.

Every selected API symbol now has its own published page and authored Markdown. Type pages contain their own declaration and description tables for immediate members and nested types. Dotted names preserve declaring chains; exact IDs distinguish overloads. Member pages retain their own XML/manual marker, declaration variants, source links, inherited example context and required type/project contracts. Website and prepared-snapshot queries consume the same model.

The sidebar shows the current section and category branch, with links to other sections and sibling categories. Full category tables remain authoritative navigation. Shared styles avoid repeating a scoped class on every navigation node. This preserves all content while avoiding a copy of the entire site navigation on every API element page.

## Migration and provenance

- Baseline: `5dc0251675b3eb3d93ba14593287cf5f909fe639`.
- Tooling: `01c5e2c0361e3697988b5f70980ca5e6ce6ec277` in the engine `ai-pipeline` branch.
- API source captures remain bound to `6eca1055adf859efd335bccb7761552ec5de9fd6`; this layout change does not claim a new engine API capture.
- All 17,971 symbol identities remain present. 15,889 member files moved from `_members` to dotted element filenames. Type URLs remain unchanged.
- All six manual explanations match their original Git blobs byte for byte, including the moved IdentityObject constructor.
- [The complete migration map](api-element-migration-2026-11-14.json) records each source blob, symbol, original path and destination.
- Incoming Markdown links and former type-page member anchors are repaired during the owned synchronization transaction. No hidden member paths remain in active content. 2,079 empty retired member directories were removed.
- Hidden-fragment query forwarding, aggregate member-body rendering and framework-directory API autogeneration are removed. Historical evidence remains historical.

## Functional evidence

| Check | Result |
| --- | --- |
| Engine documentation-tool regressions | 128 passed; nested generic types/enums, overloads, migration, manual ownership, example contexts, snapshots and contracts |
| Website Node regressions | 157 passed |
| Astro component/type check | 0 errors, 0 warnings; seven pre-existing informational hints |
| Real API synchronization reconciliation | Passed; 17,971 symbols, zero pending changes; editorial conclusion remains neutral |
| Canonical projection | Passed; 18,502 pages and 228 project guides, no missing owners |
| Final rendered HTML | Passed; exact API facts, anchors, links and Pages base path; zero errors |
| Final production build/search | 18,502 pages and Pagefind index built successfully |
| Browser journeys | 111 passed across desktop, tablet and mobile, including both themes, keyboard navigation, search, deep links, independent members and no-JavaScript ownership content |
| Published site size | 547,957,089 bytes, including search and assets |

Final snapshot: `9304d8087c3631d3847cd3212bf29cba2bb3ae2c1ed8242f55e13e60b27e7b3a`.

Key local evidence is under ignored `artifacts/`: `api-elements-editorial.json`, `api-elements-index-final.json`, `api-elements-rendered-final.json`, `api-elements-node-final.log`, `api-elements-astro-check-03.log`, `api-elements-site-final.log`, `api-elements-browser-final.log`, and `browser/api-elements-final/`. Screenshots were inspected for category tables and standalone member pages.

The initial full navigation repeated on every element produced 1,525,446,858 bytes, exceeding the [GitHub Pages 1 GB published-site limit](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). The final contextual navigation and shared styles reduced the complete site to approximately 548 MB. Rendered validation now checks this real publication limit. No API or guide was removed to reduce the artifact.

First failures are retained. Parser URL-span regression failures were resolved before actual migration. An internal framework component import was replaced with its public export. The first browser run passed 108 journeys and failed three ambiguous test locators that matched both the API Engine root and a project category named Engine; exact route selection fixed these, and the final full run passed all 111.

## Prepared-snapshot query

```text
docs symbol --engine-root <Docs-checkout> --project Inno.Core.Collections --surface source-clr --id 'P:Inno.Core.Collections.DependencyGraph`1.count' --format json
```

The real query returned one independent `dependencygraph.count-5b818c4dfec6d359.md` result and two explicit required-contract continuations. `Partial` means associated obligations remain to be read, not that sibling member bodies were silently included. No SDK graph, engine build, Native preparation or network request is part of this read. Snapshot source-API status remains `Unverified`; page indexing is not semantic engine certification.

## Delivery boundary

This delivery runs functional documentation checks, not a Native/full-engine, stress or performance matrix. Executable-example compilation evidence is reconciled by the required hosted Docs workflow; the local rendered report is explicitly `AvailableProjection`, with example evidence `NotChecked`.

The change is submitted through the existing Docs PR into persistent `draft`. It does not deploy or merge itself. A human `draft` to `main` publication remains required. The existing live site stays unchanged until that publication succeeds. GitHub Pages is still viable for this complete artifact; no alternative host or domain change is needed.
