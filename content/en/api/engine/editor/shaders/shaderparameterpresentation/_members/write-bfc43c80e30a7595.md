---
uid: api.bfc43c80e30a75950a6417ade34e7e8ade96ba12ad9d2828a4ec011eaebe2de7
symbol: "engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.ShaderParameterPresentation.Write(Inno.Core.Graphs.GraphDocument,Inno.Rendering.ShaderPropertyId,Inno.Editor.Shaders.ShaderParameterPresentation,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 27060b04acf06a5e7a76b066f4489665d4a18344dd8ff2c7355cd9d215df7925
title: "Write"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: source-clr
---

Writes presentation to a detached graph without changing any default, Material, or compiled program.

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyId`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

**Exception `T:System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.
