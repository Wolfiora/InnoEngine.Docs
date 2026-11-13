---
uid: api.1b14d3c129aee3a5e747b936b899445e25907e9a24524c005f0990c1a4c87792
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderExtensionStateContext.#ctor(InnoEngine.Assets.AssetObject)"
source: xml
reviewed: fdf3ff8cf3e140d8752e7ea526b372cab5faad673f3c4807136b787eb669a70c
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
