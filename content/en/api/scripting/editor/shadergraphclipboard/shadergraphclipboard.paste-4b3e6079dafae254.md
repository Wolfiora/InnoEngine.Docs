---
uid: api.4b3e6079dafae2546ecd02b5dc9c033f16b513dfdf267490c59f3183bb7610d8
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Paste(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphDocument,System.Boolean,System.Nullable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: ab06e617a32b5e2c4d9b1021b7a8624ceb765144cd5b91549a0e9d0bf158604f
title: "ShaderGraphClipboard.Paste"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a detached paste candidate with new node identities and remapped program, Pass and Technique references.

**Parameter `graph`:** Destination document, never changed.

**Parameter `fragment`:** Detached copied fragment, never changed.

**Parameter `preserveExternalStageReferences`:** Whether references to existing destination stages belong to the same document.

**Parameter `activeStage`:** Destination stage for copied non-stage nodes.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** A complete candidate suitable for one History transaction.
