# Contributing to the documentation

Choose the reader's task before choosing a page. Use the pinned engine source and API manifests to confirm behavior, and keep public contracts separate from implementation details.

Read the [documentation rulebook](.agents/rulebook/README.md). It is the same authority used by agent contributors.

Use the Node version in `.node-version`, install with `npm ci`, then run `npm run docs:prepare` before `npm run dev` or `npm run check`. `npm run build` prepares missing or stale content automatically, renders the website and validates the resulting projection. It can fetch the exact public engine tooling revision and install its SHA-512-verified SDK locally; only the managed documentation dependency closure builds. Optional `INNO_DOCS_ENGINE_ROOT` selects an existing clean checkout at the bound tooling revision, and `INNO_DOCS_DOTNET` selects its exact SDK. Ordinary prepared-snapshot queries remain read-only and offline. Preview output is not a certification of engine behavior.

Start from the persistent `draft` branch. Use a feature PR into `draft` for tutorials, explanations and presentation changes. A branch without a PR does not run CI. Draft pushes and PRs run documentation checks and provide a preview; they do not deploy. A maintainer manually creates and merges a `draft` to `main` PR using a merge commit. Vercel then builds that main revision with the shared build command and deploys it; keep `draft` for subsequent work. GitHub artifacts remain acceptance evidence, not the bytes transported to Vercel. Main must require current-base Documentation validation; Vercel does not wait for post-merge Actions. See [publication setup](content/en/contributing/publish-documentation.md).

API facts and default descriptions arrive automatically after engine `master` updates. Maintain source XML in InnoEngine. To write a richer API explanation, edit the particular type or member Markdown and set `source: manual`. This protects its prose while declarations continue to follow source. `source: xml` and missing markers remain automatically managed. Deleted APIs with manual prose become editorial work, not available API entries. Missing manual explanations produce neutral warnings and do not block publication.

Docs uses its committed API version. An unrelated engine commit or slow full-engine matrix does not block a documentation correction. API integrity, broken links, failed examples and failed website builds still block. No paired engine PR metadata is required, and no PR is automatically merged.

## Browser acceptance

After preparing the canonical catalog and building the site, install the lockfile-selected browser with `npx --no-install playwright install chromium`, then run `npm run test:browser`. The tests own an isolated local preview on port 4324; stop your own existing Astro preview before starting them. They exercise desktop, tablet and mobile reading in both themes, search and empty results, keyboard navigation, API contract deep links, and essential content with JavaScript disabled.

Local contributors may explicitly set `INNO_DOCS_BROWSER_CHANNEL=msedge` to use an already installed Edge instead of downloading Chromium. Record the browser/version with the result; this does not certify the CI browser. CI uses the locked Playwright Chromium revision. No test retries run automatically. Results, first-failure traces and representative screenshots live under `artifacts/browser/`; preserve the first failing directory before a diagnostic rerun. Browser acceptance consumes the static site and never prepares engine or Native products.
