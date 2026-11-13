---
uid: api.ee5d4c9d3f8b0e8b4d4bd73be8af359004be8f8afb0829212f42fa7ede80c229
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 31d9d813d50ce1ce3936a26553cc678979ed002a63f0b5b54f17c0b2ce842c0c
title: "ReadDefinition"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads the material and pass contract without evaluating or altering the graph.

**Parameter `graph`:** Native shader graph.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached contract; missing or corrupt metadata is an explicit error.
