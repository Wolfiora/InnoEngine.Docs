---
uid: api.2cd3f7f4714356130e109b50522a3bff6ec73640a008c3924f11c4c0709cd1ae
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphNodeId,InnoEditor.Rendering.Shaders.ShaderGraphInputSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 209e35fefbd5c0a2e3d82726d044c2e62b07a05b1eac358e19b7ec1820c018c7
title: "ShaderGraphBindings.ChangeInput"
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
