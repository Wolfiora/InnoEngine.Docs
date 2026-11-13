---
uid: api.f7ca8b4cb3d01c92e1b437397a614694dbea175aedbcfab519c84239b58309c7
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireComputePipeline(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.ComputePipelineDescriptor,System.String)"
source: xml
reviewed: f04d247264f07bf5c4b53bb2ff5a7f7b90477e86fc0ed1c40640065313ea0a1d
title: "AcquireComputePipeline"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Acquires or atomically replaces a provider-owned compute pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target compute program and interface.

**Parameter `name`:** Diagnostic name.

**Returns:** A compute pipeline owned by the active device generation.
