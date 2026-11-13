---
uid: api.inno.rendering.runtime.2901e18d9236794a
symbol: "engine:Inno.Rendering.Runtime:T:Inno.Rendering.Runtime.RenderMaterialPass"
source: xml
reviewed: 3016882d17dc6602bd1eaac90b73a1fe884561ca651536fd00644d46a1580d7f
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
