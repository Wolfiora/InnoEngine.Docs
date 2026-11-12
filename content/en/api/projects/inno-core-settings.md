---
title: Inno.Core.Settings
description: Byte-backed settings documents, project contribution composition, and generation-scoped lookup.
uid: project.inno-core-settings
kind: project
owners:
  - Inno.Core.Settings
---
# Inno.Core.Settings

This project defines host-neutral settings persistence and effective project settings. It separates the document medium, stable setting protocol, contribution composer and active lookup. Start with [reading settings](../../manual/projects/read-settings.md) or [defining a setting](../../extending/project-settings.md).

## Settings ownership contract

`ProjectSettingsStore` owns one project's effective settings, contributor snapshot and revision. It borrows its document boundary, type catalog, serialization registry and complete owner-provided serialization context. Dispose the store before retiring those services. `IProjectSettingsLookup` exposes the read-only effective values without exposing authoring operations.

`Get` and successful `TryGet` reconstruct isolated setting objects. Their identity and CLR types belong to the active generation. The pair of owner ID and revision identifies the current effective snapshot within that owner's lifetime; it is neither a persistent project identifier nor a promise that candidate revisions survive rollback.

The store serializes its own operations with a lock. The lower-level `ProjectSettings` and document stores do not supply a general concurrent transaction boundary. Coordinate generation changes and related service operations through the host. Async execution scopes are strictly last-in-first-out, borrow the lookup, and do not dispose it. Using a disposed store fails as an uninitialized owner.

## Document model

`SettingsDocumentStore<TDocument>` loads, validates, captures and restores a serializable document from an explicit `IByteDocumentStore`. Missing optional documents produce validated, cloned defaults. Malformed existing data fails; required missing data fails. A default factory is not a corruption recovery policy.

Authoring composition uses `FileByteDocumentStore` and its atomic-file boundary. Runtime composition can capture content-lease bytes into `ReadOnlyByteDocumentStore`, whose owned byte snapshot rejects writes. Settings does not retain the content lease or secretly choose another filename. Editor, Build and Player hosts use the same document protocol with the medium appropriate to each product.

The generic document store does not accept an owner serialization context. Effective project contribution capture and restoration do: callers of `ProjectSettings` and `ProjectSettingsStore` provide their complete context explicitly.

## Composition and recovery

Definitions and optional composers are discovered through the actual type catalog. Effective state is built into neutral candidate records before it replaces the current in-memory set. Unavailable definitions retain neutral contributions for later recovery. Old generation objects and composer instances do not become permanent cache entries.

Project document authoring and generation rollback are different operations. Authoring attempts to restore persisted bytes when composition fails, but a second storage failure can prevent recovery. Generation rollback restores captured effective state, contributors and revision without persisting a document. Read the [composition procedure](../../extending/project-settings.md) before adding an owner or changing contribution semantics.

## API surfaces

The Runtime script projection exposes `Settings`, stable project/setting identity values, `ProjectIdentitySettings`, definition/composer attributes and the protocol composition types declared by this project's export manifest. Host stores, the document medium, registry and execution-context binding remain host APIs. A public source CLR declaration is not automatically a script export.

The project depends on Core Serialization and IO for data, Extensibility Types/Catalogs for discovery, Reload for the generation participant, and Core Execution for scoped lookup. It does not own Editor presentation, Plugin activation or the product's source lease.

## Reference

[Browse setting identities, document stores, lookup and composer declarations](../types/core-settings/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-core-settings/index.md)
