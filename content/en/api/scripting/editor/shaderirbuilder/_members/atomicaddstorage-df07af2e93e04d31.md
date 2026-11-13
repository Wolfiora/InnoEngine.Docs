---
uid: api.df07af2e93e04d31773cdb44d210cc5272645e75efa8451f0e2d58e93f813230
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 5e7a782ebbe8e4bf73c31953876a660e277fef9d71a8d878e00f1786bb5d8df4
title: "AtomicAddStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Atomically adds to a scalar integer buffer element and returns its previous value.

**Parameter `resource`:** A read-write int or uint storage buffer.

**Parameter `index`:** Unsigned element index.

**Parameter `value`:** Addition operand matching the buffer element type.

**Returns:** The original scalar value observed by the atomic operation.

**Exception `T:System.ArgumentException`:** The resource is not an appropriate read-write integer buffer.
