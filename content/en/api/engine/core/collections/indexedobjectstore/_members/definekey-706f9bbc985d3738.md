---
uid: api.706f9bbc985d37388b219d3f1a97c391d09461233a850f6e9ef6285652a262c8
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore\u00601.DefineKey\u0060\u00601(System.String,Inno.Core.Collections.IndexedObjectKeyFlags,System.Collections.Generic.IComparer{\u0060\u00600})"
source: xml
reviewed: 638e0c6f6a3c9b0a0cce6a1397fc51a2dea844108987bc2a5f60c303735fd4bf
title: "DefineKey"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Defines a query key over stored items.

**Type parameter `TKey`:** Key type.

**Parameter `name`:** Unique key name.

**Parameter `flags`:** Key behavior flags.

**Parameter `orderComparer`:** Optional order comparer. Required when `F:Inno.Core.Collections.IndexedObjectKeyFlags.Ordered` is set.

**Returns:** The created key handle.
