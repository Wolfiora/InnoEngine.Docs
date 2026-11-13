---
uid: api.faae2d186122553a5ca11b9141e1e0b650ec5be8b4de07adff06e37994bddf95
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 3e1b0cb794b4ff8beb15b4080361cd5b4674b536ccbc4cfe90b93bc84d928e15
title: "AtomicAddStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Atomically adds to a scalar integer buffer element and returns its previous value.

**Parameter `resource`:** A read-write int or uint storage buffer.

**Parameter `index`:** Unsigned element index.

**Parameter `value`:** Addition operand matching the buffer element type.

**Returns:** The original scalar value observed by the atomic operation.

**Exception `T:System.ArgumentException`:** The resource is not an appropriate read-write integer buffer.
