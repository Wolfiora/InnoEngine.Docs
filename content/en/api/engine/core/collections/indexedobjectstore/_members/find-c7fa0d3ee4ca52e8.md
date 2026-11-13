---
uid: api.c7fa0d3ee4ca52e8f60d43bf9a0306c276d2baf02f76946d090e2b6f23dfe2e7
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore\u00601.Find\u0060\u00601(Inno.Core.Collections.IndexedObjectKey{\u0060\u00600},\u0060\u00600)"
source: xml
reviewed: f466b48d5ff6eef5575b4d299790bf4f18ea5bd41222b58b08743d1bb3dd013e
title: "Find"
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
