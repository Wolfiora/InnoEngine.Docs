---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.11d8c6dbfd2193303abfdb17f08a1862b3663b8ea34462ee1a79ff0a0d17cae2
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderPropertyDefinition},Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding})
title: RenderResourceProvider.CreateMaterialPass
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: a23a5e39cb388679d2fed7bf8ba0e17d5d5672a69feed2465f95c592afc9e4b5
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

**Parameter `declaredBindings`:** Complete shader binding declarations before backend optimization.

**Parameter `activeInterface`:** Exact bindings reflected by the compiled pass after backend optimization.

**Parameter `bindings`:** The complete material-owned binding snapshot.

## Returns

A resolved material pass ready for command binding.
