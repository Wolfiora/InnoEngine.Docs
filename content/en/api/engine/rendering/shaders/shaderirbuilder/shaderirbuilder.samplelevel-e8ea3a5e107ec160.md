---
uid: api.e8ea3a5e107ec160fe1e290b3b0077e905483f7f97f22730bda45d84d41c683b
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.SampleLevel(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 87ea5778b69ba7e17d133449d93cc186a8dd710d7fafcd03d88edc387e4af1a1
title: "ShaderIrBuilder.SampleLevel"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Samples a texture at an explicit floating-point mip level without implicit derivatives.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Parameter `level`:** Scalar floating-point mip level.

**Returns:** The sampled float4 value.

**Exception `T:System.ArgumentException`:** Operands have incompatible types or owners.
