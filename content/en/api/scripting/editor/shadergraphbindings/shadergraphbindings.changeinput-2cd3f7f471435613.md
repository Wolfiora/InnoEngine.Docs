---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2cd3f7f4714356130e109b50522a3bff6ec73640a008c3924f11c4c0709cd1ae
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphNodeId,InnoEditor.Rendering.Shaders.ShaderGraphInputSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphBindings.ChangeInput
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 209e35fefbd5c0a2e3d82726d044c2e62b07a05b1eac358e19b7ec1820c018c7
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a detached candidate with the input and its material/resource declaration updated together.

## Parameters

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeId`:** Stage input node identity.

**Parameter `settings`:** New input settings, including incomplete values while typing.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for texture defaults.

## Returns

A serializable candidate. Invalid input remains visible for normal graph validation.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity does not name a stage input node.
