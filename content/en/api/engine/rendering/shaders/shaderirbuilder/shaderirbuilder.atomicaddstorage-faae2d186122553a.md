---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.faae2d186122553a5ca11b9141e1e0b650ec5be8b4de07adff06e37994bddf95
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.AtomicAddStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 94c67fe209017296b19d9738cdb84494255784ec1c1c6e8f6889096842b9b17f
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
