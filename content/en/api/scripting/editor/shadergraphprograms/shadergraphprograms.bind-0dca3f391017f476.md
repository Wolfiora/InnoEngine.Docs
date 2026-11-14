---
uid: api.0dca3f391017f47671a3d4fdcbcd07c0586f38f9715d515f6c2d803383b22958
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Bind(InnoEngine.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: fdf1f3a37fc86f96c0bbe41e44e27aac15e559884d18aed8a0c9f8325d062f2f
title: "ShaderGraphPrograms.Bind"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Assigns existing shared stages to one pass in an atomic detached candidate.

## Parameters

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `stages`:** Existing stage output node identities; an empty set preserves an incomplete pass.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

## Returns

A candidate suitable for one shared History transaction.
