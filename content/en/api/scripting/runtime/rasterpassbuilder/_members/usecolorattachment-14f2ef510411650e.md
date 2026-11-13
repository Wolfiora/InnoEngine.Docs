---
uid: api.14f2ef510411650ecb3d782d61c7db1d3ed2ad6448cc131d4a95a04fee4f0f53
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.UseColorAttachment(InnoEngine.Rendering.RenderTextureHandle,System.Int32,InnoEngine.Rendering.RenderLoadAction,InnoEngine.Rendering.RenderStoreAction,InnoEngine.Rendering.RenderClearColor,System.Int32,System.Int32)"
source: xml
reviewed: f67a7cb156da16f7c0cb4e9fb8ee13409051917dc727491b7ce4cefe2ba4a7b3
title: "UseColorAttachment"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Attaches a color texture.

**Parameter `texture`:** Color attachment texture.

**Parameter `slot`:** Zero-based color attachment slot.

**Parameter `loadAction`:** Initial content behavior.

**Parameter `storeAction`:** Final content behavior.

**Parameter `clearColor`:** Linear clear value used for `F:InnoEngine.Rendering.RenderLoadAction.Clear`.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

**Returns:** This builder for fluent declarations.
