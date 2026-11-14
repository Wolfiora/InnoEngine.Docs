---
uid: api.5f28e67612ce261a391d3d65e0f6d5bec6e41d199baac583578733bb21f867fd
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Binary(Inno.Rendering.Shaders.ShaderIrOperation,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: f7f719307b531d396692b35debd104887d521415c689c124c996f175aff81e10
title: "ShaderIrBuilder.Binary"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Applies an explicitly typed binary arithmetic or scalar comparison operation.

**Parameter `operation`:** Add, Subtract, Multiply, Divide, Minimum, Maximum, Equal or LessThan.

**Parameter `left`:** Left operand from this builder.

**Parameter `right`:** Right operand of the same complete type.

**Returns:** The result; comparisons produce a scalar Boolean.

**Exception `T:System.ArgumentException`:** Operands belong to another builder, differ in type, or the operation is invalid for them.
