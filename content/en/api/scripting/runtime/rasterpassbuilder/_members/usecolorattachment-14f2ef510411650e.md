---
uid: api.14f2ef510411650ecb3d782d61c7db1d3ed2ad6448cc131d4a95a04fee4f0f53
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.UseColorAttachment(InnoEngine.Rendering.RenderTextureHandle,System.Int32,InnoEngine.Rendering.RenderLoadAction,InnoEngine.Rendering.RenderStoreAction,InnoEngine.Rendering.RenderClearColor,System.Int32,System.Int32)"
source: xml
reviewed: a4c2daca72215d17a6b6997447874da4fb226fd1ee723fa9ee72546f96ec2be0
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
