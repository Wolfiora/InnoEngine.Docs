---
uid: api.b25dc5fe93638e15b6cf051c0e60be6d00c05f2f0d1b18f2af3359c25aa8575b
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Binary(InnoEditor.Rendering.Shaders.ShaderIrOperation,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 61f8d278007c713d4522e7cc2817f772cb16d41c4a3e6d32dd011ca8244f74da
title: "Binary"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Applies an explicitly typed binary arithmetic or scalar comparison operation.

**Parameter `operation`:** Add, Subtract, Multiply, Divide, Minimum, Maximum, Equal or LessThan.

**Parameter `left`:** Left operand from this builder.

**Parameter `right`:** Right operand of the same complete type.

**Returns:** The result; comparisons produce a scalar Boolean.

**Exception `T:System.ArgumentException`:** Operands belong to another builder, differ in type, or the operation is invalid for them.
