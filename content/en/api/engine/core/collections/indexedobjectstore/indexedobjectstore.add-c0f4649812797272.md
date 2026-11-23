---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c0f4649812797272e11f8f1c00a38b898c381cb01c0922627dbf61805658225d
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.Add(`0)
title: IndexedObjectStore<T>.Add
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: db94aa2031b9ada7c9111ebf0501454c9f2d8fdbd5f2fc27e3de81fa62e324a8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- "Adds an object to the store and returns an entry that you use to assign its key values."
outdated: false
---

## Parameters

- `item`: The object to add. It must not be `null`.

## Returns

An [`IndexedObjectEntry<T>`](../indexedobjectentry/index.md) for `item`. Call its `Set` method to give the object a value for each key you want to search by. `Set` returns the same entry, so you can chain several calls.

## Exceptions

- `ArgumentNullException`: `item` is `null`.

## Remarks

A newly added object has no key values, so key-based lookups such as [`Find`](indexedobjectstore.find-c7fa0d3ee4ca52e8.md) do not return it until you call `Set`. It does appear in [`All`](indexedobjectstore.all-5d7c2c08031cd39e.md) and in [`count`](indexedobjectstore.count-a8b0adea422bddbd.md) immediately.

Membership uses reference identity. If `item` is already in the store, `Add` changes nothing and returns an entry for the existing membership; its key values are kept.

## See also

- [`Remove`](indexedobjectstore.remove-76c03ef768541948.md)
- [`DefineKey`](indexedobjectstore.definekey-706f9bbc985d3738.md)
