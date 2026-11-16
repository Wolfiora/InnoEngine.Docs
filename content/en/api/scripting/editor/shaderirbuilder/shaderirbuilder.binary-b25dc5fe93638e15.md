---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b25dc5fe93638e15b6cf051c0e60be6d00c05f2f0d1b18f2af3359c25aa8575b
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Binary(InnoEditor.Rendering.Shaders.ShaderIrOperation,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.Binary
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 769836aa6b32362e037d2615d2b67b1781babb81bfe2cab14248f6a1c79f5ef7
apiScope: Editor
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
