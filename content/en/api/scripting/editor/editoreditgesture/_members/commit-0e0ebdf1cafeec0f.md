---
uid: api.0e0ebdf1cafeec0fa0ec87c44e06739e03be026906ae3164cb240f1273ab3235
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.Commit"
source: xml
reviewed: 03f1449b219b3902876600c77d077ecea4060d62aa4d3ebfeef731043db4386b
title: "Commit"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Commits the edit exactly once; rejected completion leaves the transaction available for retry.

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
