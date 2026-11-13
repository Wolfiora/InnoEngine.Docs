---
uid: api.d351f3139e098b72146408ac116b4c84a99a1e5fdc4865c7d555fa2dd96cef3c
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddCopyPass\u0060\u00601(System.String,InnoEngine.Rendering.RenderPhaseId,\u0060\u00600,InnoEngine.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: 8dd9ac13fa5c6d3e58815b6df08d0a4f80ad36834cc3b2e9aae62ec815d433dc
title: "AddCopyPass"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Adds a frame-scoped resource copy pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for copy resources and ordering.
