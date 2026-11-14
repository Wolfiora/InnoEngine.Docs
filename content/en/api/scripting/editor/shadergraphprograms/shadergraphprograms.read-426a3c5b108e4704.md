---
uid: api.426a3c5b108e4704a230d081f61b80ba3d411be1451ef63dd8c4b6d3435e53c1
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Read(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 03db4ca69434c23a27f03dab76912606e813e6949e189942fd0ebfdf1e480cf1
title: "ShaderGraphPrograms.Read"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads detached pass-to-stage references, including unresolved authored identities.

## Parameters

**Parameter `graph`:** Shader authoring document.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

## Returns

Detached native references; corrupt or missing program metadata is an error.
