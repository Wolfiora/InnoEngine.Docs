---
uid: api.5fb05ce6830472d6417cde5d19f562a2b25022c3212e30a067cb3b64de48d975
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.Expand(InnoEngine.Graphs.GraphDocument,System.Func{System.Guid,System.String,InnoEngine.Graphs.GraphDocument},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 81d84b062af9023fed846166d0c0fa0c37060e5a7f2994d119aeca8feed4e466
title: "ShaderGraphNodes.Expand"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Expands every inline graph-node reference and refreshes domain-output interfaces.

## Parameters

**Parameter `graph`:** Authored parent graph.

**Parameter `resolve`:** Resolves a referenced Shader graph by persistent identity and diagnostic path.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

## Returns

A detached graph containing no inline graph-node references.
