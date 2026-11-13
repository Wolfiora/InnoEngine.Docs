---
uid: api.inno.assets.9c5b677450cbad79
symbol: "engine:Inno.Assets:T:Inno.Assets.AssetRuntimeOwner"
source: xml
reviewed: 8c30494273b96d033583e348dbd86e0b3f0af62ebf607c08c69a904f30dca5fc
title: "AssetRuntimeOwner"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
contracts:
- project.inno-assets
aliases: []
---

Grants one database exclusive mutation authority over the asset instances it initializes.

## Remarks

This capability is not a global mutation bridge and is not exported to scripts. A database keeps its owner private and explicitly releases canonical assets; the capability itself retains no assets.
