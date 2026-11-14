---
title: Publish documentation from draft
description: Review draft, merge it into main, and deploy the exact validated website artifact.
uid: contributing.publish-documentation
kind: how-to
---
# Publish documentation from draft

The persistent `draft` branch is the working edition of the documentation. The public website follows `main`. A human publication decision separates automatic API synchronization from what readers see online.

## Develop and preview

| Event | Checks and preview | Deploys |
| --- | --- | --- |
| Feature branch without a PR | Local checks only | No |
| Feature PR into draft | Documentation validation and editorial report | No |
| Push to draft, including API synchronization | Documentation validation and preview artifact | No |
| Draft-to-main PR | Checks the proposed publication | No |
| Human merge into main | Validates the publication input and deploys the matching artifact | Yes |

Manual, architecture and tutorial content belongs to this repository. API synchronization changes only registered API prose, derived navigation, source facts and the engine version binding. See [maintain API documentation](api-documentation.md).

## Release the documentation

1. Review the draft preview and the proposed `draft → main` PR.
2. Require **Documentation validation**. Read **API editorial coverage**, whose neutral warnings identify useful writing work without blocking publication.
3. Merge the PR manually with a **merge commit**. Keep the persistent draft branch; do not squash, reset, force-push or delete it.
4. Let the main workflow deploy the exact verified static artifact.
5. Confirm the deployment result and the website's displayed API revision.

No workflow automatically creates or merges the publication PR. Before the next draft update, automation incorporates main's ancestry; a genuine conflict stops the update and requires resolution rather than choosing one side.

## Know what publication proves

A successful publication proves that the selected documentation and API package passed their required checks and that the deployed files match the verified site artifact. It does not claim that every API has a manually written explanation or that the latest engine master has completed every functional matrix.

The committed API package selects the documented engine version. A newer unrelated engine commit does not block a correction to these documents. Source links and the displayed revision identify that selected version; an older API snapshot must not be advertised as the latest engine source.

Executable examples use their explicitly selected API and reference inputs. Missing required inputs, invalid examples, corrupt API facts, broken links and failed website builds remain blocking.

## Configure automation permissions

| Capability | Permission boundary |
| --- | --- |
| Engine-to-draft API synchronization | GitHub App installed only on InnoEngine and InnoEngine.Docs; installation token restricted to Docs Contents write |
| Read the producing API artifact | The engine workflow's own repository token |
| Editorial neutral check | A protected Docs reporting job with Checks write |
| Pages publication | The Docs deployment job's own Pages write and OIDC token |
| PR execution | No synchronization private key or deployment permission |

The App is not granted workflow editing, automatic merge or main-push authority. Do not put its private key in source, logs, chat or candidate artifacts. Configure the App ID and private key as the protected engine workflow's variable and secret. Ordinary Docs rendering and Pages deployment do not require that App key.

### One-time administrator setup

1. In the organization's developer settings, create a GitHub App for API synchronization. Disable webhooks if no other approved integration needs them.
2. Under repository permissions, grant **Contents: Read and write**. Do not grant Workflows, Administration or pull-request merge permissions. GitHub supplies Metadata read access automatically.
3. Install the App only on **InnoEngine** and **InnoEngine.Docs**. The synchronization workflow requests a token restricted further to Docs Contents write.
4. Generate and securely download the App's private key. In **InnoEngine → Settings → Secrets and variables → Actions → Variables**, create `INNO_DOCS_APP_ID` using the App ID. In **Secrets**, create `INNO_DOCS_APP_PRIVATE_KEY` containing the complete PEM. These settings belong in the engine repository because its protected master workflow performs the push. The Docs workflow does not need a copy of the key.
5. In **InnoEngine.Docs → Settings → Rules → Rulesets**, require pull requests and `Documentation validation` for main; allow merge commits and protect against deletion and force-push. Keep `API editorial coverage` optional. Do not add the App as a main protection bypass actor.
6. Disable automatic branch deletion so the persistent draft survives publication. In **Settings → Pages**, select **GitHub Actions** as the source.
7. After the implementation is reviewed and merged, inspect the independent engine export and draft synchronization. Review the resulting Docs preview before manually merging draft into main.

An App installation alone does not prove synchronization works. The first successful export, draft commit and Pages deployment are separate acceptance events. Never paste the private key into a PR, issue or chat. See GitHub's [App registration guide](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app), [private-key management](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps), and the pinned [installation-token action](https://github.com/actions/create-github-app-token/blob/fee1f7d63c2ff003460e3d139729b119787bc349/README.md).

For Pages, select **GitHub Actions**. Protect main with **Documentation validation** and discussion resolution, without mandatory reviewer approval. Do not make **API editorial coverage** required. Workflow definitions alone do not prove these repository settings are active.

## Reuse and recover

A matching content, tooling and configuration identity can reuse a verified site artifact. A different merge commit hash alone does not invalidate identical site inputs. If matching evidence cannot be established, build the documentation once; deployment itself never rebuilds the site or engine.

A manual redeployment may select only a successful main artifact. Draft previews, failed runs, incorrect source repositories, expired inputs and tampered files are rejected. Failed validation or deployment leaves the previous successful website active.

Retain diagnostics for 30 days and deliverable artifacts for 90 days. Keep API facts and source identities in Git so the site can be rebuilt after Actions artifacts expire.

## Diagnose a blocked publication

| Symptom | Action |
| --- | --- |
| API export cannot resolve a required reference or projection | Prepare the actual input in the correct environment; do not substitute stale or empty assemblies |
| Draft changed while the bot was updating it | Recompute against the new draft head, including any newly manual prose |
| A newer engine export superseded the selected one | Use the newer complete export; never overwrite it with an older task |
| Broken links, invalid examples or a failed site build | Fix the reported defect and retain the first failure |
| API editorial warnings | Review or enrich the indicated type/member; publication remains available |
| Missing App, branch protection or Pages permission | Complete the repository configuration; report it as an external blocker |

Record the actual deployment URL and source identities after deployment succeeds. Local tests, a preview and a workflow file are not proof that the public website has been deployed.

## Deploy the verified site to Vercel

`DOCS_HOSTING=pages` (the default) selects GitHub Pages; `DOCS_HOSTING=vercel` sends the same validated main artifact to Vercel. Neither host publishes draft previews. Deployment does not rebuild the engine or website.

A `github.io` hostname belongs to GitHub and cannot be assigned to Vercel. Use the project's `vercel.app` address or a domain whose DNS you control. The existing Pages website can remain online during setup; it does not proxy Vercel. An explicitly configured redirect can later send visitors to the new address, but changes the browser's address.

### Set up the Vercel project

1. Sign in to Vercel and select the account/team that will own the documentation. Review its current plan and bandwidth limits before selecting paid options.
2. Create an empty local setup directory outside the source checkout. Run `npx vercel@65.16.0 login`, then `npx vercel@65.16.0 link`. Select your account/team and create a project, for example `innoengine-docs`. Linking creates `.vercel/project.json`; it does not deploy this empty directory.
3. Read `orgId` and `projectId` from that file locally. Do not commit the setup directory. In the Vercel project settings, confirm the production domain. Do not enable a separate Git integration that automatically builds every push; GitHub Actions owns validation and publication here.
4. Create a Vercel account token scoped to the selected account/team with a suitable expiry. Keep it out of source, chat and screenshots.
5. Open **Wolfiora/InnoEngine.Docs → Settings → Secrets and variables → Actions**. Under **Secrets**, add `VERCEL_TOKEN`. Under **Variables**, add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` from step 3.
6. Add variable `DOCS_SITE_URL` with the production origin, such as `https://innoengine-docs.vercel.app`, using your actual assigned name. Add `DOCS_HOSTING` with value `vercel`. The engine repository does not need these Vercel settings.
7. Merge this implementation through draft into main. **Documentation** validates the site. **Publish documentation** imports and verifies that exact artifact and invokes the locked CLI with `--prebuilt --archive=split-tgz --prod`; Vercel does not build it again.
8. Open the successful production deployment. The root redirects to `/InnoEngine.Docs/`, preserving existing deep-link paths. Verify a Manual page, an API member and search. Record the URL and producing GitHub run.

If the implementation was merged before configuration, run **Actions → Documentation → Run workflow → main** once to build with the selected origin. For transport-only retries, use **Publish documentation → Run workflow**, providing the successful main run ID and exact commit. Draft artifacts are rejected, and every delivered file is verified.

### Limits and recovery

Vercel also has upload, file and bandwidth limits. The transport uses its documented split archive option for large prebuilt outputs; this does not promise unlimited hosting. If the platform rejects an account quota or permission, retain the failure and explicitly adjust the host/account. Failed publication keeps the last successful deployment active.

General document validation records site size without enforcing another host's quota. The Pages-specific publication path still checks its 1 GB limit. Switching back to Pages requires a complete artifact that fits that limit.

References: [project linking](https://vercel.com/docs/cli/link), [prebuilt deployment](https://vercel.com/docs/cli/deploy), [split archive uploads](https://vercel.com/changelog/cli-archive-deployments-are-now-up-to-30-faster-with-split-tgz-archive), and [current Vercel limits](https://vercel.com/docs/limits).
