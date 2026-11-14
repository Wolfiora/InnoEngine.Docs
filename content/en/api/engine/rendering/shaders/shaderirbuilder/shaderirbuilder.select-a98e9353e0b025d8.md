---
uid: api.a98e9353e0b025d8960e1693fb7f31bdcc8a92bc016202fb2772369a05d655c7
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Select(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 0e5f5f1961001a3c13da67811bafc28c226e47a33b5977297de90cc0834f9512
title: "ShaderIrBuilder.Select"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Selects between equal typed values without conditionally executing their producers.

**Parameter `condition`:** Scalar Boolean condition from this builder.

**Parameter `whenTrue`:** Value selected when true.

**Parameter `whenFalse`:** Value selected when false.

**Returns:** A value with the selected operands' complete type.

**Exception `T:System.ArgumentException`:** The condition is not bool or selected value types differ.
