---
uid: api.a1c94cecd6194f55f30b229c80495676a785ca5e18b688635ca7e87e774749b4
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.SetTarget(Inno.Core.Graphs.GraphDocument,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 4c027781e0e7d20609ef6cd14c309483cc9c4437757143bef277cb5201543398
title: "ShaderGraphDocument.SetTarget"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Assigns a domain target by stable identity without retaining its current provider.

**Parameter `graph`:** Document being authored.

**Parameter `targetId`:** Stable target identity; empty selects explicit generic stage authoring.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.
