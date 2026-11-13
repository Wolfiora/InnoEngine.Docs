---
uid: api.0286ae44d4ab85c75bc4cb1695837d3d5567eda37e276d5097b43742e0817ae2
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphClipboard.Paste(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphDocument,System.Boolean,System.Nullable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: ca711b749b9674e112824d6d2b54ff55b2d50e4e394f36d9fa888cfa25afeb93
title: "Paste"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a detached paste candidate with new node identities and remapped program, Pass and Technique references.

**Parameter `graph`:** Destination document, never changed.

**Parameter `fragment`:** Detached copied fragment, never changed.

**Parameter `preserveExternalStageReferences`:** Whether references to existing destination stages belong to the same document.

**Parameter `activeStage`:** Destination stage for copied non-stage nodes.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** A complete candidate suitable for one History transaction.
