---
uid: api.53520e6a393470d14232482f47ba4e8f3a80fd58084668a9ae3534fb1df73a50
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheReloadContext.TryResolveReplacement(Inno.Extensibility.Types.TypeRef,Inno.Extensibility.Types.TypeRef@)"
source: xml
reviewed: f11772455300d17b9234821b486accd5c65d5064d159c87348dfe616ddf8ca25
title: "TryResolveReplacement"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Tries to find the candidate type that preserves a retiring type's stable identity.

**Parameter `previousType`:** A type reference from the previous generation.

**Parameter `replacement`:** Receives its candidate replacement when found.

**Returns:** `true` when a distinct replacement exists.
