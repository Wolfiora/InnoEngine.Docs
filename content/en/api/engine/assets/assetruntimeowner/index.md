---
uid: api.inno.assets.9c5b677450cbad79
symbol: "engine:Inno.Assets:T:Inno.Assets.AssetRuntimeOwner"
source: xml
reviewed: aa31c9073a8d798a8f805145274374943fc3f84ebe5a4d6d375dc29bda4bde82
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
