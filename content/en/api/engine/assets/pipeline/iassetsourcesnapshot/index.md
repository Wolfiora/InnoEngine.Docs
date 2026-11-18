---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.assets.pipeline.3e83463bec927cbb
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.IAssetSourceSnapshot
title: IAssetSourceSnapshot
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 5c4f386c6cfa68cb8fa4b498bb899bc2187ff97d72a8b7d173d1dd57609b374f
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
