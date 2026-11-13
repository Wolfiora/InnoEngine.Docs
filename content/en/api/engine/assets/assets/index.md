---
uid: api.inno.assets.1f6f83c3e4eac6b0
symbol: "engine:Inno.Assets:T:Inno.Assets.Assets"
source: xml
reviewed: 40a6abe94d90ed8f74584136a62d90683a127292991cffa62eb0d99fec51d503
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
