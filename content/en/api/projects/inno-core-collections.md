---
title: Inno.Core.Collections
description: Deterministic dependency relationships and reference-identity object indexes without resource lifecycle ownership.
uid: project.inno-core-collections
kind: project
owners:
  - Inno.Core.Collections
---
# Inno.Core.Collections

This foundation supplies two distinct containers: a keyed directed dependency graph and a dense object store with typed indexes. It owns collection structure, not the lifetimes of the objects or domain resources represented by its keys.

## Tasks

- [Order dependencies and inspect cycles](../../manual/data/order-dependencies.md).
- [Query objects through typed indexes](../../manual/data/query-objects.md).

## Graph and store contract

Dependency edges point from consumer to dependency. Cycles are accepted by mutation and explicitly rejected by operations that require a DAG. Topological order places dependencies first; a supplied comparer or insertion order makes eligible-node ordering deterministic. Internal synchronization does not make several calls one atomic domain transaction.

Object membership uses reference identity. Keys are explicit typed values, not automatically observed object properties. Unique collision rejects replacement; ordered keys require a comparer. Query planning chooses an indexed candidate seed before checking remaining conditions, and ordered ties use current dense position. Snapshots copy membership references, not object state. Fast enumeration requires no concurrent mutation and fails on detected version changes.

Store callbacks must not mutate or reenter public queries while a snapshot holds a nonrecursive read lock. Custom candidate sets must be complete for their conditions. Store locks do not synchronize the objects' own fields, and removal/clearing does not dispose them.

Use keys only with their original store and discard all keys after `Clear`. The current key representation lacks a reset epoch, so `isValid` is not a durable stale-handle guarantee after IDs are reused. `RemoveKey` relies on the caller supplying the exact owning store. `RemoveAll` preserves key definitions; `Clear` removes them. Weak key handles do not retain the store, and entry validity is membership rather than persistent engine identity.

## API reference

Browse the [exact types and member contracts](../types/core-collections/index.md) in the selected CLR surface. Each declaration links to its captured source and preserves its shared constraints.
