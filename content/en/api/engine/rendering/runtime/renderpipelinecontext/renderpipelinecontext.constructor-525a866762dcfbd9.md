---
uid: api.525a866762dcfbd96894cb2a400bedf68f3be3937a5941482b6cfe0d19ff9568
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderPipelineContext.#ctor(Inno.Rendering.Runtime.RenderRequest,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.RenderGraphBuilder,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Runtime.RenderResourceMap,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Rendering.Runtime.IRenderResourceService,Inno.Rendering.IRenderFrameUploadService,System.UInt64,System.Boolean,Inno.Rendering.RenderTextureHandle)"
source: xml
reviewed: d6bfde5f9fd223f169d632f489e1196ee9eefe4c9d1a7a1343906b477621b823
title: "RenderPipelineContext.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a pipeline build context.

## Parameters

**Parameter `request`:** Pipeline-defined render request.

**Parameter `pipelineAsset`:** Selected persistent pipeline configuration.

**Parameter `graph`:** Current frame graph builder.

**Parameter `capabilities`:** Current device capability snapshot.

**Parameter `resources`:** Open semantic resource registry.

**Parameter `diagnostics`:** Structured diagnostic sink.

**Parameter `resourceService`:** Generation-aware shader, material and persistent GPU resource service.

**Parameter `uploads`:** Frame-scoped streaming buffer service.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `preservePresentationTarget`:** Whether an earlier successful model contribution already initialized the same presentation target.

**Parameter `outputTexture`:** Imported offscreen target, or an invalid handle for the backbuffer.
