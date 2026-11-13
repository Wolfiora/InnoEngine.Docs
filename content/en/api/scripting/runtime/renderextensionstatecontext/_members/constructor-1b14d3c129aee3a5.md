---
uid: api.1b14d3c129aee3a5e747b936b899445e25907e9a24524c005f0990c1a4c87792
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderExtensionStateContext.#ctor(InnoEngine.Assets.AssetObject)"
source: xml
reviewed: 9c1784c899e38f652897961f8998d5e9872fe224f6a65bd3ec9a5b7a1c5973d5
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Binds restoration to a canonical asset, independently of the caller's ambient session.

**Parameter `owner`:** Asset whose database and pinned converter generation own the settings.

## Remarks

It must not outlive the asset generation. Authoring captures use the asset system's property snapshots.
