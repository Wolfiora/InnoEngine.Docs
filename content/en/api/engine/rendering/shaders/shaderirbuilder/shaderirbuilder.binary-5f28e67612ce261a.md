---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f28e67612ce261a391d3d65e0f6d5bec6e41d199baac583578733bb21f867fd
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Binary(Inno.Rendering.Shaders.ShaderIrOperation,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.Binary
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 0d8d1a81892ef67e69086fc55d866916b11d54035f28d6ef4344e3900b7a8d3b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operation`:** Add, Subtract, Multiply, Divide, Minimum, Maximum, Equal or LessThan.

**Parameter `left`:** Left operand from this builder.

**Parameter `right`:** Right operand of the same complete type.

## Returns

The result; comparisons produce a scalar Boolean.

## Exceptions

**Exception `T:System.ArgumentException`:** Operands belong to another builder, differ in type, or the operation is invalid for them.
