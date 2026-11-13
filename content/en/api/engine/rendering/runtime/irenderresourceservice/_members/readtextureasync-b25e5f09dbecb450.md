---
uid: api.b25e5f09dbecb450791d5736ef96ec1561febc7a94de96b851b1bddc13753aaf
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ReadTextureAsync(Inno.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)"
source: xml
reviewed: 22987f876bd36846bff0efbe5fa64cd8f5d28fda43b7d30e446fe809ace4b0be
title: "ReadTextureAsync"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Asynchronously copies one complete persistent texture mip into CPU-visible memory.

**Parameter `texture`:** Texture created with `F:Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

**Returns:** The immutable readback result after a later GPU frame completes it.
