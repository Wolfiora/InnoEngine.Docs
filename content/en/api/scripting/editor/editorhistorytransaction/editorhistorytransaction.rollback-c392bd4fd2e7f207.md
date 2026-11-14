---
uid: api.c392bd4fd2e7f207ab619e27ddf12d4a981a8b4a281f3929b23a2fb08461d49d
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryTransaction.Rollback"
source: xml
reviewed: 829cd99b6961d173e86bc98714d3f8e9ac2cd69f7f4390c763755af341e155a5
title: "EditorHistoryTransaction.Rollback"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Reverts every operation recorded by the transaction and does not add a history entry.

**Returns:** The result of the atomic rollback attempt.

**Exception `T:System.InvalidOperationException`:** Thrown when the transaction is no longer active.
