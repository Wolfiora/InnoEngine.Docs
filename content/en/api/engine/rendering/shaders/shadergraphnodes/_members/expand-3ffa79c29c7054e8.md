---
uid: api.3ffa79c29c7054e80ff8aa09231f650507de67a888dfc137dd280a6ddc5f85c9
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphNodes.Expand(Inno.Core.Graphs.GraphDocument,System.Func{System.Guid,System.String,Inno.Core.Graphs.GraphDocument},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 1a577ab0397ea84aa723d843d49ca301207b8f451b3058b7aaf2a2d8302d18f5
title: "Expand"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Expands every inline graph-node reference and refreshes domain-output interfaces.

**Parameter `graph`:** Authored parent graph.

**Parameter `resolve`:** Resolves a referenced Shader graph by persistent identity and diagnostic path.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** A detached graph containing no inline graph-node references.
