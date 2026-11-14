---
uid: api.b365d0694e8e7f9cdada1f517f080530cb8f077acdff57a415b37c580e642644
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderParameterPresentation.Write(InnoEngine.Graphs.GraphDocument,InnoEngine.Rendering.ShaderPropertyId,InnoEditor.Shaders.ShaderParameterPresentation,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: c2f87e0487740e3798078ccc203e43da634fd9ac48f682256743b6288534ce44
title: "ShaderParameterPresentation.Write"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Writes presentation to a detached graph without changing any default, Material, or compiled program.

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyId`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

**Exception `T:System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.
