---
uid: api.a67add8f7d9f3c6bccd73b3fa0449e225980883082e9988930a3c0ec81928a75
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown"
source: xml
reviewed: 5a323e29a92afc5608ce5848759ccd2eade30b7c1214179a2cd35d2a7fbc8386
title: "PrepareShutdown"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Freezes automatic extension-state persistence and writes the final state before modules begin shutting down.

## Remarks

This operation is idempotent. After it succeeds, later disposal cannot recapture transient teardown state such as an empty scene workspace.

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
