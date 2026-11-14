---
uid: api.7b881cd4ca2850818fc71784d01155f2970f5dac4ea24fdef7754e755fad1fcb
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddRasterPass\u0060\u00601(System.String,Inno.Rendering.RenderPhaseId,\u0060\u00600,Inno.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: a6ab2d5760cbbb3a7ca1f474e9cf146559ee28f719832ac29058a40ebc459bf7
title: "RenderGraphBuilder.AddRasterPass"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Adds a frame-scoped raster pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for raster resources, attachments and ordering.
