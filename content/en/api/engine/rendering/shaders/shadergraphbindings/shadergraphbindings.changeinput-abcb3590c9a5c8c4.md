---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.abcb3590c9a5c8c4823b1a628ad8a2cdde2a903eeb2f58e6d8a26422a5ea3456
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphBindings.ChangeInput(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphNodeID,Inno.Rendering.Shaders.ShaderGraphInputSettings,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphBindings.ChangeInput
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 3cef7867c3357babc1470b0664572bf1037b979dc665618006d4d0691dc6d5e4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeID`:** Stage input node identity.

**Parameter `settings`:** New input settings, including incomplete values while typing.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for texture defaults.

## Returns

A serializable candidate. Invalid input remains visible for normal graph validation.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity does not name a stage input node.
