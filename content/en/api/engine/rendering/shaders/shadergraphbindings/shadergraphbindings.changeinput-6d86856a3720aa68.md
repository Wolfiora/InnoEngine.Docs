---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6d86856a3720aa680f0e1d5d73fa9c5fb500b64b7575078aeb349e30a1bba19d
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphBindings.ChangeInput(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderGraphInputSettings,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphBindings.ChangeInput
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 5d1d19b1412424e00ed66286d1b09fca3b7b92b8f51207362fa415c3ff77a483
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
