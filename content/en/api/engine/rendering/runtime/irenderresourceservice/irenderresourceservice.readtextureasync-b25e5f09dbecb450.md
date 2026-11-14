---
uid: api.b25e5f09dbecb450791d5736ef96ec1561febc7a94de96b851b1bddc13753aaf
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ReadTextureAsync(Inno.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)"
source: xml
reviewed: 632af3e887a7f31fb3cb1120dd31febff02dbe4593981fcf8333476063c85cf5
title: "IRenderResourceService.ReadTextureAsync"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Asynchronously copies one complete persistent texture mip into CPU-visible memory.

## Parameters

**Parameter `texture`:** Texture created with `F:Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

## Returns

The immutable readback result after a later GPU frame completes it.
