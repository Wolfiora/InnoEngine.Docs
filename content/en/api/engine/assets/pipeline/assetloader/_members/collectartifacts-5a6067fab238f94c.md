---
uid: api.5a6067fab238f94c57527dfba0b7b63c926e43f5e5f518bcf23f947d9a273b74
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.CollectArtifacts(System.TimeSpan,System.Int64)"
source: xml
reviewed: 566f42b98a1d32ecff3b036e07fc2bc843ee72e1caf4ecdf89bf07ab7d9e9146
title: "CollectArtifacts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Collects unreachable content-addressed artifacts.

**Parameter `gracePeriod`:** The minimum age of an unreachable bundle.

**Parameter `maximumSizeBytes`:** The cache size limit, or zero for no limit.

**Returns:** The number of removed artifact bundles.
