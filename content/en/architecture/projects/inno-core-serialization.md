---
title: Inno.Core.Serialization
description: Deterministic current-format values, explicit metadata, converter generations and neutral captures.
uid: project.inno-core-serialization
kind: project
owners:
  - Inno.Core.Serialization
---
# Inno.Core.Serialization

This foundation provides one metadata-driven value pipeline for root objects, structured schemas, independent properties and immutable snapshots. It does not own domain identities, filesystem publication, Inspector presentation or old-schema migration.

## Tasks

- [Save and restore declared state](../../manual/serialization/save-state.md).
- [Restore properties across a reload](../../manual/serialization/restore-properties.md).
- [Capture immutable snapshots](../../manual/serialization/capture-snapshots.md).
- [Implement a converter](../../extending/serialization-converters.md).
- [Select metadata for deployment](../../extending/serialization-metadata.md).

## Operation and generation contract

The registry borrows the owning type catalog and explicit metadata provider and owns converter generations. Capture a generation when an operation boundary must survive an asynchronous continuation or reload; dispose the lease after all its work finishes. Metadata, converters, live properties and context services must not outlive their owning generation. A lease does not establish thread safety for those objects.

Readers and writers are borrowed for active synchronous operations; snapshot converter writers expire with the callback. Keep source state stable and supply complete owner reference services. Context lookup uses exact contract types. Core binds its own registry/catalog/provider while preserving other caller services.

Current binary formats are strict. Duplicate member keys, cycles without explicit reference handling, unsupported declarations and equally applicable converters fail. `TryRead` distinguishes a missing member from malformed present data. Completion begins only after value processing succeeds; callbacks already executed and arbitrary setter side effects are not automatically rolled back on later failure.

`CollectFailures` reports recoverable independent property failures and removes their queued completion work. It does not provide general transactional rollback or an old-schema reader. Neutral property-data bytes cross reload boundaries; in-memory property snapshots can retain the old `Type` and must not be retained as unload-safe state.

Immutable serialization snapshots retain neutral values only. Their byte arrays are detached and their stream destination remains caller-owned. Complete capture remains authoritative unless an explicit, generation-qualified key proves all output, context and ordering inputs. Missing proof does not weaken change detection. Capture builders belong only to their current synchronous callback and thread.

Runtime script declarations include selected value, attribute, reader/writer and converter contracts under `InnoEngine.Serialization`. The registry is Editor-only and excludes host construction, generation management, metadata and snapshot capture. Host CLR availability does not establish that a member is present in a selected script projection.

## Design and implementation

Read [serialization and generation ownership](../serialization.md) for converter resolution, metadata composition, completion order and the shared neutral encoding model. Reflection belongs to the explicit DotNet adapter; static access belongs to generated catalogs. Neither is an implicit fallback in Core.

## API reference

Browse the [exact declarations and member contracts](../../api/engine/core/serialization/index.md) in the selected CLR inventory. Source and script-projection certification remain separate.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
- [Editor script API](../../api/scripting/index.md)
