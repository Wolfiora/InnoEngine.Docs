---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.037db2e40a6455c6f3925a3d2f59855ab8a578da781de4aed0b98d0dfe5c334d
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.SampleLevel(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.SampleLevel
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: ba1a674168fe1b0de3b2c4a1625ba3bdd3f5f1a5903ed5457d9e61c53000cbd1
apiScope: Editor
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
