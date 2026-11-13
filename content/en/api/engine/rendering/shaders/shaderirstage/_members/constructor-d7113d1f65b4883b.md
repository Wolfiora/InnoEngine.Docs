---
uid: api.d7113d1f65b4883bfde8d540c6ba275d1f349aff5786d42cd72f36841a0a2173
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrStage.#ctor(Inno.Rendering.ShaderStage,Inno.Rendering.Shaders.ShaderIrBlock,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderIrStageInput},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderIrStageOutput},System.Int32,System.Int32,System.Int32)"
source: xml
reviewed: 765bcd5292eefc92abba4df13f542b6b360a7ebe1f6ce16ca66f63f39b27b410
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Validates and freezes a single stage's interface and ordered body.

**Parameter `stage`:** Exactly Vertex, Fragment or Compute.

**Parameter `body`:** Immutable typed instructions and named outputs.

**Parameter `inputs`:** Exactly the input bindings read by the body.

**Parameter `outputs`:** Exactly the GPU destinations written by the body.

**Parameter `threadsX`:** Compute workgroup X size; one for raster stages.

**Parameter `threadsY`:** Compute workgroup Y size; one for raster stages.

**Parameter `threadsZ`:** Compute workgroup Z size; one for raster stages.
