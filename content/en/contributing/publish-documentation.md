---
title: Publish verified documentation
description: Promote an already-verified static site without rebuilding it or exposing publishing credentials to pull requests.
uid: contributing.publish-documentation
kind: how-to
---
# Publish verified documentation

Use the **Publish documentation** workflow to promote the exact output of a successful Documentation run. Publication consumes verified files and a matching engine certification; it does not rebuild the site or create an engine release.

## Prepare a publishable pair

1. Complete the [engine and documentation pairing](pair-engine-documentation.md). The engine's actual Windows/macOS matrix must reconcile successfully against the selected documentation commit and content snapshot.
2. Run Documentation on the Docs default branch, or explicitly select the approved development migration branch for bootstrap publication. A pull-request preview is useful for review but cannot become the public site.
3. Confirm that `Documentation validation` passes, including complete project/API coverage, matching source evidence, rendered output and browser journeys.
4. Record the successful Docs run ID and exact commit, and the matching Engine CI run ID and exact engine candidate commit.

The successful producer retains `documentation-site-attempt-<attempt>` for 90 days. Its `publication.json` records the source binding and every static file's SHA-256. Preview and diagnostic artifacts do not substitute for this verified artifact.

## Configure evidence access once

An organization-installed GitHub App must be restricted to **InnoEngine** and **InnoEngine.Docs**. Publication requests only **Actions: read** and **Contents: read** from that installation. Set `INNO_DOCS_APP_ID` as a Docs repository variable and `INNO_DOCS_APP_PRIVATE_KEY` as its secret. Never put the private key in source, logs, a workflow input or a pull-request artifact.

GitHub Pages must use Actions deployment. The `github-pages` environment and branch protection remain separate repository controls; their actual configuration must be checked before claiming publication is enforced.

The App reads cross-repository evidence. Only the final deployment job receives `pages: write` and `id-token: write` through its own repository token. Downloaded candidate content is never executed in that job.

## Promote the artifact

Open **Actions → Publish documentation → Run workflow** and enter the four recorded identities. For ordinary publication, use the default branch and leave bootstrap disabled. Bootstrap is limited to the explicitly approved `ai-pipeline` engine and `docs-modernization` Docs development branches.

The workflow checks:

- The repository, workflow, event, current branch head, run conclusion and exact successful attempt.
- The required aggregate and every actual engine matrix producer.
- GitHub's archive digest before extraction, bounded archive paths, and every static file against its manifest.
- The engine certification's exact documentation commit, snapshot, content identity and source tree.
- Source eligibility again immediately before preparing the Pages transport.

Only then does a separate job deploy the same static files to [InnoEngine documentation](https://wolfiora.github.io/InnoEngine.Docs/). A rejected candidate does not replace the previous successful deployment. Initial publication is development documentation; stable documentation requires an actual approved engine release.

## Diagnose a rejected promotion

| Symptom | Required action |
| --- | --- |
| Missing App configuration or installation permission | Complete the restricted installation; do not substitute a personal token in the workflow. |
| Missing, expired or failed producer artifact | Obtain a successful, retained producer result; a preview is not eligible. |
| Source branch changed | Re-evaluate the candidate against the new inputs and select matching evidence. |
| Archive digest or file identity differs | Retain the first failure and investigate the artifact; do not rewrite its manifest to force acceptance. |
| Pairing differs or a platform result is absent | Complete the engine/documentation certification for the exact pair. |

Promotion evidence is retained for 30 days. Record the actual deployment URL and source identities after the deployment succeeds; workflow definitions and local negative tests alone do not establish a live publication.
