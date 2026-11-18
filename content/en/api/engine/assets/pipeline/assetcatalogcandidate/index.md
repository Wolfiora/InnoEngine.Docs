---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.assets.pipeline.f7d90396534a4e24
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetCatalogCandidate
title: AssetCatalogCandidate
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: dbd723bcc5d168e8b146ce51a905d5bb54b2cd9496d8dd580307b06fd95e39d9
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
