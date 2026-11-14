---
uid: api.82acc0a21f163c1f7dc51f1900bf47ce97721af5329f40315642f59d00c9aa12
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetPropertySnapshot.#ctor(System.Guid,System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{Inno.Assets.AssetDependency})"
source: xml
reviewed: 08749ead0a435bc0955214d23fa538f00a1e332907ebf4950c2d50dcf633cbf4
title: "AssetPropertySnapshot.Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Freezes a complete owner-produced property value.

## Parameters

**Parameter `stableTypeId`:** Persistent identity of the exact serialized settings type.

**Parameter `data`:** Native property payload, copied before returning.

**Parameter `dependencies`:** Direct dependencies collected during the same serialization operation.
