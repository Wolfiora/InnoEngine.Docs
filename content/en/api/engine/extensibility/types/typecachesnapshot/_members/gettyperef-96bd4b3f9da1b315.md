---
uid: api.96bd4b3f9da1b3151c9723287b2a8b565459b4ee2244020597231d31da8e272d
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.GetTypeRef(System.Type)"
source: xml
reviewed: 148c78609be8f219be2d58d48e101bd0ccd4466dd56dd7381f6475323dd7d71e
title: "GetTypeRef"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Gets the reference for a CLR type in this snapshot.

**Returns:** The logical and generation-local identity of `type`.

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the type does not belong to this snapshot.

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.
