---
uid: api.660cc423b99ca66b11c6e5fea431676c1dbe01277836c3dbd0e6b0ae94046472
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderPipelineContext.#ctor(InnoEngine.Rendering.RenderRequest,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderGraphBuilder,InnoEngine.Rendering.GraphicsCapabilities,InnoEngine.Rendering.RenderResourceMap,InnoEngine.Diagnostics.IDiagnosticReporter,InnoEngine.Rendering.IRenderResourceService,InnoEngine.Rendering.IRenderFrameUploadService,System.UInt64,System.Boolean,InnoEngine.Rendering.RenderTextureHandle)"
source: xml
reviewed: 52efe32ffef3a046521d79fcf7f8d4b0a84604a8d98b58f19aaf7897e4ddfd09
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates a pipeline build context.

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
