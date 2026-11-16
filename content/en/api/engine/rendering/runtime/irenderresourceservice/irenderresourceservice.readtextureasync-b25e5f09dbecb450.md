---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b25e5f09dbecb450791d5736ef96ec1561febc7a94de96b851b1bddc13753aaf
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ReadTextureAsync(Inno.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)
title: IRenderResourceService.ReadTextureAsync
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: ac68d7e7de4bcae1b1a4c24333322d70b776c936c49c8654ce88439960083ed2
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
