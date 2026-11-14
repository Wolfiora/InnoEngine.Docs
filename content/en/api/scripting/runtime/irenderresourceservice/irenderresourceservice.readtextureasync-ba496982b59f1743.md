---
uid: api.ba496982b59f174384f43f8bff55de7e2ded6493445c5b4faa74479da325ba01
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.ReadTextureAsync(InnoEngine.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)"
source: xml
reviewed: 3eec2c98d24c86719a2966bbf6e88bb72f8c5111bf1a38897fe9c1930ab601b5
title: "IRenderResourceService.ReadTextureAsync"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Asynchronously copies one complete persistent texture mip into CPU-visible memory.

**Parameter `texture`:** Texture created with `F:InnoEngine.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

**Returns:** The immutable readback result after a later GPU frame completes it.
