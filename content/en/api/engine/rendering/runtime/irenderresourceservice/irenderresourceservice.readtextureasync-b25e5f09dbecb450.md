---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b25e5f09dbecb450791d5736ef96ec1561febc7a94de96b851b1bddc13753aaf
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ReadTextureAsync(Inno.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)
title: IRenderResourceService.ReadTextureAsync
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: eb7e1bfc9ca4c007cf54a7870b80a44d9f0c1f9022f37dc12b28a86bf34e8ae8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Texture created with `F:Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

## Returns

The immutable readback result after a later GPU frame completes it.
