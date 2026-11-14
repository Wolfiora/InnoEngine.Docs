---
uid: api.d0de7b9d073bf983381e92c7a2835b47db371610564e522d53dbf7cbb49586e2
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistics.GetSnapshot"
source: xml
reviewed: 1550fb10f0b93e904dbf558dc60536b98961f3db072c3fc3693ecc97d2a0a66a
title: "EditorStatistics.GetSnapshot"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets a deterministic snapshot combining current contributions with the previous completed frame for providers that draw after their consumer.

**Returns:** An immutable, sorted snapshot containing at most one value for each stable statistic ID. Unchanged content reuses the same snapshot; previously returned snapshots remain valid.
