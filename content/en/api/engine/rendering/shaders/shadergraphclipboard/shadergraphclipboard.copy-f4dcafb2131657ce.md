---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f4dcafb2131657cec95ba91e8b80393d14bb2d636379402b37d26307bf2f8e41
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphClipboard.Copy(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphClipboard.Copy
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 0e0038c552a502d0e96f5a6ce9c4b12302bedf5b3727261100022298b445dd5e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Captures selected nodes and the owned contents of selected stage outputs.

## Parameters

**Parameter `graph`:** Source document, never changed.

**Parameter `nodes`:** Selected stable identities.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

## Returns

Detached fragment retaining source declarations for a later paste.
