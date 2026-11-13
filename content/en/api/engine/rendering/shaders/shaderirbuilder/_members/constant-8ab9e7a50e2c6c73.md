---
uid: api.8ab9e7a50e2c6c73cb66c590709b8b0dd7322f450e466e850652182d263fada2
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Constant(System.Single)"
source: xml
reviewed: e730bd04644b542646743caa57974870cc6a9550d7b09143ade7ed43bffd48b2
title: "Constant"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Produces a finite, exact 32-bit floating-point constant.

**Parameter `value`:** Finite scalar value, including signed zero.

**Returns:** A float-typed intermediate value.

**Exception `T:System.ArgumentOutOfRangeException`:** The value is NaN or infinite.
