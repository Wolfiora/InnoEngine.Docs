---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.3e83463bec927cbb
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.IAssetSourceSnapshot
title: IAssetSourceSnapshot
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 77e48acc034fac1b2c9359526e0cfce92d1f02e52c9912f55604a0f1886607f1
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
