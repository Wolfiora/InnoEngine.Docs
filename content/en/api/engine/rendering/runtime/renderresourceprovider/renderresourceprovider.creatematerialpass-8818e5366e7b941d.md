---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8818e5366e7b941d416a514b683050cef7c8ea600bb301693fa00cbc4546f288
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding})
title: RenderResourceProvider.CreateMaterialPass
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: a6b975746951cd47e1a44973198d01a13a4d7c1bc933eb58e8e85fdbd31ee728
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

A resolved material pass ready for automatic material binding. Calls to `M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingID,Inno.Rendering.RenderShaderBindingKind)` require the overload carrying the compiled interface.
