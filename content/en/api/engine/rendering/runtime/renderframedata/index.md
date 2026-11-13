---
uid: api.inno.rendering.runtime.9879687249dc6b19
symbol: "engine:Inno.Rendering.Runtime:T:Inno.Rendering.Runtime.RenderFrameData"
source: xml
reviewed: 653094e23787a58043c19259acfb30c1bf71a3d29117f32429a9e4d18647fd7a
title: "RenderFrameData"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
contracts:
- project.inno-rendering-runtime
aliases: []
---

Carries generation-scoped, frame-only payloads between a request producer and its pipeline.

## Remarks

Values may use reloadable plugin types because a snapshot is retained only until the owning render frame completes. Persistent configuration must use stable identifiers and serialized bytes.
