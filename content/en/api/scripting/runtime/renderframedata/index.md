---
uid: api.inno.rendering.runtime.runtime-script.1dd6844f250196da
symbol: "scripting:Inno.Rendering.Runtime:T:InnoEngine.Rendering.RenderFrameData"
source: xml
reviewed: 823ea6412f56b34b8c5913ba2af63edf2774a91d8e2f51d49506694f6b4b0d5f
title: "RenderFrameData"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-runtime
aliases: []
---

Carries generation-scoped, frame-only payloads between a request producer and its pipeline.

## Remarks

Values may use reloadable plugin types because a snapshot is retained only until the owning render frame completes. Persistent configuration must use stable identifiers and serialized bytes.
