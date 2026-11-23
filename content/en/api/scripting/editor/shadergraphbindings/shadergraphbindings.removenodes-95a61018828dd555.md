---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.95a61018828dd5553a6bd764f9a4f050ae5766d3816fb5810ded4ea1623403f7
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(InnoEngine.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeID},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphBindings.RemoveNodes
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: d07a32bf9b0e0697a197b3fa059b4f2329dfa531ab77850307c3d8f6a41914fc
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeIDs`:** Explicitly selected node identities. Deleting an output also deletes its stage contents.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for material defaults.

## Returns

A detached candidate suitable for one atomic history entry; unrelated incomplete content is retained.

## Exceptions

**Exception `T:System.ArgumentException`:** A selected identity is not in the document.
