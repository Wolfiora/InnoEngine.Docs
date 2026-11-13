---
uid: api.e0fa3cfc2d2011dce2d8aa4ca7f8e301d1d882fcadcb2a487812e207c48c3903
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetPropertySnapshot.#ctor(System.Guid,System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{InnoEngine.Assets.AssetDependency})"
source: xml
reviewed: 2550a924d9172d1d1dca5c6d5d4b9d81788dd5a21d6146dac4f2c584e5b2f8d4
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Freezes a complete owner-produced property value.

**Parameter `stableTypeId`:** Persistent identity of the exact serialized settings type.

**Parameter `data`:** Native property payload, copied before returning.

**Parameter `dependencies`:** Direct dependencies collected during the same serialization operation.
