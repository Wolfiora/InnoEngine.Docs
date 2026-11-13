---
uid: api.inno.assets.pipeline.139c77f8998e2657
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetImportHealthSnapshot"
source: xml
reviewed: 213664e91b868e11469a679f2edd3fb98a17d336f17014e91455a70098f14dce
title: "AssetImportHealthSnapshot"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
contracts:
- project.inno-assets-pipeline
aliases: []
---

Represents an immutable observation of writable-source import failures at one point in time.

## Remarks

The snapshot deliberately keeps importer fingerprints private to the Asset Pipeline. Callers can compare snapshots without depending on catalog records, importer implementation names, or storage details.
