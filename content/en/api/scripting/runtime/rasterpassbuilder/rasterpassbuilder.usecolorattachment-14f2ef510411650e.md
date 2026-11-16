---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.14f2ef510411650ecb3d782d61c7db1d3ed2ad6448cc131d4a95a04fee4f0f53
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.UseColorAttachment(InnoEngine.Rendering.RenderTextureHandle,System.Int32,InnoEngine.Rendering.RenderLoadAction,InnoEngine.Rendering.RenderStoreAction,InnoEngine.Rendering.RenderClearColor,System.Int32,System.Int32)
title: RasterPassBuilder.UseColorAttachment
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: a6b09a6eaf377b7581c51d356e694efe6edf35537c0c68dade10a84e66cfba92
apiScope: Runtime
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

**Parameter `clearColor`:** Linear clear value used for `F:InnoEngine.Rendering.RenderLoadAction.Clear`.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

## Returns

This builder for fluent declarations.
