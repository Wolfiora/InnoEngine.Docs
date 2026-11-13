---
uid: api.f4dcafb2131657cec95ba91e8b80393d14bb2d636379402b37d26307bf2f8e41
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphClipboard.Copy(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 03fae74f45efeb90f96e7ff3f823f73e72b6ef1bee475de9cc028bcaf3884330
title: "Copy"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Captures selected nodes and the owned contents of selected stage outputs.

**Parameter `graph`:** Source document, never changed.

**Parameter `nodes`:** Selected stable identities.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** Detached fragment retaining source declarations for a later paste.
