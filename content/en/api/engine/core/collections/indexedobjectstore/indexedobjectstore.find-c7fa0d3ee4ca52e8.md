---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c7fa0d3ee4ca52e8f60d43bf9a0306c276d2baf02f76946d090e2b6f23dfe2e7
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.Find``1(Inno.Core.Collections.IndexedObjectKey{``0},``0)
title: IndexedObjectStore<T>.Find
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 8e41ac6097e544fed2561a2c7dfae92c99d9a38733e69583c92920976c97aa99

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Finds items by key and returns a stable snapshot.

## Remarks

The returned list is detached from subsequent store mutations.

## Type parameters

**Type parameter `TKey`:** Key type.

## Parameters

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

## Returns

A stable snapshot list of matching items.
