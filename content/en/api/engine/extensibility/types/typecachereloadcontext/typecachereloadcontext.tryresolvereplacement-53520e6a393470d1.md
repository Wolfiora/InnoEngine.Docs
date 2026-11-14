---
uid: api.53520e6a393470d14232482f47ba4e8f3a80fd58084668a9ae3534fb1df73a50
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheReloadContext.TryResolveReplacement(Inno.Extensibility.Types.TypeRef,Inno.Extensibility.Types.TypeRef@)"
source: xml
reviewed: 4b7463de70f6f04c65051c6123535acd64aeb01af9548b74b7809c8872bce2fb
title: "TypeCacheReloadContext.TryResolveReplacement"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Tries to find the candidate type that preserves a retiring type's stable identity.

## Parameters

**Parameter `previousType`:** A type reference from the previous generation.

**Parameter `replacement`:** Receives its candidate replacement when found.

## Returns

`true` when a distinct replacement exists.
