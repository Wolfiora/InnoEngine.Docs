---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4124dca69075a7ddc161c84da181ff594cf16efa858e748e3da47075bd405bde
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.Release(InnoEngine.Rendering.RenderPersistentResourceId)
title: IRenderResourceService.Release
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 170644ac9f26660f388e80b53ff7e846ea5c20f8bb9807a413d7488859f83a46
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
