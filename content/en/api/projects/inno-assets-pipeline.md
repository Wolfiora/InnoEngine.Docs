---
title: Inno.Assets.Pipeline
description: Authoring imports, source identities, settings, immutable artifacts and runtime export.
uid: project.inno-assets-pipeline
kind: project
owners: [Inno.Assets.Pipeline]
---
# Inno.Assets.Pipeline

Inno.Assets.Pipeline owns the authoring side of asset processing: source mounts, filesystem discovery, importers, build processors, metadata sidecars, the rebuildable catalog and content-addressed artifacts. Player runtime code consumes exported content instead of referencing this pipeline.

Use the [asset task guide](../../manual/assets/index.md) to load source assets, edit import settings, import plugin samples or diagnose a failed export. [Asset publication](../../architecture/asset-publication.md) explains the transaction model.

## Authoring ownership contract

The host initializes and owns one pipeline with its type catalog, serialization registry, identity allocator and shared generation coordinator. Mutations run on the constructing owner thread inside a complete generation operation scope. A normal asynchronous continuation does not imply that it resumed on this thread.

Reconcile a dirty catalog before capturing the active loader. Type or serializer queries during an admitted operation defer automatic refresh; they cannot retire the loader still executing on the call stack. Pending or faulted generation state does not permit new export or publication work.

Source mounts and their dependencies are immutable snapshots. The current source's `.imeta` sidecar determines which persistent ID owns a path; the catalog is a rebuildable index and artifact cache. A stale catalog entry cannot overwrite a newer sidecar identity during startup. Reusing a path without its original metadata does not restore the old identity.

## Publication and failure contract

Source candidates remain isolated until activation. Metadata writes are staged; completion validates the original sidecar bytes, writes changes and promotes the catalog. Failure compensates already written files in reverse order, preserving both the original error and any recovery error. This is an owner-safe-point transaction with filesystem compensation, not a multi-file crash-atomic guarantee.

Source-mount activation publishes candidate identity and neutral reference recovery. Completion retires the old loader; rollback restores the unchanged former canonical objects and retires the candidate. Pending retirement retains all dependencies. A faulted generation requires host restart rather than continued access through partly retired services.

Last-good authoring content, current import diagnostics and successful Player export are distinct states. Required stale, failed or missing dependencies reject runtime export with their dependency path. Export does not reimport midway through an already selected generation.

## Artifact and export contract

Artifact keys use complete 64-character SHA-256 identities. Output names and leaf filenames are unique; lengths and hashes are validated. `TryGetArtifact` checks metadata and lengths; payload reads and export also check actual content hashes. Same-length changes or preserved timestamps are not proof of freshness.

Named outputs can be `Runtime` or `AuthoringOnly`; reserved `runtime` and `asset-state` outputs cannot be authoring-only. Export validates and projects only runtime outputs to a new content-addressed key, cloning deployment metadata through the owner's serializer. It does not rewrite the source catalog or sidecars and does not require asset-type-specific cases.

Background export retains the captured immutable serialization generation and its strict read lease until the worker has completed, failed or canceled. Callers cannot release the generation after merely scheduling the task.

## API reference

[Authoring types and member contracts](../types/assets-pipeline/index.md) cover pipeline/loader access, imports, settings, source candidates, sample transactions and export. Use [importer extension guidance](../../extending/asset-importers.md) before supplying custom processors.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-assets-pipeline/index.md)
