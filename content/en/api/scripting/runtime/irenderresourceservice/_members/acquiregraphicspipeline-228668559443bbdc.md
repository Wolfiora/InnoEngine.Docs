---
uid: api.228668559443bbdca3d815f5e9564d52ca77227e87a8471032e689f18b4976d4
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireGraphicsPipeline(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.GraphicsPipelineDescriptor,System.String)"
source: xml
reviewed: bc0b8cb3d009b7844513f1234aed10b8cc86cdbbccec4df9a862dd7681bff447
title: "AcquireGraphicsPipeline"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Acquires or atomically replaces a provider-owned graphics pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target program, interface, layout, and raster state.

**Parameter `name`:** Diagnostic name.

**Returns:** A graphics pipeline owned by the active device generation.
