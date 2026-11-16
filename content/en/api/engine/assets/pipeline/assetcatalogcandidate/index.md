---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.f7d90396534a4e24
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetCatalogCandidate
title: AssetCatalogCandidate
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 3602445cb35768ef1d9ae899dc427950c7fdc7fd998913000e09d2394e452ac4
contracts:
- project.inno-assets-pipeline

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The caller owns `P:Inno.Assets.Pipeline.AssetCatalogCandidate.loader` and must dispose it after the candidate has either been committed or discarded. Disposing this object removes only its rebuildable staging storage.
