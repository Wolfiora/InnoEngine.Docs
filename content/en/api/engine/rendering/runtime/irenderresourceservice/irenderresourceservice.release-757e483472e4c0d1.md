---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.757e483472e4c0d1bcfed69624a73c76908fb52057516168316de76e0152ffa2
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.Release(Inno.Rendering.Runtime.RenderPersistentResourceId)
title: IRenderResourceService.Release
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 6a4fe92168ede673be41599df448a0c7b8654b62a88eea580a0ffc76a8b7a201
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Calls between frames or during graph execution queue neutral identities until the next frame; runtime shutdown also retires them. Calls must occur on the rendering owner thread. Unused identities are ignored.

## Parameters

**Parameter `id`:** Stable resource identifier to release.
