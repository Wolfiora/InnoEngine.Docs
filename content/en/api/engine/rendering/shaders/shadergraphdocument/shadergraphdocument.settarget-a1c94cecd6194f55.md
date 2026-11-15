---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1c94cecd6194f55f30b229c80495676a785ca5e18b688635ca7e87e774749b4
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.SetTarget(Inno.Core.Graphs.GraphDocument,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphDocument.SetTarget
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 4c027781e0e7d20609ef6cd14c309483cc9c4437757143bef277cb5201543398

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Assigns a domain target by stable identity without retaining its current provider.

## Parameters

**Parameter `graph`:** Document being authored.

**Parameter `targetId`:** Stable target identity; empty selects explicit generic stage authoring.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.
