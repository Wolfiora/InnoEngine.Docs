---
uid: api.inno.assets.6f83482cacbfa610
symbol: "engine:Inno.Assets:T:Inno.Assets.AssetExecutionContext"
source: xml
reviewed: 1152937b3565cbf11fe3f6deaf27f1f68d00bc94a18183720b287d0ffb7837b7
title: "AssetExecutionContext"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
contracts:
- project.inno-assets
aliases: []
---

Binds one host-owned asset lookup to the current asynchronous script execution context.

## Remarks

This type is a composition boundary for Editor and Player hosts. Game code should use `T:Inno.Assets.Assets` instead of managing execution scopes directly.
