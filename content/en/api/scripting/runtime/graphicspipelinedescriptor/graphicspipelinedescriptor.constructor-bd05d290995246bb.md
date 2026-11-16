---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd05d290995246bb135711e5e57a67b62099c309d4a4f40f145f49c403255a24
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.GraphicsPipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderBindingDescriptor},InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.RenderRasterState)
title: GraphicsPipelineDescriptor.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: 4953911e36890eaad1fa0273808c94111f83bafefd8f60baa308f6cd83451970
apiScope: Runtime
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
