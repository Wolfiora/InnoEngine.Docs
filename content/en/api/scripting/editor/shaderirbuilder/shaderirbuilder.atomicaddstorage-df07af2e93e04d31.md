---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.df07af2e93e04d31773cdb44d210cc5272645e75efa8451f0e2d58e93f813230
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.AtomicAddStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 3ab55d09158e5bb1e80f71bdc1714bc77976369b570e3f824eb7f0baf0a0a232
apiScope: Editor
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
