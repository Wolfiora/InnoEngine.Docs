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

Set GitHub Pages to **GitHub Actions**, protect main with **Documentation validation** and retain review/discussion requirements. Do not make **API editorial coverage** required. Workflow definitions alone do not prove these repository settings are active.

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
