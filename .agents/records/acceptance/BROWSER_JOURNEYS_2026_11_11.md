# Responsive reading and browser CI

The previously declared `test:browser` command now has a real Playwright configuration and user-journey suite. CI installs the browser selected by the pinned Playwright package and runs these checks before the final completeness gate. The fixed Documentation validation aggregate still requires the complete projection job. Browser failures retain JSON, screenshots and traces for 30 days; automatic retries are disabled.

## Scope and environment

Local acceptance used Windows, Node 24.21.0, Playwright 1.65.0 and installed Microsoft Edge 157.0.4341.42 through the explicit `INNO_DOCS_BROWSER_CHANNEL=msedge` setting. No browser download or engine/Native preparation was needed. These results do not certify CI's Chromium runtime or macOS.

The tests consume the existing 858-page static output for snapshot af30d5c577fe1816f94597b97290111192f588773a65c830763ba833487f2263. Viewports are desktop 1440×1000, tablet 900×1100 and mobile 390×844.

- Home, prefab task, Editor panel tutorial and GameObject reference: one English H1, usable search, correct light/dark theme and no document-level horizontal overflow.
- Keyboard opening of search, a prefab result leading to its Manual task, explicit empty results, Escape dismissal and restored focus.
- Keyboard skip link and the API-to-ownership-contract deep link under the GitHub Pages base path.
- Ownership text and reference links with JavaScript disabled.
- Visible navigation targets, actual theme selection and task navigation at each viewport.
- Six representative home/light and API/dark screenshots reviewed across the three viewports. Content and necessary ownership links remain readable. This is representative review, not exhaustive accessibility, every-signature or every-page certification.

## First failures and bounded corrections

The first invocation could not start because this task's earlier Astro preview was still running. It was stopped through its own execution session; no unrelated preview process was terminated.

The first executed suite passed 30 cases. Three search cases used the wrong ARIA role: Pagefind exposes its labeled input as a textbox inside a search landmark, not a searchbox. The actual accessibility snapshot established the corrected selector. The three corrected search journeys and three screenshot captures then passed.

The added navigation cases initially asserted visibility of Starlight's `display: contents` wrapper, which has no box. The corrected cases assert and use the actual named navigation link, operate the theme combobox and verify the destination. All three passed. No site behavior or required assertion was weakened to hide an application defect.

In total, all 39 current cases have matching local evidence across the initial run and focused corrections. This is not represented as a single green full-suite invocation. Astro check reports zero errors, warnings and hints. Original artifacts remain in `artifacts/browser-first-attempt/`, `artifacts/browser-search-and-visuals/` and `artifacts/browser/`; command logs are `browser-*.log`.

Actual remote browser CI, complete content/API certification, paired publication and Pages deployment remain outstanding. Source API state remains Unverified. The visual review also identifies XML generic-arity spellings in generated member navigation as a presentation refinement still to complete; exact symbol identity must remain unchanged when labels improve.
