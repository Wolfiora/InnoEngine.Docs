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
2. Let the protected engine evidence relay dispatch **Receive engine source evidence**, or explicitly dispatch that receiver with the successful engine run ID and exact engine commit. The receiver authenticates `documentation-source-certification-attempt-<attempt>` before importing it into the Docs repository. For initial migration, enable bootstrap on the approved migration branches. This setup requires the workflows to be present on their default branches for automatic `workflow_run` delivery; manual bootstrap does not bypass verification.
3. Confirm that `Documentation validation` passes, including complete project/API coverage, matching source evidence, rendered output and browser journeys.
4. Record the successful Docs run ID and exact commit, and the matching Engine CI run ID and exact engine candidate commit.

The successful producer retains `documentation-site-attempt-<attempt>` for 90 days. Its `publication.json` records the source binding and every static file's SHA-256. Preview and diagnostic artifacts do not substitute for this verified artifact.

Source certificates cover the exact engine source tree, project inventory and every captured API reference by owner, target and configuration. Missing comparison coverage produces a blocked source status and no certificate. A successful rendering or a user-edited verification label cannot replace that evidence. Candidate jobs never obtain the installation credential. The protected receiver imports data only; it never installs candidate dependencies, runs candidate code or builds the site.

The same certificate records the executable examples that actually compiled: stable page identity, ordered code-block identities, host/script surface, reference owners and successful compiler report contexts. Pure prose edits and moved source lines can reuse these inputs. Changed example code, surface or references require fresh compilation evidence. API declaration fences are checked as reference declarations, not mistaken for executable tutorials.

## Reuse a successful preview when evidence arrives

Documentation CI builds and tests the website in **Documentation projection**. **Certify documentation source** then selects an authenticated certificate using its own repository's read-only token, imports the exact preview artifact with digest and path checks, attaches evidence through the canonical model, and checks full coverage against the same static files. It does not rebuild the site or repeat browser tests.

If evidence arrives later, **Resume certified documentation** retries only a failed evidence-selection job for an unchanged PR head and base, or the unchanged selected branch head. It requires the preceding projection to have passed. Unrelated failures, canceled runs, updated candidates and missing certificates are not retried. The first attempt remains available, and the retry records the new certificate's import run as its reason. Both jobs must succeed before **Documentation validation** can pass.

A pull-request artifact remains a preview even if source certification passes. Publishable producers run on the Docs default branch, or through the explicitly approved migration bootstrap. A prepared Docs candidate is never promoted merely because its PR passed.

## Configure evidence access once

An organization-installed GitHub App must be restricted to **InnoEngine** and **InnoEngine.Docs**. Configure `INNO_DOCS_APP_ID` and `INNO_DOCS_APP_PRIVATE_KEY` in the authorized repositories. Each token requests only the repository and permissions required by its operation:

| Operation | Token scope |
| --- | --- |
| Engine relay | Docs repository, Actions write for the fixed receiver dispatch. |
| Docs receiver | Engine repository, Actions read and Contents read. |
| Engine pairing reconciler | Docs repository, Actions read and Contents read; the ordinary protected engine workflow token writes the exact candidate check. |
| Docs completion callback | Engine repository, Actions write for the fixed pairing workflow dispatch; the engine independently revalidates the pair. |
| Publication | Both repositories, Actions read and Contents read. |
| Candidate validation | Its ordinary Docs repository token, Contents read and Actions read; no App credential. |
| Resume after evidence import | Protected Docs workflow token, Actions write plus read access to candidate metadata; no candidate execution. |

Never put the private key in source, logs, a workflow input or a pull-request artifact. A missing installation is a visible setup blocker, not permission to substitute a personal token in automation.

GitHub Pages must use Actions deployment. The `github-pages` environment and branch protection remain separate repository controls; their actual configuration must be checked before claiming publication is enforced.

The App reads cross-repository evidence. Only the final deployment job receives `pages: write` and `id-token: write` through its own repository token. Downloaded candidate content is never executed in that job.

## Promote the artifact

Open **Actions → Publish documentation → Run workflow** and enter the four recorded identities. For ordinary publication, use the default branch and leave bootstrap disabled. Bootstrap is limited to the explicitly approved `ai-pipeline` engine and `docs-modernization` Docs development branches.

The workflow checks:

- The repository, workflow, event, current branch head, run conclusion and exact successful attempt.
- The required aggregate and every actual engine matrix producer.
- GitHub's archive digest before extraction, bounded archive paths, and every static file against its manifest.
- The certified engine input tree and the current site's authenticated API and executable example evidence. An exact paired candidate retains its original correspondence; a documentation-only correction reports `SourceEquivalentDocumentation` after checking its new content and static output against the same certified engine inputs.
- Source eligibility again immediately before preparing the Pages transport.

Only then does a separate job deploy the same static files to [InnoEngine documentation](https://wolfiora.github.io/InnoEngine.Docs/). A rejected candidate does not replace the previous successful deployment. Initial publication is development documentation; stable documentation requires an actual approved engine release.

A documentation-only correction does not need a new engine PR or a repeated full engine matrix when its source tree and required API/example inputs remain certified. A merge commit may also have a different commit identity with the same verified source tree; provenance records both the documented revision and the actual engine run. Different engine input trees do not qualify through this reuse path.

## Diagnose a rejected promotion

| Symptom | Required action |
| --- | --- |
| Missing App configuration or installation permission | Complete the restricted installation; do not substitute a personal token in the workflow. |
| Missing, expired or failed producer artifact | Obtain a successful, retained producer result; a preview is not eligible. |
| Source branch changed | Re-evaluate the candidate against the new inputs and select matching evidence. |
| Archive digest or file identity differs | Retain the first failure and investigate the artifact; do not rewrite its manifest to force acceptance. |
| Pairing differs or a platform result is absent | Complete the engine/documentation certification for the exact pair. |

Promotion evidence is retained for 30 days. Record the actual deployment URL and source identities after the deployment succeeds; workflow definitions and local negative tests alone do not establish a live publication.
