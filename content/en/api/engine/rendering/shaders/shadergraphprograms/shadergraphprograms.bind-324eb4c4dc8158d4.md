---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.324eb4c4dc8158d43ff913ea96835dc998a992199994f9fc158f4673bb432655
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphPrograms.Bind(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeID},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphPrograms.Bind
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: ba81285af4778ad36270ec91deeeff0102fd73915d42a64535a1418f8f33fd8c
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
