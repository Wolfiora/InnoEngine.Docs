---
uid: api.8ab9e7a50e2c6c73cb66c590709b8b0dd7322f450e466e850652182d263fada2
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Constant(System.Single)"
source: xml
reviewed: f2ccb6ee9737a9626783290da5cecafb1b1dd61ca54a575414babe64f39c3b02
title: "ShaderIrBuilder.Constant"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Produces a finite, exact 32-bit floating-point constant.

## Parameters

**Parameter `value`:** Finite scalar value, including signed zero.

## Returns

A float-typed intermediate value.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The value is NaN or infinite.
