---
uid: api.11d8c6dbfd2193303abfdb17f08a1862b3663b8ea34462ee1a79ff0a0d17cae2
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderPropertyDefinition},Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding})"
source: xml
reviewed: 7e346a182dd7254ee34374fb188333d6cb09babdaee518ac49c9f383f7eaf958
title: "CreateMaterialPass"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a generation-scoped resolved material pass.

**Parameter `definition`:** The selected shader pass definition.

**Parameter `graphicsPipeline`:** The graphics pipeline handle, or an invalid handle for compute.

**Parameter `computePipeline`:** The compute pipeline handle, or an invalid handle for rasterization.

**Parameter `declaredBindings`:** Complete shader binding declarations before backend optimization.

**Parameter `activeInterface`:** Exact bindings reflected by the compiled pass after backend optimization.

**Parameter `bindings`:** The complete material-owned binding snapshot.

**Returns:** A resolved material pass ready for command binding.
