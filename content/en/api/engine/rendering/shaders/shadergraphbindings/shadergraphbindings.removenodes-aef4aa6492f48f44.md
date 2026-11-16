---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aef4aa6492f48f44694bf5a753f8cdfa915c115abaa365af85b2cf7b242af3c7
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphBindings.RemoveNodes
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: a6f041456cc15ac25d9dd455febc026cd5c1570bd716c9b2ab5317ff860bf3c1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeIds`:** Explicitly selected node identities. Deleting an output also deletes its stage contents.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for material defaults.

## Returns

A detached candidate suitable for one atomic history entry; unrelated incomplete content is retained.

## Exceptions

**Exception `T:System.ArgumentException`:** A selected identity is not in the document.
