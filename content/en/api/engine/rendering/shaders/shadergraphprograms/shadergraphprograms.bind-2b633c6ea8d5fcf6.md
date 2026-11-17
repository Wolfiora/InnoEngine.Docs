---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2b633c6ea8d5fcf659a396fa8701c0a5221460b95af6108b824ccff0471c64e6
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphPrograms.Bind(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphPrograms.Bind
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 7b23c3dce8288ff3b8b55d1336b309969f30e05b19f333158cca153df8f89466
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `stages`:** Existing stage output node identities; an empty set preserves an incomplete pass.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

## Returns

A candidate suitable for one shared History transaction.
