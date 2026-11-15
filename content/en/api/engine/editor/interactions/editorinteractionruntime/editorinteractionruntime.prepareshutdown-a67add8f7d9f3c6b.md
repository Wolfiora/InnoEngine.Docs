---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a67add8f7d9f3c6bccd73b3fa0449e225980883082e9988930a3c0ec81928a75
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown
title: EditorInteractionRuntime.PrepareShutdown
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 5a323e29a92afc5608ce5848759ccd2eade30b7c1214179a2cd35d2a7fbc8386

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

This operation is idempotent. After it succeeds, later disposal cannot recapture transient teardown state such as an empty scene workspace.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
