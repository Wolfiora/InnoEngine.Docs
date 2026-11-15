---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e0fa3cfc2d2011dce2d8aa4ca7f8e301d1d882fcadcb2a487812e207c48c3903
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetPropertySnapshot.#ctor(System.Guid,System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{InnoEngine.Assets.AssetDependency})
title: AssetPropertySnapshot.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 94ebfa63ecae82a96ab197449d534ef1f112a273ecb73a2d195cbbf09bb905d9
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Freezes a complete owner-produced property value.

## Parameters

**Parameter `stableTypeId`:** Persistent identity of the exact serialized settings type.

**Parameter `data`:** Native property payload, copied before returning.

**Parameter `dependencies`:** Direct dependencies collected during the same serialization operation.
