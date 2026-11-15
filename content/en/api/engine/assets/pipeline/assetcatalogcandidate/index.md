---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.f7d90396534a4e24
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetCatalogCandidate
title: AssetCatalogCandidate
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 3684103374e2965f8c38552b9fa3b687b06a45fac3a69ae60fb1b87b014f4629

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-assets-pipeline
aliases: []
---

Owns the isolated catalog storage used to validate one candidate Asset Pipeline generation.

## Remarks

The caller owns `P:Inno.Assets.Pipeline.AssetCatalogCandidate.loader` and must dispose it after the candidate has either been committed or discarded. Disposing this object removes only its rebuildable staging storage.
