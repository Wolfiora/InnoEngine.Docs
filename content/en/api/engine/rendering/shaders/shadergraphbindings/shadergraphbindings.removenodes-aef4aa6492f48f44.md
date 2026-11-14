---
uid: api.aef4aa6492f48f44694bf5a753f8cdfa915c115abaa365af85b2cf7b242af3c7
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 37430a5e99064131a9733b99b2c09a44784b0a806175e88ecd8c8786c9b39367
title: "ShaderGraphBindings.RemoveNodes"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Removes selected nodes, stage-owned nodes and declarations which lose their last graph owner.

## Parameters

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeIds`:** Explicitly selected node identities. Deleting an output also deletes its stage contents.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for material defaults.

## Returns

A detached candidate suitable for one atomic history entry; unrelated incomplete content is retained.

## Exceptions

**Exception `T:System.ArgumentException`:** A selected identity is not in the document.
