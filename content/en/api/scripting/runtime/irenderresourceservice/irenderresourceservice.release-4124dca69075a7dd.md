---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4124dca69075a7ddc161c84da181ff594cf16efa858e748e3da47075bd405bde
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.Release(InnoEngine.Rendering.RenderPersistentResourceId)
title: IRenderResourceService.Release
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: c20759ad53e05524cf73abad21d2aa7256356ac871f4b163a3ae6ad73b7c4ea6
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases cached resources with this provider-owned identifier at a safe GPU mutation point.

## Remarks

Calls between frames or during graph execution queue neutral identities until the next frame; runtime shutdown also retires them. Calls must occur on the rendering owner thread. Unused identities are ignored.

## Parameters

**Parameter `id`:** Stable resource identifier to release.
