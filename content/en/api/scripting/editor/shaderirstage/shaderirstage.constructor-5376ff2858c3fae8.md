---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5376ff2858c3fae84317cbebb4f7a88d6f47be5470a7f3515ae5ee5bd212735e
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrStage.#ctor(InnoEngine.Rendering.ShaderStage,InnoEditor.Rendering.Shaders.ShaderIrBlock,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderIrStageInput},System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderIrStageOutput},System.Int32,System.Int32,System.Int32)
title: ShaderIrStage.Constructor
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: e14e9af5fb1ff61a4dbe9a0ba46ba63f4b3e2a28cdd64e4cfc318db232b117a8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stage`:** Exactly Vertex, Fragment or Compute.

**Parameter `body`:** Immutable typed instructions and named outputs.

**Parameter `inputs`:** Exactly the input bindings read by the body.

**Parameter `outputs`:** Exactly the GPU destinations written by the body.

**Parameter `threadsX`:** Compute workgroup X size; one for raster stages.

**Parameter `threadsY`:** Compute workgroup Y size; one for raster stages.

**Parameter `threadsZ`:** Compute workgroup Z size; one for raster stages.
