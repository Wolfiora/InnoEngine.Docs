---
uid: api.9bfa12bee53dd1d4c5ffe1a8eb4e8800c889ba012f00a1ac1e911d7f7398cefb
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddCopyPass\u0060\u00601(System.String,Inno.Rendering.RenderPhaseId,\u0060\u00600,Inno.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: ddbd17179d647406bc09ba87dc160bd8fba241f4593caa8841b8613e9cab0166
title: "AddCopyPass"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Adds a frame-scoped resource copy pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for copy resources and ordering.
