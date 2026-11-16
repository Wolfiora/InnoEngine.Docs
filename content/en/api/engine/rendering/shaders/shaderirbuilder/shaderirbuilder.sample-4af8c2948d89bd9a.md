---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4af8c2948d89bd9a6a55573c471798a7d48374e509b9d5e0824d31fdb9cf77e5
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Sample(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.Sample
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: a55a2b124bb6c7167aceb73241c5f96ab77531df5b92dd86bed9c5025f3b4cd9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

## Returns

The sampled float4 value.

## Exceptions

**Exception `T:System.ArgumentException`:** Operands have incompatible types or owners.
