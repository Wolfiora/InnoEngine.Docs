---
uid: api.inno.assets.pipeline.3e83463bec927cbb
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.IAssetSourceSnapshot"
source: xml
reviewed: 77e48acc034fac1b2c9359526e0cfce92d1f02e52c9912f55604a0f1886607f1
title: "IAssetSourceSnapshot"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
contracts:
- project.inno-assets-pipeline
aliases: []
---

Provides read-only authoring source access for active or isolated candidate compilation.

## Remarks

Capture inputs on the owner thread and retain the owning generation transaction until all asynchronous consumers drain. This view neither activates nor commits its underlying catalog.
