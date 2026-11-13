---
uid: api.a1c94cecd6194f55f30b229c80495676a785ca5e18b688635ca7e87e774749b4
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.SetTarget(Inno.Core.Graphs.GraphDocument,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 17d13b731fc7b9f8aac2acbbf6bc961b4b4a04120c924fbb9588aa6ca61611b8
title: "SetTarget"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Assigns a domain target by stable identity without retaining its current provider.

**Parameter `graph`:** Document being authored.

**Parameter `targetId`:** Stable target identity; empty selects explicit generic stage authoring.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.
