---
uid: api.f4dcafb2131657cec95ba91e8b80393d14bb2d636379402b37d26307bf2f8e41
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphClipboard.Copy(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 0e0038c552a502d0e96f5a6ce9c4b12302bedf5b3727261100022298b445dd5e
title: "ShaderGraphClipboard.Copy"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Captures selected nodes and the owned contents of selected stage outputs.

## Parameters

**Parameter `graph`:** Source document, never changed.

**Parameter `nodes`:** Selected stable identities.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

## Returns

Detached fragment retaining source declarations for a later paste.
