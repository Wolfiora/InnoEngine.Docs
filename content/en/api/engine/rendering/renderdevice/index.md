---
uid: api.inno.rendering.2055e89f022237d3
symbol: "engine:Inno.Rendering:T:Inno.Rendering.RenderDevice"
source: xml
reviewed: 8bb02e36a16b124623cac428fecb789dffc3d2fcef8f7eacb5f9da72c044cff0
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
