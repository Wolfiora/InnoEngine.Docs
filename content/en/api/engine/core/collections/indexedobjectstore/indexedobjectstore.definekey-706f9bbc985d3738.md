---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.706f9bbc985d37388b219d3f1a97c391d09461233a850f6e9ef6285652a262c8
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.DefineKey``1(System.String,Inno.Core.Collections.IndexedObjectKeyFlags,System.Collections.Generic.IComparer{``0})
title: IndexedObjectStore<T>.DefineKey
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: c16812b25633924b914259982bf610a2c08830e6dbe2f17045cefa00597e996e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TKey`:** Key type.

## Parameters

**Parameter `name`:** Unique key name.

**Parameter `flags`:** Key behavior flags.

**Parameter `orderComparer`:** Optional order comparer. Required when `F:Inno.Core.Collections.IndexedObjectKeyFlags.Ordered` is set.

## Returns

The created key handle.
