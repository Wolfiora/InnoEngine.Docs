---
uid: api.5376ff2858c3fae84317cbebb4f7a88d6f47be5470a7f3515ae5ee5bd212735e
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrStage.#ctor(InnoEngine.Rendering.ShaderStage,InnoEditor.Rendering.Shaders.ShaderIrBlock,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderIrStageInput},System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderIrStageOutput},System.Int32,System.Int32,System.Int32)"
source: xml
reviewed: 08fbf93e779f69d3ac1a75df801fa4c2a48a506699dcb8f58036c17edb24e9d5
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Validates and freezes a single stage's interface and ordered body.

**Parameter `stage`:** Exactly Vertex, Fragment or Compute.

**Parameter `body`:** Immutable typed instructions and named outputs.

**Parameter `inputs`:** Exactly the input bindings read by the body.

**Parameter `outputs`:** Exactly the GPU destinations written by the body.

**Parameter `threadsX`:** Compute workgroup X size; one for raster stages.

**Parameter `threadsY`:** Compute workgroup Y size; one for raster stages.

**Parameter `threadsZ`:** Compute workgroup Z size; one for raster stages.
