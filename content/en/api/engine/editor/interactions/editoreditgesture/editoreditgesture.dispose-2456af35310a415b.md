---
uid: api.2456af35310a415b881b1b1742d4e37b89d0e626175d02f8d1f2bd0e8e12c568
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.Dispose"
source: xml
reviewed: b45ed871540ff2e8d16f2dcfdc232350bbd0ab488514163381213e757c1da48f
title: "EditorEditGesture.Dispose"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Cancels an unfinished gesture and releases its ownership only after rollback succeeds.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Rollback is blocked or a nested transaction remains active.
