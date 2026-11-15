---
title: Publish documentation from draft
description: Validate documentation, manually merge draft into main, and publish the checked artifact with GitHub Pages.
uid: contributing.publish-documentation
kind: how-to
---
# Publish documentation from draft

GitHub Actions validates the documentation and publishes its checked artifact to [InnoEngine documentation](https://wolfiora.github.io/InnoEngine.Docs/). GitHub Pages is the only publisher. No hosting token, separate provider account, or second website build is required.

## Follow the publication flow

| Event | Validation | Publication |
| --- | --- | --- |
| Feature branch without a PR | Local work only | None |
| PR into draft, or draft update | Content, examples, website and browser checks | Downloadable preview only |
| Draft to main PR | Checks the proposed publication inputs | None |
| Human merge into main | Validates or reuses exact matching evidence | Deploys the verified Pages archive |
| Manual Documentation run on main | Same input and evidence checks | Republishes eligible main content |

A maintainer creates and merges the draft-to-main PR using a merge commit. Neither API synchronization nor the website workflow merges PRs automatically. Keep draft for subsequent work.

## Configure GitHub Pages once

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the build and deployment source.
3. Under **Settings → Environments → github-pages**, permit deployment from **main** only.
4. Protect main with required **Documentation validation**, up-to-date branch checks, discussion resolution, and no force-push or deletion. No reviewer approval is required.
5. Merge the approved draft-to-main PR. In **Actions → Documentation**, inspect validation and **Deploy GitHub Pages**, then open the published URL.

Only the deploy job receives `pages: write` and `id-token: write`. It uses the repository token and GitHub's short-lived OIDC identity. Engine-to-Docs synchronization continues using its existing App independently; do not move that App key into website hosting.

## Reuse the checked artifact

The pipeline freezes the validated site's file identities, checks the publication size, and uploads one Pages-compatible archive. That archive is both the downloadable preview and the delivery artifact. To inspect a preview locally, unpack the downloaded ZIP, then its `artifact.tar`, and serve the files under `/InnoEngine.Docs/`.

Draft checks use an Incremental plan and explicitly partial previews. A release PR validates its complete merge candidate and archives one site. Main can reuse that authenticated Release artifact when content, API binding, controls, origin and runtime inputs match, even if the commit identity changes. Candidate control code must match trusted main; otherwise main revalidates once. Linux portability has a separate input-bound receipt. Expired or missing evidence causes execution; altered authenticated evidence fails visibly.

Publication verifies the artifact producer and actual publication inputs, confirms current required validation, rejects an obsolete main revision, and asks GitHub Pages to deploy the existing artifact ID. It does not rebuild, copy source files into a publishing branch, or upload another site. Both fresh and reused archives preserve their original producer identity.

## Size, caching and retention

Published GitHub Pages sites have a [1 GB limit](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). The pipeline checks all delivered files before upload. It does not truncate API coverage to fit the limit. The separate archive transport allowance does not raise the published-site limit.

Navigation child lists use content-addressed URLs and are fetched only when expanded. GitHub Pages controls HTTP cache headers; the site does not depend on a provider-specific header configuration. Category tables remain usable without JavaScript.

Keep diagnostics for 30 days and the single checked site plus reusable evidence for 90 days. Committed content, API facts and pinned tooling retain the ability to rebuild after an artifact expires.

## Diagnose publication failures

- **Validation failed:** inspect the first failed check; do not bypass it by publishing an older unrelated archive.
- **Missing or expired archive:** run Documentation on main to rebuild eligible inputs.
- **Pages configuration or permission failure:** verify Actions as the Pages source and main as the environment's allowed branch.
- **Obsolete revision:** a newer main commit superseded the run; publish the newer candidate.
- **Size rejection:** inspect repeated output and large assets, while preserving content and API requirements.
- **Deployment failed:** retain the diagnostic run; the previous successful site remains the production version. Retry only after identifying the cause.

An existing legacy hosting integration must be disconnected independently in its provider or GitHub App repository access. Deleting repository configuration alone does not revoke remote webhook access. Do not leave parallel automatic publishers enabled.
