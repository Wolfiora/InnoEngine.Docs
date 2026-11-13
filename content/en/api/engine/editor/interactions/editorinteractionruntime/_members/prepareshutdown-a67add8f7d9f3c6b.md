---
uid: api.a67add8f7d9f3c6bccd73b3fa0449e225980883082e9988930a3c0ec81928a75
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown"
source: xml
reviewed: ec39737b456ef917f3f14ec0fd9d0bff54d382e63c5c01ffac51d99f9c622827
title: "PrepareShutdown"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Freezes automatic extension-state persistence and writes the final state before modules begin shutting down.

## Remarks

This operation is idempotent. After it succeeds, later disposal cannot recapture transient teardown state such as an empty scene workspace.

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
