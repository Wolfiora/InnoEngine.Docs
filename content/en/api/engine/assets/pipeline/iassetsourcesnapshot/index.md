---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.3e83463bec927cbb
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.IAssetSourceSnapshot
title: IAssetSourceSnapshot
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 6e6b61fdd588e66d4a0ac75e20f2b8d3959789dd4c49c9a04d44c5ab4ae5be2d
contracts:
- project.inno-assets-pipeline

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Capture inputs on the owner thread and retain the owning generation transaction until all asynchronous consumers drain. This view neither activates nor commits its underlying catalog.
