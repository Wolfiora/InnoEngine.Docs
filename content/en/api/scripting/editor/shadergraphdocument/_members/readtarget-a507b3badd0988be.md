---
uid: api.a507b3badd0988be0d5b5d888a1b4498c53aa2940a3e4a43563448627558dbb4
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadTarget(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: b517f7646768f85c4b192eb77fb78bfd4fba73d6c658a4c98ccb9d3d9cde84fc
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
