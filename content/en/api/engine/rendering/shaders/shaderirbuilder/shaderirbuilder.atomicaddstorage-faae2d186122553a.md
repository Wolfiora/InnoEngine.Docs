---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.faae2d186122553a5ca11b9141e1e0b650ec5be8b4de07adff06e37994bddf95
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.AtomicAddStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: eff2eb62282f1864f4ad0a744fdeac4052d7f5d0969f3e8502267ee97e078f80
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resource`:** A read-write int or uint storage buffer.

**Parameter `index`:** Unsigned element index.

**Parameter `value`:** Addition operand matching the buffer element type.

## Returns

The original scalar value observed by the atomic operation.

## Exceptions

**Exception `T:System.ArgumentException`:** The resource is not an appropriate read-write integer buffer.
