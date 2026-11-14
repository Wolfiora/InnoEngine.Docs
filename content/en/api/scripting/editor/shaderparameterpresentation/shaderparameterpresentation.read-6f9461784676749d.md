---
uid: api.6f9461784676749ddae91b46daebd3346c01bda6baf552f12038b23057e91fb4
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderParameterPresentation.Read(InnoEngine.Graphs.GraphDocument,InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: d6419bdaa11197ee4f041d1d902a1e2bfc386b98d7c3f62c45a793c71af21c8f
title: "ShaderParameterPresentation.Read"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads detached presentation for one binding, defaulting only when no presentation was authored.

## Parameters

**Parameter `graph`:** Authoring graph, not a runtime Shader program.

**Parameter `propertyId`:** Stable parameter identity shared by all its nodes.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

## Returns

The authored presentation, or ordinary visible, unbounded defaults.
