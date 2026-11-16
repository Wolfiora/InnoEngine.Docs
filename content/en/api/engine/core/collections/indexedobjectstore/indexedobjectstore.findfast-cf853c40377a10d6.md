---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cf853c40377a10d6e76866145ec98723612f6fb83319c866bf230beb6cb5c331
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.FindFast``1(Inno.Core.Collections.IndexedObjectKey{``0},``0)
title: IndexedObjectStore<T>.FindFast
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 564c8968facc481246de679a902b443037ac76355181c4943615680e4f525406
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Enumeration throws if the store is modified during iteration.

## Type parameters

**Type parameter `TKey`:** Key type.

## Parameters

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

## Returns

Lazy fail-fast enumerable of matching items.
