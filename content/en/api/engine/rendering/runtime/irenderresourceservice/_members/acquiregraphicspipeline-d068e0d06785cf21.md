---
uid: api.d068e0d06785cf21e2af11cd221e5c7b8f6a0c35d6ce2b57e343ebbf640e366b
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireGraphicsPipeline(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.GraphicsPipelineDescriptor,System.String)"
source: xml
reviewed: 9b3648baa890d5bde4259f1afc5c7cdfe902dff6eac28313f2a1f1bac899e1e9
title: "AcquireGraphicsPipeline"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Acquires or atomically replaces a provider-owned graphics pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target program, interface, layout, and raster state.

**Parameter `name`:** Diagnostic name.

**Returns:** A graphics pipeline owned by the active device generation.
