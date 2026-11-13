---
uid: api.68ef177f1c971f8f1c6b4bf67a9f24bfc3ea9c5c0ea61895a7b2b1060271f465
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.PrepareFrame"
source: xml
reviewed: 2229f24037238bbd5c0e79d4742fada147333b83ffb51c88ccb01dcacfd952b2
title: "PrepareFrame"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Advances queued target releases at a frame safety point.

## Remarks

Retired textures remain active across one complete submitted frame so a prepared UI or presentation packet cannot observe an invalidated handle.
