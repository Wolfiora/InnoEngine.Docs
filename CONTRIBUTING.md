# Contributing to the documentation

Choose the reader's task before choosing a page. Use the pinned engine source and API manifests to confirm behavior, and keep public contracts separate from implementation details.

Read the [documentation rulebook](.agents/rulebook/README.md). It is the same authority used by agent contributors.

Use the Node version in `.node-version`, install with `npm ci`, and start the local site with `npm run dev`. Run the relevant checks and `npm run build` before submitting a PR. Preview output is not a certification of engine behavior.

Changes to public behavior use a paired engine/documentation PR. Include the exact engine and Docs identities, actual checks, and remaining limitations. Do not automatically merge or publish unverified candidates.

## Browser acceptance

After preparing the canonical catalog and building the site, install the lockfile-selected browser with `npx --no-install playwright install chromium`, then run `npm run test:browser`. The tests own an isolated local preview on port 4324; stop your own existing Astro preview before starting them. They exercise desktop, tablet and mobile reading in both themes, search and empty results, keyboard navigation, API contract deep links, and essential content with JavaScript disabled.

Local contributors may explicitly set `INNO_DOCS_BROWSER_CHANNEL=msedge` to use an already installed Edge instead of downloading Chromium. Record the browser/version with the result; this does not certify the CI browser. CI uses the locked Playwright Chromium revision. No test retries run automatically. Results, first-failure traces and representative screenshots live under `artifacts/browser/`; preserve the first failing directory before a diagnostic rerun. Browser acceptance consumes the static site and never prepares engine or Native products.
