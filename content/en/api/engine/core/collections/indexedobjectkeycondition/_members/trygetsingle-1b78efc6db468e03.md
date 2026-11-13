---
uid: api.1b78efc6db468e03889fd90d60ac606259cec03de334a9a2957187cabc26f274
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectKeyCondition\u00602.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{\u00600},\u00600@)"
source: xml
reviewed: 42ec00b48bd40b30288d8c043ea97de73a9176376dae289b78caf712db43b5d1
title: "TryGetSingle"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Attempts to get single without changing state when the operation cannot complete.

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
