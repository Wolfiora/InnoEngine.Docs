---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8d0b3e9c9f8df92c32554b5d14cdc533ca2a0252f17c68af0771048672f561be
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphNodeID,InnoEditor.Rendering.Shaders.ShaderGraphInputSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphBindings.ChangeInput
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: 6f5f078e5b4e42d80317db8d451f46bd2091cdcfdf63846fac447a53529a31a5
apiScope: Editor
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
