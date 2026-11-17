---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.525a866762dcfbd96894cb2a400bedf68f3be3937a5941482b6cfe0d19ff9568
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderPipelineContext.#ctor(Inno.Rendering.Runtime.RenderRequest,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.RenderGraphBuilder,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Runtime.RenderResourceMap,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Rendering.Runtime.IRenderResourceService,Inno.Rendering.IRenderFrameUploadService,System.UInt64,System.Boolean,Inno.Rendering.RenderTextureHandle)
title: RenderPipelineContext.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: bcf4fc26a88af4011f31b2e713bb842f3fafc2cd68e31c9ce7bb7970ae13ab00
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
