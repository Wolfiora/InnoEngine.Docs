---
title: Inno.Adapter.Storage
description: Select application storage through explicit provider registrations and logical scopes.
uid: project.inno-adapter-storage
kind: project
owners:
  - Inno.Adapter.Storage
---
# Inno.Adapter.Storage

This project defines the storage adapter family without choosing filesystem paths. Composition supplies providers; `IStorageBackendFactory` resolves a selected backend and logical `StorageScope` into a caller-owned `IApplicationStorage`.

## Registration model

`StorageBackendId` is an open ordinal string identity without whitespace. The default struct is unassigned. Built-in `fileSystem` and `browser` IDs support standard composition; third-party providers do not need a new enum member or a central branch.

`StorageBackendProvider` is an immutable registration descriptor with a protected construction boundary and a `CreateStorage` extension point. It does not scan assemblies. If another extension mechanism discovers source types, that mechanism owns its attributes and discovery protocol.

`StorageBackendCatalog` captures the supplied registration set. Null providers, duplicate IDs and invalid registrations fail at construction. `supportedBackends` supports capability preflight. Creation resolves an exact ID, rejects an unregistered backend and rejects a provider's null result. `AdapterSelection.Validate` can preflight the domain catalogs before initializing windows or devices.

## Ownership and scope contract

The composition owner retains provider resources and delegates; the catalog does not take ownership of them. Each returned service belongs to its caller, typically the runtime subsystem that tracks its asynchronous work.

Providers receive a logical namespace. Their host configuration selects the physical location or platform store. Scripts continue to use keys and `IApplicationStorage`, never a physical root or the filesystem implementation type. Unknown backends, invalid scopes and initialization failures remain explicit composition/startup failures.

## Implementations and tasks

The [filesystem provider](../../backends/projects/inno-adapter-storage-filesystem.md) requires an explicit absolute host root. Browser storage is a separate platform implementation with its own environment requirements. Registration is not evidence that either environment has been executed or certified.

Read [save and load application data](../../manual/storage/save-data.md) for service consumption and [runtime storage ownership](inno-storage-runtime.md) before transferring a backend.

## API reference

The exact reference describes IDs, provider extension points, catalog validation and factory contracts.

[Browse storage adapter types](../../api/engine/adapter/storage/index.md).
