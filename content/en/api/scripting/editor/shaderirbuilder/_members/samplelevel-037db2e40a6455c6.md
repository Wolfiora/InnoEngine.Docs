---
uid: api.037db2e40a6455c6f3925a3d2f59855ab8a578da781de4aed0b98d0dfe5c334d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.SampleLevel(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 19e93f9e53e05e08151d933f708721eaaeaa47b37ec4de618343d5b2e1f6bbb7
title: "SampleLevel"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Samples a texture at an explicit floating-point mip level without implicit derivatives.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Parameter `level`:** Scalar floating-point mip level.

**Returns:** The sampled float4 value.

**Exception `T:System.ArgumentException`:** Operands have incompatible types or owners.
