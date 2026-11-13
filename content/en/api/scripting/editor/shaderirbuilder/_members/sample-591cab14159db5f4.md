---
uid: api.591cab14159db5f46f8883272741fa8f10e46deffce650d424b5be253af2ee01
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Sample(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: e05ef6e444c8895e7d81e2ec98283636c6b55c83a3e033bd26f4d88bc7bfd9b1
title: "Sample"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Samples a texture using implicit derivatives; the enclosing stage must be Fragment.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Returns:** The sampled float4 value.

**Exception `T:System.ArgumentException`:** Operands have incompatible types or owners.
