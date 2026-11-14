---
uid: api.8594453f19f2cb077f27df7cbf4415ddc54d7a1e149bfbabb7edb804e23b012e
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(InnoEngine.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 752a5fa15e295720dd17584e85794a522a1bee51c6ad8f895f499097b552c631
title: "ShaderGraphBindings.RemoveNodes"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Removes selected nodes, stage-owned nodes and declarations which lose their last graph owner.

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeIds`:** Explicitly selected node identities. Deleting an output also deletes its stage contents.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for material defaults.

**Returns:** A detached candidate suitable for one atomic history entry; unrelated incomplete content is retained.

**Exception `T:System.ArgumentException`:** A selected identity is not in the document.
