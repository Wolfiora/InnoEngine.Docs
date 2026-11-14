---
uid: api.4af8c2948d89bd9a6a55573c471798a7d48374e509b9d5e0824d31fdb9cf77e5
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Sample(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 95a66914210a8a4507d520f614e955ac4157cccab735a400b9f90e13b0364c63
title: "ShaderIrBuilder.Sample"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Samples a texture using implicit derivatives; the enclosing stage must be Fragment.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Returns:** The sampled float4 value.

**Exception `T:System.ArgumentException`:** Operands have incompatible types or owners.
