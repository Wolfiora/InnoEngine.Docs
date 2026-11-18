---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.622b7e33750b8c4a34bd90c580cd76114743099b8b10447dee19c053d3531488
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Extract(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Int32)
title: ShaderIrBuilder.Extract
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: 034fbb4205b6bc0d996e6f1d22767a2a93cd5fe8692260896d63bfbce5042540
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** Aggregate value from this builder.

**Parameter `memberIndex`:** Zero-based member index; a matrix index selects a column vector.

## Returns

The precisely typed selected member.

## Exceptions

**Exception `T:System.ArgumentException`:** The input is not an aggregate.

**Exception `T:System.ArgumentOutOfRangeException`:** The member index is outside the aggregate layout.
