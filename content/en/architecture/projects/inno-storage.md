---
title: Inno.Storage
description: Logical application storage keys, namespaces and asynchronous complete-value operations.
uid: project.inno-storage
kind: project
owners:
  - Inno.Storage
---
# Inno.Storage

Application storage persists complete byte values inside a logical application namespace. This project defines keys, scopes, asynchronous operations and a script facade. It does not define save slots, schemas, autosave scheduling or cloud synchronization.

## Start with a task

[Save and load application data](../../manual/storage/save-data.md) explains complete-value writes and missing values. Host composition chooses a provider through [Inno.Adapter.Storage](inno-adapter-storage.md); [Inno.Storage.Runtime](inno-storage-runtime.md) owns asynchronous work during a session.

## Keys and namespaces

`StorageKey` identifies a value relative to its sandbox. It normalizes separators to slashes and rejects rooted paths, whitespace-only or interior empty segments, `.`/`..` and colon-qualified segments. A trailing separator normalizes away. A default struct is unassigned; check `isValid` where an optional value enters a boundary. Keys are not absolute host paths.

`StorageScope` identifies the application namespace independently of physical location. It is case-sensitive and accepts ASCII letters, digits, dots, underscores and hyphens, with no leading/trailing dot or reserved portable device name. The host's application identity or explicit configuration chooses the scope. Backend configuration chooses where it lives.

Editor Edit, Play and project composition keep their namespaces isolated. Do not introduce an engine product-directory prefix into a game's logical keys. A browser implementation maps its namespace within origin storage; a filesystem implementation uses its host-selected root.

## Operation and ownership contract

All five operations accept cancellation. `ExistsAsync` reports presence; `ReadAsync` returns complete bytes or null for an absent value. `WriteAsync` atomically replaces one complete value. `DeleteAsync` returns false when it was already absent. `ListAsync` accepts an optional logical prefix and returns a key snapshot in ordinal order.

Atomic replacement applies to one operation. A write followed by a read, or a sequence of writes to different keys, is not a multi-operation transaction. The application owns its serialized format and coordination between writers.

`StorageExecutionContext` borrows a service through the shared strict last-in-first-out execution scope. The static `Storage` facade has no independent state and fails explicitly outside an active scope. Session integration owns the service and accepted asynchronous work; facade callers do not dispose it themselves. Await operations and pass the appropriate cancellation token. Completion does not promise a return to the UI owner thread.

## API reference

The selected source declarations describe the host CLR contract. Script use requires the actual Runtime projection and its own names and availability.

[Browse storage types](../../api/engine/storage/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
