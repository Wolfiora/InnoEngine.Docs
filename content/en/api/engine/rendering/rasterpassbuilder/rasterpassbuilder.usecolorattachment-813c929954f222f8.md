---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.813c929954f222f8751b6796ededcdf28717b829247b87247a9ab153868ddffe
symbol: engine:Inno.Rendering:M:Inno.Rendering.RasterPassBuilder.UseColorAttachment(Inno.Rendering.RenderTextureHandle,System.Int32,Inno.Rendering.RenderLoadAction,Inno.Rendering.RenderStoreAction,Inno.Rendering.RenderClearColor,System.Int32,System.Int32)
title: RasterPassBuilder.UseColorAttachment
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: a824f1777187f8620f030cb3ec0eed070641cba01f2ccb8a9be4b7061c844559
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Color attachment texture.

**Parameter `slot`:** Zero-based color attachment slot.

**Parameter `loadAction`:** Initial content behavior.

**Parameter `storeAction`:** Final content behavior.

**Parameter `clearColor`:** Linear clear value used for `F:Inno.Rendering.RenderLoadAction.Clear`.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

## Returns

This builder for fluent declarations.
