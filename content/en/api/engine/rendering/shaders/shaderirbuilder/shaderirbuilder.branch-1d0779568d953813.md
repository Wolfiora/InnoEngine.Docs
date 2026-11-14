---
uid: api.1d0779568d9538135ab2a2395a5620dcc8c86287dd0836afd112c22cc796655e
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Branch(Inno.Rendering.Shaders.ShaderIrValue,System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}},System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}})"
source: xml
reviewed: 8ab8f3e8c756d5a63f8dc2b78ed9e9fbfa62630620263317eb2e2ee4c3edc1f2
title: "ShaderIrBuilder.Branch"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Builds a real conditional: only the selected region executes, including its memory and source-call effects.

**Parameter `condition`:** Scalar Boolean visible in this region.

**Parameter `whenTrue`:** Transient callback building the true region and its named outputs.

**Parameter `whenFalse`:** Transient callback building the false region with exactly matching output names/types.

**Returns:** Values merged into the enclosing scope; empty output maps represent effect-only branches.

**Exception `T:System.ArgumentException`:** The condition or branch output contracts are incompatible.

**Exception `T:System.InvalidOperationException`:** A callback mutates the enclosing scope or declares a nested stage input.
