---
uid: api.inno.assets.pipeline.f7d90396534a4e24
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetCatalogCandidate"
source: xml
reviewed: 4b6b5dee5d59e7fbc4c147e0841604ff45144bc3ae0c8e81d12aad94cfa8ea50
title: "AssetCatalogCandidate"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
contracts:
- project.inno-assets-pipeline
aliases: []
---

Owns the isolated catalog storage used to validate one candidate Asset Pipeline generation.

## Remarks

The caller owns `P:Inno.Assets.Pipeline.AssetCatalogCandidate.loader` and must dispose it after the candidate has either been committed or discarded. Disposing this object removes only its rebuildable staging storage.
