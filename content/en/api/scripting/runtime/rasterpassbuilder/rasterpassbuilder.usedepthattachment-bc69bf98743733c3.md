---
uid: api.bc69bf98743733c3cb24c59cbd424d79519d13103864d1b36687c81599edb336
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.UseDepthAttachment(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderLoadAction,InnoEngine.Rendering.RenderStoreAction,System.Single,System.Byte,System.Int32,System.Int32)"
source: xml
reviewed: 81d21c8477ae82288abf882807c5fd1e32d50fbb90a7b40ce092094c84aa51c5
title: "RasterPassBuilder.UseDepthAttachment"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Attaches a depth or depth-stencil texture.

## Parameters

**Parameter `texture`:** Depth attachment texture.

**Parameter `loadAction`:** Initial content behavior.

**Parameter `storeAction`:** Final content behavior.

**Parameter `clearDepth`:** Depth clear value.

**Parameter `clearStencil`:** Stencil clear value.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

## Returns

This builder for fluent declarations.
