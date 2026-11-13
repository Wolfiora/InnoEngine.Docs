---
uid: api.inno.rendering.runtime.2901e18d9236794a
symbol: "engine:Inno.Rendering.Runtime:T:Inno.Rendering.Runtime.RenderMaterialPass"
source: xml
reviewed: 49f3797d6668885a66114874d5644b52174b9bda6780844f489d6e130784d4c5
title: "RenderMaterialPass"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
contracts:
- project.inno-rendering-runtime
aliases: []
---

Represents one frame-resolved material pass and its material-owned bindings.

## Remarks

The instance is scoped to the active render device generation. Pipeline-owned graph textures and buffers remain explicit and are bound by the caller after this material state is applied.
