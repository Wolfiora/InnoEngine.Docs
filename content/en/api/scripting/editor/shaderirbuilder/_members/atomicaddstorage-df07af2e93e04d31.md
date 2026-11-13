---
uid: api.df07af2e93e04d31773cdb44d210cc5272645e75efa8451f0e2d58e93f813230
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 6d6a7e7b403d7c6621ec5d865a33873cd3b3fdfcfc66f1e713e9cac222862c1d
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
