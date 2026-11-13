---
uid: api.inno.assets.pipeline.3e83463bec927cbb
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.IAssetSourceSnapshot"
source: xml
reviewed: 499761c76cea358fbdc2e6466395c5c73196b207eb29407b223f2a9321ffcf06
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
