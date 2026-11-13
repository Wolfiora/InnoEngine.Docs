---
uid: api.d0de7b9d073bf983381e92c7a2835b47db371610564e522d53dbf7cbb49586e2
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistics.GetSnapshot"
source: xml
reviewed: 09c85c9a0ea442f4a23a714669ec4450269225685e45fa92bfeb94197590473f
title: "GetSnapshot"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets a deterministic snapshot combining current contributions with the previous completed frame for providers that draw after their consumer.

**Returns:** An immutable, sorted snapshot containing at most one value for each stable statistic ID. Unchanged content reuses the same snapshot; previously returned snapshots remain valid.
