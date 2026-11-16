---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a213de4e864a9e3f64c9c7570eda6a10a1abe312ca464cf4b7da8d6c5882a8a9
symbol: engine:Inno.Rendering:M:Inno.Rendering.GraphicsPipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderShaderBindingDescriptor},Inno.Rendering.RenderVertexLayout,Inno.Rendering.RenderRasterState)
title: GraphicsPipelineDescriptor.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 913e8cb63a7cd3379aaab44336c75dd39f2a80b303ca0f344134960c965c2500
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `vertexShader`:** Target backend vertex shader binary.

**Parameter `fragmentShader`:** Target backend fragment shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.

**Parameter `vertexLayout`:** Required mesh vertex layout, or `null` for procedural vertices.

**Parameter `rasterState`:** Fixed-function raster state.
