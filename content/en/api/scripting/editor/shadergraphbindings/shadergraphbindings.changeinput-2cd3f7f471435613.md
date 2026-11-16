---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2cd3f7f4714356130e109b50522a3bff6ec73640a008c3924f11c4c0709cd1ae
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphNodeId,InnoEditor.Rendering.Shaders.ShaderGraphInputSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphBindings.ChangeInput
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 90181454615724d9f3b428cf2ddee27407bc0216347c677e1a8b2da6ed21d5cd
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
