---
uid: api.bd05d290995246bb135711e5e57a67b62099c309d4a4f40f145f49c403255a24
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.GraphicsPipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderBindingDescriptor},InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.RenderRasterState)"
source: xml
reviewed: 6eae38dbd5b7cc42a60fed19c5aad6f6c4897ddafc87bc89cf7868de423eb092
title: "GraphicsPipelineDescriptor.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates a graphics pipeline descriptor.

**Parameter `vertexShader`:** Target backend vertex shader binary.

**Parameter `fragmentShader`:** Target backend fragment shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.

**Parameter `vertexLayout`:** Required mesh vertex layout, or `null` for procedural vertices.

**Parameter `rasterState`:** Fixed-function raster state.
