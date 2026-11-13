---
uid: api.9c47fbf38cd9f015edb046b59fd158c14d40da787edee10a2a0c69642c3e9078
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderExtensionStateContext.#ctor(Inno.Assets.AssetObject)"
source: xml
reviewed: 8533b393e292e60ebe96a85c24dae7003fda5538da9e8f7dcead7d1ddba90f38
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Binds restoration to a canonical asset, independently of the caller's ambient session.

**Parameter `owner`:** Asset whose database and pinned converter generation own the settings.

## Remarks

It must not outlive the asset generation. Authoring captures use the asset system's property snapshots.
