---
uid: api.7c7b476daa0522971f151cb16f67b797071566c93caa1a548b80ac8b5089fcd3
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.SetTarget(InnoEngine.Graphs.GraphDocument,System.String,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 31d6ba813d4469366105e987d63990f353b0f92688942bcf5084bc0f4b95774e
title: "ShaderGraphDocument.SetTarget"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Assigns a domain target by stable identity without retaining its current provider.

**Parameter `graph`:** Document being authored.

**Parameter `targetId`:** Stable target identity; empty selects explicit generic stage authoring.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.
