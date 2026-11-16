---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1d0779568d9538135ab2a2395a5620dcc8c86287dd0836afd112c22cc796655e
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Branch(Inno.Rendering.Shaders.ShaderIrValue,System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}},System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}})
title: ShaderIrBuilder.Branch
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: d45be210b267567ebcf651916f3dce2e0464555da1d0c5b99fb568f8dabe3d42
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `condition`:** Scalar Boolean visible in this region.

**Parameter `whenTrue`:** Transient callback building the true region and its named outputs.

**Parameter `whenFalse`:** Transient callback building the false region with exactly matching output names/types.

## Returns

Values merged into the enclosing scope; empty output maps represent effect-only branches.

## Exceptions

**Exception `T:System.ArgumentException`:** The condition or branch output contracts are incompatible.

**Exception `T:System.InvalidOperationException`:** A callback mutates the enclosing scope or declares a nested stage input.
