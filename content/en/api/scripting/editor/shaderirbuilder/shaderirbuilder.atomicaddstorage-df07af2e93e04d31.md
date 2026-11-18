---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.df07af2e93e04d31773cdb44d210cc5272645e75efa8451f0e2d58e93f813230
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.AtomicAddStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: 56e08f52ec218810f7079bf8b7879a5d1795ed73018f3f22f506b28464332c99
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
