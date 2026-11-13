---
uid: api.c7fa0d3ee4ca52e8f60d43bf9a0306c276d2baf02f76946d090e2b6f23dfe2e7
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore\u00601.Find\u0060\u00601(Inno.Core.Collections.IndexedObjectKey{\u0060\u00600},\u0060\u00600)"
source: xml
reviewed: 8e41ac6097e544fed2561a2c7dfae92c99d9a38733e69583c92920976c97aa99
title: "IndexedObjectStore\u003CT\u003E.Find"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Finds items by key and returns a stable snapshot.

## Remarks

The returned list is detached from subsequent store mutations.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

**Returns:** A stable snapshot list of matching items.
