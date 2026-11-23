---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c7fa0d3ee4ca52e8f60d43bf9a0306c276d2baf02f76946d090e2b6f23dfe2e7
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.Find``1(Inno.Core.Collections.IndexedObjectKey{``0},``0)
title: IndexedObjectStore<T>.Find
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: 609622884429066bcf5ad38610286a68fb3dc3dab34f6bb474ea2e64a2bcefd7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- "Returns every stored object whose key has the given value, as a list that later store changes do not affect."
outdated: false
---

## Type parameters

- `TKey`: The value type of the key. It matches the type you used in [`DefineKey`](indexedobjectstore.definekey-706f9bbc985d3738.md).

## Parameters

- `key`: The key to search. Use the handle returned by `DefineKey` or [`TryGetKey`](indexedobjectstore.trygetkey-9934ffbbe6134428.md) on this same store.
- `value`: The key value to match.

## Returns

A new read-only list of the matching objects. The list is empty when nothing matches. It is a snapshot: adding or removing items afterwards does not change it.

## Exceptions

- `InvalidOperationException`: `key` was defined on a different store, was removed, or no longer exists because the store was cleared.

## Remarks

Use [`FindFast`](indexedobjectstore.findfast-cf853c40377a10d6.md) to avoid the copy when you will not modify the store while reading the results. Use [`First`](indexedobjectstore.first-e5dca9aff8556c1b.md) when you need only one match, for example with a unique key.
