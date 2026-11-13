---
uid: api.1b78efc6db468e03889fd90d60ac606259cec03de334a9a2957187cabc26f274
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectKeyCondition\u00602.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{\u00600},\u00600@)"
source: xml
reviewed: fe7c6d105ed75801e99b6fa5a67a1cc487d7cd8fda0d12f0d29b9a4a37f97271
title: "TryGetSingle"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Attempts to get single without changing state when the operation cannot complete.

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
