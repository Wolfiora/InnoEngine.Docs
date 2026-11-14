---
title: Publish documentation from draft
description: Validate with GitHub Actions, merge draft into main, and publish through Vercel Git integration.
uid: contributing.publish-documentation
kind: how-to
---
# Publish documentation from draft

GitHub Actions checks the documentation before a maintainer merges it. Vercel then builds and hosts main. Connect the repository once through the Vercel website; subsequent main updates deploy automatically without a deployment token or manual uploads.

## Follow the publication flow

| Event | GitHub Actions | Vercel |
| --- | --- | --- |
| Feature branch without a PR | Local checks only | No deployment |
| Feature PR into draft | Documentation validation and editorial report | No deployment |
| Draft push, including API synchronization | Validation and downloadable preview | No deployment |
| Draft-to-main PR | Required validation of the proposed publication | No deployment |
| Human merge into main | Retains validation and reusable example evidence | Builds main and publishes it |

Engine API synchronization continues to update registered API prose, facts, navigation and the version binding on draft. It does not publish the website. Manual, architecture and tutorial content belongs to this repository. See [maintain API documentation](api-documentation.md).

## Connect Vercel once

1. Sign in to [Vercel](https://vercel.com/new) with GitHub. Select the intended Hobby account/team; importing this project does not require selecting a paid trial.
2. Under **Import Git Repository**, choose **Wolfiora** and import **InnoEngine.Docs**. If missing, configure the Vercel GitHub App to access this repository. Do not import InnoEngine or create a second repository copy.
3. Name the project, for example **innoengine-docs**. Keep the repository root. The committed configuration selects Astro, `npm ci`, `npm run build` and output directory `dist`. Use Node **24.x**, the hosting provider's supported major corresponding to the repository's development version.
4. Merge this implementation into **main** before the first deployment. Select **main** as the production branch. Keep system environment variables enabled so the build discovers its assigned production domain automatically.
5. Click **Deploy**. No Vercel token, Project ID, Team ID or engine App key is required in GitHub for website publication.
6. Open the fixed `*.vercel.app` domain. The root redirects to `/InnoEngine.Docs/`. Check home, an API member, search and a direct deep link. If the public domain requires Vercel authentication, review **Settings → Deployment Protection** for production access.

The build obtains the exact public documentation-tool revision and its SHA-512-verified SDK when unavailable, then prepares the catalog and renders static HTML. Only the managed documentation dependency closure compiles, never Native dependencies or engine products. Missing or invalid inputs fail visibly instead of using old facts.

If a project already exists from uploading the temporary setup page, connect **Wolfiora/InnoEngine.Docs** under its Git settings and select main. Remove old build/output overrides so the committed configuration applies. The temporary page is not the documentation website.

An organization owner may need to authorize the installation. Missing access is an external setup requirement. See [Vercel Git integration](https://vercel.com/docs/git) and [Astro deployment](https://docs.astro.build/en/guides/deploy/vercel/).

## Release an update

1. Review the draft preview and open a **draft → main** PR.
2. Require **Documentation validation** against the current base. **API editorial coverage** remains advisory.
3. Merge manually with a **merge commit**. Keep draft; do not squash, reset, force-push or delete it.
4. Inspect Vercel's production deployment for that main commit. Failed builds do not replace the previous successful site.
5. Confirm the displayed API source revision and the deployment commit. Record deployment evidence separately from GitHub validation.

No workflow automatically merges a publication PR. Before the next draft update, API synchronization incorporates main's ancestry; real conflicts stop the update for resolution.

## Understand the acceptance boundary

GitHub **Documentation validation** checks API data, content, links, executable examples, rendering and browser journeys. It also exercises portable catalog preparation on Linux. **API editorial coverage** reports missing or stale manual prose without blocking publication.

Vercel uses the same pinned catalog preparation and renderer, and validates its generated HTML. This is a separate build, not an upload of the identical GitHub artifact. Vercel does not independently compile all executable examples or wait for post-merge GitHub jobs. Required current-base PR checks and protected main are the publication gate.

Protect main with required **Documentation validation**, up-to-date branch checks, discussion resolution, pull requests, and no force-push/deletion. Reviewer approval is not required. Do not bypass checks through direct pushes or promote draft manually. The repository disables non-main Vercel Git deployments; its build also rejects non-main or non-production Vercel execution.

A site build does not certify the whole engine. Docs uses its committed API version; unrelated engine commits and full-engine matrices do not block corrections. Missing manual descriptions remain editorial work; invalid facts, examples and site checks remain failures.

## Maintain permissions and domains

| Capability | Owner and permission |
| --- | --- |
| Engine-to-draft API synchronization | Existing GitHub App restricted to the two repositories and Docs Contents write |
| Documentation and example checks | GitHub Actions read permissions |
| Neutral editorial report | Protected reporting job with Checks write |
| Website build and hosting | Vercel Git integration authorized for this Docs repository |
| Publication decision | Human merge into protected main |

The synchronization App is unchanged. Its private key remains an engine Actions secret; Vercel does not need it. No website deployment token or project/team IDs are needed in GitHub. Retired `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` and `DOCS_HOSTING` settings, if created for the old uploader, can be removed after checking for unrelated consumers.

The production origin comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`. Optional `DOCS_SITE_URL` overrides it with a custom HTTPS origin without a path. GitHub previews may use the same override. A `github.io` hostname belongs to GitHub and cannot be assigned to Vercel; use the assigned Vercel domain or your own DNS domain.

The GitHub Pages and artifact-upload publishers are removed. Existing Pages content can remain online during migration but receives no updates. Unpublish it separately after verifying Vercel if it should no longer be accessible.

## Recover and inspect limits

Retain the first failed deployment log and fix its cause. Retry the selected main revision from Vercel's Deployments view, never draft. For preparation failures inspect the pinned checkout, SDK download and catalog phase; for rendering failures inspect content and projection errors.

Storage, individual deployment size, file count and bandwidth are separate quotas. A 10 GB storage allowance does not prove every deployment is accepted. Keep the complete sidebar; do not silently prune content to fit a host. Confirm the actual result and consult [current limits](https://vercel.com/docs/limits) if rejected.

GitHub retains diagnostics/previews for 30 days and checked site/example evidence for 90 days. Committed content, API facts and immutable tooling identities allow rebuilding after artifacts expire. Vercel manages its own retention and quotas. Local success and a checked PR do not prove that hosting is connected or the public site deployed.
