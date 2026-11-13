---
uid: api.8818e5366e7b941d416a514b683050cef7c8ea600bb301693fa00cbc4546f288
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding})"
source: xml
reviewed: 0babf4c257d50fb59e8ff20e58b5d46f7922b4a1e0d1e46282bbedcf563cb5df
title: "CreateMaterialPass"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a generation-scoped resolved material pass when no compiled-interface query is required.

**Parameter `definition`:** The selected shader pass definition.

**Parameter `graphicsPipeline`:** The graphics pipeline handle, or an invalid handle for compute.

**Parameter `computePipeline`:** The compute pipeline handle, or an invalid handle for rasterization.

**Parameter `bindings`:** The complete material-owned binding snapshot.

**Returns:** A resolved material pass ready for automatic material binding. Calls to `M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind)` require the overload carrying the compiled interface.
