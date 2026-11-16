---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e8ea3a5e107ec160fe1e290b3b0077e905483f7f97f22730bda45d84d41c683b
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.SampleLevel(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.SampleLevel
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 87ea5778b69ba7e17d133449d93cc186a8dd710d7fafcd03d88edc387e4af1a1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Parameter `level`:** Scalar floating-point mip level.

## Returns

The sampled float4 value.

## Exceptions

**Exception `T:System.ArgumentException`:** Operands have incompatible types or owners.
