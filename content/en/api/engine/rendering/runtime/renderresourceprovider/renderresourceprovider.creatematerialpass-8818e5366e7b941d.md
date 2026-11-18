---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8818e5366e7b941d416a514b683050cef7c8ea600bb301693fa00cbc4546f288
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding})
title: RenderResourceProvider.CreateMaterialPass
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: d08d58d5376f0128eb995f5cb29270b14edb0a126d7a72a0400a0cb1f88bc405
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** The selected shader pass definition.

**Parameter `graphicsPipeline`:** The graphics pipeline handle, or an invalid handle for compute.

**Parameter `computePipeline`:** The compute pipeline handle, or an invalid handle for rasterization.

**Parameter `bindings`:** The complete material-owned binding snapshot.

## Returns

A resolved material pass ready for automatic material binding. Calls to `M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind)` require the overload carrying the compiled interface.
