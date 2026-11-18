---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0cd73211af36797ca217a7f7d82b3f7bd534049e5cdd9116c0e80b2734257f29
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderStorageType.Image(InnoEngine.Rendering.RenderTextureFormat,InnoEngine.Rendering.RenderStorageAccess,InnoEngine.Rendering.RenderTextureDimension,System.Boolean)
title: ShaderStorageType.Image
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: ccc990d7fd6c366508bb59326541e9e00ec165b6ec98a309e30a0a55a4032ec8
apiScope: Editor
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
