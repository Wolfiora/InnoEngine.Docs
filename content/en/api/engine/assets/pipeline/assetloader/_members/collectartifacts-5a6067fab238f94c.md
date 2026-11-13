---
uid: api.5a6067fab238f94c57527dfba0b7b63c926e43f5e5f518bcf23f947d9a273b74
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.CollectArtifacts(System.TimeSpan,System.Int64)"
source: xml
reviewed: a0c5da440e7006d2f8e5a92b7499d4865000d841fcf91f987358fd7f946ca392
title: "CollectArtifacts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Collects unreachable content-addressed artifacts.

**Parameter `gracePeriod`:** The minimum age of an unreachable bundle.

**Parameter `maximumSizeBytes`:** The cache size limit, or zero for no limit.

**Returns:** The number of removed artifact bundles.
