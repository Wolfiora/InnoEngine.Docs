---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.collections.84ed5bf6909ff544
symbol: engine:Inno.Core.Collections:T:Inno.Core.Collections.IndexedObjectStore`1
title: IndexedObjectStore<T>
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: 95c00ddec1ea40c0eebe81877f7e5bc22494a8366aff4bc8f9f6336d121548e5
contracts:
- project.inno-core-collections#graph-and-store-contract

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- "A thread-safe collection of objects that you can look up by named, typed keys instead of scanning every item."
outdated: false
aliases: []
---

## Overview

`IndexedObjectStore<T>` holds a set of reference-type objects and lets you attach searchable values to them. Each searchable value belongs to a *key*: a named, typed index that you define once on the store. You can then find objects by key value, combine several conditions in a query, or read items in key order.

The store tracks membership by reference identity. Adding the same object twice keeps one entry, and two different objects with equal contents remain two entries.

Keys are explicit. The store never reads properties from your objects; it only knows the values you assign with [`IndexedObjectEntry<T>.Set`](../indexedobjectentry/indexedobjectentry.set-b2a4dc992cee91c3.md).

## How to use

1. Create the store, then call [`DefineKey`](indexedobjectstore.definekey-706f9bbc985d3738.md) once for each value you want to search by. Keep the returned key handle.
2. Call [`Add`](indexedobjectstore.add-c0f4649812797272.md) for each object and chain `Set` on the returned entry to assign key values.
3. Look objects up with [`Find`](indexedobjectstore.find-c7fa0d3ee4ca52e8.md) or [`First`](indexedobjectstore.first-e5dca9aff8556c1b.md), or combine conditions with [`Query`](indexedobjectstore.query-1c92df4c506cf671.md).
4. Call [`Remove`](indexedobjectstore.remove-76c03ef768541948.md) when an object leaves the collection. The store removes it from every key at the same time.

## Snapshot and fast reads

Most read methods come in two forms:

- **Snapshot** methods, such as `Find` and `All`, copy the matching references into a new list. Later changes to the store do not affect that list.
- **Fast** methods, such as `FindFast` and `AllFast`, enumerate lazily without copying. They are cheaper, but enumeration throws `InvalidOperationException` if the store changes before you finish.

Use a snapshot when you might add or remove items while processing the results.

## Threading

Every public method is safe to call from several threads. Each call is atomic on its own; a sequence of calls is not one transaction. The store's lock does not protect the fields of the objects you store, and removing or clearing items does not dispose them.

## Type parameters

- `T`: The type of object to store. It must be a reference type.

## See also

- [Graph and store contract](../../../../../architecture/projects/inno-core-collections.md#graph-and-store-contract)
- [`IndexedObjectKeyFlags`](../indexedobjectkeyflags/index.md) for unique and ordered keys
- [`IndexedObjectQuery<T>`](../indexedobjectquery/index.md) for multi-condition queries
