---
uid: api.inno.rendering.runtime.9879687249dc6b19
symbol: "engine:Inno.Rendering.Runtime:T:Inno.Rendering.Runtime.RenderFrameData"
source: xml
reviewed: 3a3ab69e17f565fae67b5b62fbcb3834b500d9ac5ab5ac0cec08027b7d406de2
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
