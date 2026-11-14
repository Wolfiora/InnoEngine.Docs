---
uid: api.ee5d4c9d3f8b0e8b4d4bd73be8af359004be8f8afb0829212f42fa7ede80c229
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 517a0705c739b09c2fd2ccc90191e77336ac9bc446578e04ec696947ac3c904a
title: "ShaderGraphDocument.ReadDefinition"
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
