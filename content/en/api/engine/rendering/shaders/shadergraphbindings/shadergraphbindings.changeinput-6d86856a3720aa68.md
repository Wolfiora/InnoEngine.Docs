---
uid: api.6d86856a3720aa680f0e1d5d73fa9c5fb500b64b7575078aeb349e30a1bba19d
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphBindings.ChangeInput(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderGraphInputSettings,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 64003e2c62a87b4b389aa2a09b35a1ae6d568e0b2afb1a1c64d6486e300724ed
title: "ShaderGraphBindings.ChangeInput"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
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
