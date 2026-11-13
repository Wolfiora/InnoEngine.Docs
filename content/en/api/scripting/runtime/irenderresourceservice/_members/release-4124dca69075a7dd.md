---
uid: api.4124dca69075a7ddc161c84da181ff594cf16efa858e748e3da47075bd405bde
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.Release(InnoEngine.Rendering.RenderPersistentResourceId)"
source: xml
reviewed: 3d803887c8b4dbf8da326928d38df0bb3c136d1144ca5008ce8e633a2fee6177
title: "Release"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases cached resources with this provider-owned identifier at a safe GPU mutation point.

## Remarks

Calls between frames or during graph execution queue neutral identities until the next frame; runtime shutdown also retires them. Calls must occur on the rendering owner thread. Unused identities are ignored.

**Parameter `id`:** Stable resource identifier to release.
