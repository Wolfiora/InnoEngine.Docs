---
uid: api.inno.rendering.2055e89f022237d3
symbol: "engine:Inno.Rendering:T:Inno.Rendering.RenderDevice"
source: xml
reviewed: ab61dca9a91798d8c0321e1d796ef4c6eb1d553a31bbf9c855cb5d293335a552
title: "RenderDevice"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
contracts:
- project.inno-rendering
aliases: []
---

Provides the protected opaque-handle boundary required by replaceable render-device backends.

## Remarks

Backend implementations derive from this type so they can encode and validate backend-neutral handles without exposing raw backend identities to application or scripting code.
