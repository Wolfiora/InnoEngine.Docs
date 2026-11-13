---
uid: api.0c3ab5a561e61d3287d2bdf76e1e5374421c40cd20462f4a206579e32e211739
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddComputePass\u0060\u00601(System.String,Inno.Rendering.RenderPhaseId,\u0060\u00600,Inno.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: 1c8793b3223109a75e89477937b97846391cb148762fb3cf021a8eca7e8ea716
title: "AddComputePass"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Adds a frame-scoped compute pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for compute resources and ordering.
