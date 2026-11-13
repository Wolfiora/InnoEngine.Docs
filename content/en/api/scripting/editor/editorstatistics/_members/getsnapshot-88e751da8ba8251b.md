---
uid: api.88e751da8ba8251bafea6b6f1405905d27d71b543069ce3f7af9dda774209ab5
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistics.GetSnapshot"
source: xml
reviewed: 33d14d72e38ee59a7e539826e03a059ef3ca11fbab026023a5d660b92fce1931
title: "GetSnapshot"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Gets a deterministic snapshot combining current contributions with the previous completed frame for providers that draw after their consumer.

**Returns:** An immutable, sorted snapshot containing at most one value for each stable statistic ID. Unchanged content reuses the same snapshot; previously returned snapshots remain valid.
