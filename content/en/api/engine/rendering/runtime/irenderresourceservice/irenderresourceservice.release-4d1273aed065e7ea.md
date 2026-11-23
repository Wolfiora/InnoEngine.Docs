---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4d1273aed065e7ea298f0c1fa725fb2d387c1c74fa49c145c85c01c3187c8bb5
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.Release(Inno.Rendering.Runtime.RenderPersistentResourceID)
title: IRenderResourceService.Release
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 1cc3430edd6c3895676fdd5d555c976c01bfa9859b58b12d6c15856524e2cd51
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable resource identifier to release.

## Remarks

Calls between frames or during graph execution queue neutral identities until the next frame; runtime shutdown also retires them. Calls must occur on the rendering owner thread. Unused identities are ignored.
