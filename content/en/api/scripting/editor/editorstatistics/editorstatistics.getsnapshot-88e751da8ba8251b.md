---
uid: api.88e751da8ba8251bafea6b6f1405905d27d71b543069ce3f7af9dda774209ab5
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistics.GetSnapshot"
source: xml
reviewed: af3c33ba7b4a2f26c89017cfb8f57530cac79d7bb8c34766cf39e59823079000
title: "EditorStatistics.GetSnapshot"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Gets a deterministic snapshot combining current contributions with the previous completed frame for providers that draw after their consumer.

## Returns

An immutable, sorted snapshot containing at most one value for each stable statistic ID. Unchanged content reuses the same snapshot; previously returned snapshots remain valid.
