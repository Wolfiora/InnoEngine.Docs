---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cf853c40377a10d6e76866145ec98723612f6fb83319c866bf230beb6cb5c331
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.FindFast``1(Inno.Core.Collections.IndexedObjectKey{``0},``0)
title: IndexedObjectStore<T>.FindFast
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: 60838e9a10fc8f19fa8dde93dd469023fe988c772de38d04731a97f11f9cbbe9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- "Enumerates the stored objects whose key has the given value, without copying them first."
outdated: false
---

## Type parameters

- `TKey`: The value type of the key. It matches the type you used in [`DefineKey`](indexedobjectstore.definekey-706f9bbc985d3738.md).

## Parameters

- `key`: The key to search. Use a handle defined on this same store.
- `value`: The key value to match.

## Returns

A lazy sequence of the matching objects. Nothing is read until you start enumerating it.

## Exceptions

- `InvalidOperationException`: `key` does not belong to this store or no longer exists.
- `InvalidOperationException`: during enumeration, if the store is modified before enumeration finishes.

## Remarks

`FindFast` avoids allocating a result list. In exchange, you must not add, remove or re-key items while you enumerate. If your loop body may change the store, use [`Find`](indexedobjectstore.find-c7fa0d3ee4ca52e8.md), which returns an independent snapshot.
