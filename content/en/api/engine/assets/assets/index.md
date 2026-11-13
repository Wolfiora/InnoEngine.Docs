---
uid: api.inno.assets.1f6f83c3e4eac6b0
symbol: "engine:Inno.Assets:T:Inno.Assets.Assets"
source: xml
reviewed: 61704e879fc9fd423bc43d418337b879b974a721b2196edd8a36c503440ef4f4
title: "Assets"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
contracts:
- project.inno-assets
aliases: []
---

Provides script-facing asset queries through the lookup bound to the current runtime session.

## Remarks

This façade owns no asset state. Engine and Editor infrastructure should depend on an explicit `T:Inno.Assets.IAssetLookup` instance.
