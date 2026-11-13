---
uid: api.2cd3f7f4714356130e109b50522a3bff6ec73640a008c3924f11c4c0709cd1ae
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphNodeId,InnoEditor.Rendering.Shaders.ShaderGraphInputSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: fb7bc6802be6b9ac7b09cce7ff33ee5262c4c2a1040c9f64eee317cf45b31c5b
title: "ChangeInput"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a detached candidate with the input and its material/resource declaration updated together.

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeId`:** Stage input node identity.

**Parameter `settings`:** New input settings, including incomplete values while typing.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for texture defaults.

**Returns:** A serializable candidate. Invalid input remains visible for normal graph validation.

**Exception `T:System.ArgumentException`:** The identity does not name a stage input node.
