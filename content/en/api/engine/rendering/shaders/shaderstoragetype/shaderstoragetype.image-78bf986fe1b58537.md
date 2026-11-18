---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.78bf986fe1b58537e33989b1db0e45b27ac271bc032579d5d250070d60925443
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderStorageType.Image(Inno.Rendering.RenderTextureFormat,Inno.Rendering.RenderStorageAccess,Inno.Rendering.RenderTextureDimension,System.Boolean)
title: ShaderStorageType.Image
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 7d4abf3e91289dd0abd99c20733fd43d9e59fa0f5c07773d1da23b2e55410728
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `format`:** Linear, non-depth image format supported by the rendering contract.

**Parameter `access`:** Permitted memory operations.

**Parameter `dimension`:** Two-dimensional or three-dimensional image shape.

**Parameter `array`:** Whether a two-dimensional image is an array.

## Returns

An immutable image description with float4 load/store values.

## Exceptions

**Exception `T:System.ArgumentException`:** The format or shape cannot represent storage image operations.
