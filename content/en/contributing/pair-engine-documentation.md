---
title: Pair an engine change with documentation
description: Select immutable engine and documentation inputs without coupling the two repositories through circular commit references.
uid: contributing.pair-engine-documentation
kind: how-to
owners: [Inno.Tooling.Validation]
contracts: [project.inno-tooling-validation]
---
# Pair an engine change with documentation

Use an engine PR and a Docs PR when a change affects both implementation and reader-facing contracts. CI needs an exact documentation commit for the engine candidate it actually validates. A branch name such as `main` or `docs-modernization` is not an immutable selection.

This task establishes input pairing. API verification, executable examples, website checks, review and publication remain separate requirements.

## Prepare the two candidates

1. Implement the engine change and identify the affected owners and behavior.
2. Capture the required source facts and update the corresponding Manual or reference pages in the Docs branch. Preserve unchanged content and manifests that remain applicable.
3. Commit the Docs candidate and retain its full 40-character Git commit identity.
4. Identify the actual engine merge-candidate tree from CI. The PR head tree is sufficient only when it is the same tree that the merge candidate contains. A base-branch update can change this identity.

The Docs source binding must identify the selected engine candidate. A local authoring index or a successful site render does not independently establish source compatibility. See [validate reference facts](reference-validation.md) and [validate a change](validate-change.md).

## Add the selection to the engine PR

Add one line to the English PR description, replacing both placeholders with complete lowercase Git identities:

```text
Documentation-Candidate: Wolfiora/InnoEngine.Docs@<docs-commit> engine-tree=<engine-candidate-tree>
```

The engine PR owns this coordination metadata. Do not add the Docs commit to an engine tracked file that would force the two repositories to keep changing each other's next commit identity.

CI reads current PR metadata when retrying an unchanged candidate, so correcting this line does not require an empty source commit. If the PR head, base or merge candidate has changed, validate that new candidate; an old run cannot certify it.

## Understand candidate selection

| Execution | Selection source |
| --- | --- |
| Pull request | Current metadata from that PR, after checking its head, base and merge candidate still match the event. |
| Default-branch push or scheduled validation | PRs associated with the exact engine commit. |
| Merge group | Active queue entries whose prepared commits belong to the checked group. |
| Manual dispatch | An explicit `documentation_revision`, or associated PR metadata when the input is blank. |

Consistent PRs may identify the same Docs commit. Conflicting commits for one engine tree, missing metadata and malformed selections stop candidate preparation. Neither a guessed sibling checkout nor the latest branch commit substitutes for a missing selection.

Both platform jobs receive the same Docs commit. Hosted preparation checks the clean Docs checkout, prepares its canonical snapshot and records its correspondence to the engine source tree. It does not execute scripts from the Docs checkout as part of selecting that input.

## Read the result before publishing

The retained candidate and pairing records identify the source commits, engine tree, Docs snapshot and content identity. `Unverified` source API status remains unverified even when those identities correspond correctly.

Use the required engine and documentation checks to establish compatibility. Preparing or merging a Docs candidate does not automatically promote it as the current website. Publication must consume the verified artifact for a matching engine input; formal engine releases remain a separate user-controlled action.

## Resolve a blocked selection

| Symptom | Action |
| --- | --- |
| No candidate binds the engine tree | Update the pairing metadata for the actual candidate and rerun the applicable checks. |
| Conflicting documentation revisions | Coordinate the PRs so they select one reviewed Docs candidate for that tree. |
| Dirty or wrong Docs checkout | Check out the selected commit and preserve unrelated local edits in their own owner. |
| Engine base or head changed | Re-evaluate compatibility against the new candidate. Do not reuse the obsolete merge result. |
| Source verification is unavailable | Supply the missing source/reference evidence. Input pairing cannot turn this state into a pass. |

Keep the first failure and explain the retry. GitHub App access, review, required checks and publication authorization are not implied by a matching metadata line.
