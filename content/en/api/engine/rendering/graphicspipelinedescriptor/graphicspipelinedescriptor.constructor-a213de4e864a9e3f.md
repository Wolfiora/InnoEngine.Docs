---
uid: api.a213de4e864a9e3f64c9c7570eda6a10a1abe312ca464cf4b7da8d6c5882a8a9
symbol: "engine:Inno.Rendering:M:Inno.Rendering.GraphicsPipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderShaderBindingDescriptor},Inno.Rendering.RenderVertexLayout,Inno.Rendering.RenderRasterState)"
source: xml
reviewed: 5abb537bf0b45dbfd607f46dba4c3b7208e4907bc99d776eb20baef0445c609d
title: "GraphicsPipelineDescriptor.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a graphics pipeline descriptor.

## Parameters

**Parameter `vertexShader`:** Target backend vertex shader binary.

**Parameter `fragmentShader`:** Target backend fragment shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.

**Parameter `vertexLayout`:** Required mesh vertex layout, or `null` for procedural vertices.

**Parameter `rasterState`:** Fixed-function raster state.
