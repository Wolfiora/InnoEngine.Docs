---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1b78efc6db468e03889fd90d60ac606259cec03de334a9a2957187cabc26f274
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectKeyCondition`2.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{`0},`0@)
title: IndexedObjectKeyCondition<T, TKey>.TryGetSingle
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 07d87e05a9a87154ed2c7a6da63d4c58378eb2d2a8548f0918fa02389df9ded7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
