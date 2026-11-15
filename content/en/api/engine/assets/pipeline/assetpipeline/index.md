---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.8e0d4e604735ad69
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetPipeline
title: AssetPipeline
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 88895c22471e0f5d1935cdfd352740112b6cd2854be1caac18cd8dac0aa8b6c2

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-assets-pipeline
aliases: []
---

Provides the single application-level entry point for importing, loading, saving and collecting assets.

Owns cancellable Sample preparation and owner-thread publication through the shared source transaction.

Prepares isolated source catalogs and adopts them at the pipeline's owner-thread safe point.
