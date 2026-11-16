---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4b3e6079dafae2546ecd02b5dc9c033f16b513dfdf267490c59f3183bb7610d8
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Paste(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphDocument,System.Boolean,System.Nullable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphClipboard.Paste
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 4b217b3b6778428a837fe50026af8e73bd2a0339083f855058767af7d72ee42d
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Destination document, never changed.

**Parameter `fragment`:** Detached copied fragment, never changed.

**Parameter `preserveExternalStageReferences`:** Whether references to existing destination stages belong to the same document.

**Parameter `activeStage`:** Destination stage for copied non-stage nodes.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

## Returns

A complete candidate suitable for one History transaction.
