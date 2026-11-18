---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ba496982b59f174384f43f8bff55de7e2ded6493445c5b4faa74479da325ba01
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.ReadTextureAsync(InnoEngine.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken)
title: IRenderResourceService.ReadTextureAsync
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 130c8e81301600ffd6d00da040b968fef432986757b8f4abcca38a7a9918e651
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Texture created with `F:InnoEngine.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

## Returns

The immutable readback result after a later GPU frame completes it.
