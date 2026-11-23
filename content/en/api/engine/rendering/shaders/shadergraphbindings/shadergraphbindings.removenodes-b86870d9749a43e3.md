---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b86870d9749a43e3a1c9dc327a854f044fdaf0d910c151d2d879fdd1b4309ad3
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeID},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphBindings.RemoveNodes
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 747f0d04fed2a724daa868f2a7461e2c1d0b9e44d0651b5194f2c74e0a46d318
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
