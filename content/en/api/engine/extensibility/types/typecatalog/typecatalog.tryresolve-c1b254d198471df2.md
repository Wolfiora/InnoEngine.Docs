---
uid: api.c1b254d198471df2ff24f523acd7d35c980a2c5e21f7efe45d29dc25633086ce
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.TryResolve(Inno.Extensibility.Types.TypeRef,System.Type@)"
source: xml
reviewed: 36afd4020205f379f66e0dc5eaa340a3c80bb281a478bd357eaa3891dc85d2ab
title: "TypeCatalog.TryResolve"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Attempts to resolve a logical type reference against the active immutable generation.

## Parameters

**Parameter `typeRef`:** The stable type reference to resolve.

**Parameter `type`:** Receives the active CLR type when resolution succeeds.

## Returns

`true` when the active generation contains the logical type.
