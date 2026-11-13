---
uid: api.inno.rendering.runtime.runtime-script.1dd6844f250196da
symbol: "scripting:Inno.Rendering.Runtime:T:InnoEngine.Rendering.RenderFrameData"
source: xml
reviewed: 33ecffdef654a7956f2872ac58deb80e022013a71049b674c562b5e98ac3a580
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
