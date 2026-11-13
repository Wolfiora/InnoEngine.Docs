---
uid: api.2912e6e41e9982695646e201c21f6c26c8d2ddf0d66cba1aa0357006ca6e91bd
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectPredicateCondition\u00601.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{\u00600},\u00600@)"
source: xml
reviewed: c5ba187e487841f49829227991eaea149d5b6508eb57b01ce6b6f66fdb746249
title: "TryGetSingle"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Attempts to get single without changing state when the operation cannot complete.

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
