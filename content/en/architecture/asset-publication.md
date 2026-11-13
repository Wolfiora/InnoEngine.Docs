---
title: Asset publication, recovery and deployment
description: How authoring identity, isolated candidates, immutable artifacts
  and runtime content fit together.
uid: architecture.asset-publication
kind: explanation
owners:
  - Inno.Assets
  - Inno.Assets.Pipeline
  - Inno.Content
contracts:
  - project.inno-assets-pipeline#publication-and-failure-contract
  - architecture.ownership
---
# Asset publication, recovery and deployment

Asset authoring must remain usable when importers fail, plugins disappear or a source changes during processing. InnoEngine separates source authority from rebuildable indexes and prepares replacements in isolated candidates before publishing them.

## Separate source, canonical state and output

| State | Authority and purpose |
| --- | --- |
| Source plus `.imeta` | Editable content, persistent identity and import settings |
| Catalog | Rebuildable index, import diagnostics, dependencies and artifact references |
| Canonical asset | Current identity-bearing value within the host's generation |
| Artifact bundle | Immutable named outputs addressed by complete content identity |
| Runtime content | Validated projection of deployable outputs and catalog data |

The source sidecar wins when a stale catalog assigns a different historical ID to the same path. The loader retires the former record to a tombstone and removes only mappings actually owned by that record. This prevents startup order or rollback from changing identities already used by scenes, materials and other assets.

Saving a detached edit to an existing destination preserves that destination's canonical identity. Reference data always uses the owner's full serialization context. A path reused by a different identity remains a different asset.

## Prepare without changing the active world

`PrepareSourceMounts` returns an unpublished transaction with its own source snapshot, loader and filesystem index. Candidate queries see only candidate state. Candidate canonical objects have persistent IDs but do not take the active world's runtime identity registrations before activation.

The source snapshot supplies read-only mount, filesystem, info, artifact and loading access. It does not grant publication authority. Import/build/reference/catalog diagnostics are staged as neutral data; reporters become active at publication and former-generation disposal cannot clear the new reports.

## Activate, complete or roll back

Activation participates in the shared reference-recovery transaction. It publishes candidate runtime registrations and resolves neutral slots for previously loaded assets and retained Missing intent. Recovery changes are neutral, immutable descriptions: empty before activation or after rollback, and resolved/Missing results after activation. They are host composition/diagnostic data, not game-script publication APIs.

Missing recovery intent must survive collection of temporary placeholder objects and later mount changes. Conversely, an ordinary never-loaded catalog tombstone does not become an active reference root merely because it exists on disk. Invalid imported canonical state rejects the candidate instead of turning corruption into ordinary Missing.

Completion validates original metadata bytes, applies sidecar changes, promotes the catalog and retires the previous loader. Rollback restores the former canonical objects without mutating them through the candidate. Source metadata edits include creation, directory metadata, moves and deletion; uncommitted candidates cannot save authoring sources.

If a write or catalog promotion fails, compensation restores previously changed sidecars in reverse order and preserves all failures. A failed journal removal first restores the former catalog snapshot. External edits are conflicts, not permission to overwrite newer bytes. This protocol coordinates safe points and compensation; it does not claim an atomic filesystem instruction spanning many files.

## Keep generations alive while work drains

Synchronous pipeline/loader operations hold the shared generation admission for their whole call. Automatic catalog refresh cannot retire a loader from inside that loader's own operation. Background export and sample preparation retain the captured serialization generation and read protection until completion, failure or cancellation has drained.

Catalog-driven importer/type replacement uses the same isolated source candidate. If plugin compilation already prepared it, assembly publication joins validation instead of creating a second candidate or taking over the plugin's activation/rollback duties. Initial participant registration does not republish already initialized sources.

Standalone loader disposal reports Pending rather than synchronously waiting for queued or running work. After admission closes, already accepted operations may finish. Canonical unload hooks, identity registrations, registries and diagnostics retire in dependency order, including tombstones retained only in the ID index. Ordinary cleanup failures still attempt other releasable resources. An unresolved retirement faults the shared gate and keeps both generations' dependencies rather than pretending rollback succeeded after release.

## Export an immutable runtime closure

Named output metadata records deployment scope and participates in its fingerprint. Runtime export validates output names, filenames, lengths and hashes, then projects only runtime outputs to a new artifact key. It clones and rewrites deployment metadata through the owning serializer and removes reimport-only dependency records from that projection. Authoring catalog and sidecars remain unchanged.

Required source/artifact dependencies must be current before export. Last-good authoring output cannot certify a failed dependency. Project and plugin `~` sample subtrees are excluded from game closure; a runtime dependency into them is an explicit failure.

The Content layer verifies the resulting pack before exposing a read-only store. Runtime asset services borrow that store; leases and streams independently retain bytes until their owners finish. This keeps import policy, filesystem layout and native resource preparation outside the neutral content-reading contract.

## Related tasks

- [Diagnose import and export failures](../manual/assets/troubleshooting.md).
- [Import a sample without blocking the frame loop](../manual/assets/import-samples.md).
- [Extend the importer protocol](../extending/asset-importers.md).
- [Read verified content](../manual/assets/read-content-pack.md).
