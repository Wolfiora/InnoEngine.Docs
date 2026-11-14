---
uid: api.9c47fbf38cd9f015edb046b59fd158c14d40da787edee10a2a0c69642c3e9078
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderExtensionStateContext.#ctor(Inno.Assets.AssetObject)"
source: xml
reviewed: efd15ffc882d6f23ae50bdc880af2e8085c7330aae7dfabf5189d81a85476cd2
title: "RenderExtensionStateContext.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Binds restoration to a canonical asset, independently of the caller's ambient session.

## Parameters

**Parameter `owner`:** Asset whose database and pinned converter generation own the settings.

## Remarks

It must not outlive the asset generation. Authoring captures use the asset system's property snapshots.
