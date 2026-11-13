---
uid: api.6a0bc20dbee773a6f74bb72037c377a64c3d69bbf64732d96cbf54623c50bcf6
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireComputePipeline(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.ComputePipelineDescriptor,System.String)"
source: xml
reviewed: e7fc3524ce6a8ba86c866f04ee4d6496517fea8641f3e9fa2452c757f56f4c4c
title: "AcquireComputePipeline"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Acquires or atomically replaces a provider-owned compute pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target compute program and interface.

**Parameter `name`:** Diagnostic name.

**Returns:** A compute pipeline owned by the active device generation.
