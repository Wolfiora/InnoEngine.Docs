---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4124dca69075a7ddc161c84da181ff594cf16efa858e748e3da47075bd405bde
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.Release(InnoEngine.Rendering.RenderPersistentResourceId)
title: IRenderResourceService.Release
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: ef0437df7e719a8b61611332e63f365165c15971e6fbc668cd35f0c362b483e1
apiScope: Runtime
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
