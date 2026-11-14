---
uid: api.e25600bb3ddda3c90bd79a7ac3c241bf86d371035513174ab04b2e135ba19060
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(System.Single)"
source: xml
reviewed: bcedd50981892d39023a5b098aabded44b918cb78dfd471ba471faf4ce8ce43b
title: "ShaderIrBuilder.Constant"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Produces a finite, exact 32-bit floating-point constant.

**Parameter `value`:** Finite scalar value, including signed zero.

**Returns:** A float-typed intermediate value.

**Exception `T:System.ArgumentOutOfRangeException`:** The value is NaN or infinite.
