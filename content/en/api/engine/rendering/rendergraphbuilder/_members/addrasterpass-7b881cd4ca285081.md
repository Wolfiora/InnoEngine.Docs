---
uid: api.7b881cd4ca2850818fc71784d01155f2970f5dac4ea24fdef7754e755fad1fcb
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddRasterPass\u0060\u00601(System.String,Inno.Rendering.RenderPhaseId,\u0060\u00600,Inno.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: e538b1d3698ca94a5bf2a4321df6ed0489651449f6ac80c7fe61be1cb004c33b
title: "AddRasterPass"
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
