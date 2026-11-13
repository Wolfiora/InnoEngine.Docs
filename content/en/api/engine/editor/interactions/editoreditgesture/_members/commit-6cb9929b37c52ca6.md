---
uid: api.6cb9929b37c52ca6f9a2854e3b31bac1c613ecfad528e7472843d0d4b2f5ed5c
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.Commit"
source: xml
reviewed: abf7cd59423731f61923f6c0281cb553356cb58ef517c7410094eb50790feab1
title: "Commit"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Commits the edit exactly once; rejected completion leaves the transaction available for retry.

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
