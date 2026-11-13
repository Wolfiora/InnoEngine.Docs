---
uid: api.cf853c40377a10d6e76866145ec98723612f6fb83319c866bf230beb6cb5c331
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore\u00601.FindFast\u0060\u00601(Inno.Core.Collections.IndexedObjectKey{\u0060\u00600},\u0060\u00600)"
source: xml
reviewed: 564c8968facc481246de679a902b443037ac76355181c4943615680e4f525406
title: "FindFast"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Finds items by key and returns a lazy fail-fast enumerable.

## Remarks

Enumeration throws if the store is modified during iteration.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

**Returns:** Lazy fail-fast enumerable of matching items.
