---
uid: api.a507b3badd0988be0d5b5d888a1b4498c53aa2940a3e4a43563448627558dbb4
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadTarget(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 04881ddb99e4c407f01447e768050c3ae35ba955c9c5a0895734e1d36b9c7100
title: "ReadTarget"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads the stable domain target assignment without resolving extension instances.

**Parameter `graph`:** Authored graph.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** The assigned stable ID, or an empty string for generic explicit stage authoring.
