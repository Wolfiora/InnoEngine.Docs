---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.68ef177f1c971f8f1c6b4bf67a9f24bfc3ea9c5c0ea61895a7b2b1060271f465
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.PrepareFrame
title: RenderTargetStore.PrepareFrame
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: d8a25be13e0ba33febb0b639c51670ca462b9fea19bf33ab1854c108c7612c04

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Advances queued target releases at a frame safety point.

## Remarks

Retired textures remain active across one complete submitted frame so a prepared UI or presentation packet cannot observe an invalidated handle.
