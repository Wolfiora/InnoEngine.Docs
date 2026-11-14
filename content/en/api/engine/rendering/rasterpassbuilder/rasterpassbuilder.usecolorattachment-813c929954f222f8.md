---
uid: api.813c929954f222f8751b6796ededcdf28717b829247b87247a9ab153868ddffe
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RasterPassBuilder.UseColorAttachment(Inno.Rendering.RenderTextureHandle,System.Int32,Inno.Rendering.RenderLoadAction,Inno.Rendering.RenderStoreAction,Inno.Rendering.RenderClearColor,System.Int32,System.Int32)"
source: xml
reviewed: a824f1777187f8620f030cb3ec0eed070641cba01f2ccb8a9be4b7061c844559
title: "RasterPassBuilder.UseColorAttachment"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Attaches a color texture.

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
