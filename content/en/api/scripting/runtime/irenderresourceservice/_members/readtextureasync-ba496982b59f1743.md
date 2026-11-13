---
uid: api.ba496982b59f174384f43f8bff55de7e2ded6493445c5b4faa74479da325ba01
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.ReadTextureAsync(InnoEngine.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)"
source: xml
reviewed: a3481bef9221a9ca6d91b9321e9c567282ffc6a64f57aea79b7ddb4c97b21160
title: "ReadTextureAsync"
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
