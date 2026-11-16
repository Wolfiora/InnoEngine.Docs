---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bfc43c80e30a75950a6417ade34e7e8ade96ba12ad9d2828a4ec011eaebe2de7
symbol: engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.ShaderParameterPresentation.Write(Inno.Core.Graphs.GraphDocument,Inno.Rendering.ShaderPropertyId,Inno.Editor.Shaders.ShaderParameterPresentation,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderParameterPresentation.Write
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: source-clr
reviewed: a2434c6df547fbb70b83cede3a4e51e8e5ca2e56889e5f484293bb7421c2886d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyId`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.
