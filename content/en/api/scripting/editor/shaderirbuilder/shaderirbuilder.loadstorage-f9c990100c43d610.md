---
uid: api.f9c990100c43d6106c58ca1e8eae919c4e27443a291ddf78b61c75093c49cd8e
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.LoadStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: e1dac23e173e979980f6b0b67706ea0c30c89d3e18aed0ba3b6dfb1fca8ed40e
title: "ShaderIrBuilder.LoadStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Loads a storage value at this exact point in the block's memory-effect sequence.

**Parameter `resource`:** A readable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Returns:** The declared buffer element or float4 image value.

**Exception `T:System.ArgumentException`:** The resource is write-only or the coordinate is incompatible.
