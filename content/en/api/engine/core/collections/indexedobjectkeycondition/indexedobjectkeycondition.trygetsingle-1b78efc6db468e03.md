---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1b78efc6db468e03889fd90d60ac606259cec03de334a9a2957187cabc26f274
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectKeyCondition`2.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{`0},`0@)
title: IndexedObjectKeyCondition<T, TKey>.TryGetSingle
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 42ec00b48bd40b30288d8c043ea97de73a9176376dae289b78caf712db43b5d1

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Attempts to get single without changing state when the operation cannot complete.

## Parameters

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
