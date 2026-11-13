---
uid: api.inno.assets.pipeline.425e1bd0143d29e6
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetSampleImportTransaction"
source: xml
reviewed: 1f43d7da62e0340a528e499d0550ff3081220ca6aa9734cafc56c63c44cf5774
title: "AssetSampleImportTransaction"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
contracts:
- project.inno-assets-pipeline
aliases: []
---

Owns a cancellable sample clone, its pinned generation and its owner-thread publication.

## Remarks

Advance and Commit run on the AssetPipeline initialization thread. A prepared copy is indexed in an isolated catalog for validation without publishing Changed; ordinary mutations and generation changes are deferred. Rollback must finish before the pipeline or any validation dependency can be released.
