---
uid: api.6c434f23e423ae49652fc869bc587abc41e3e87a7c344ef0a633ef16658a7a43
symbol: "scripting:Inno.Editor.Interactions:P:InnoEditor.Interactions.EditorHistoryResult.statePreserved"
source: xml
reviewed: c6e65bb4559b8d1d20b4744acab06ebab5d4f3ef7978caf7fd3ce83b7a4f4d57
title: "statePreserved"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Gets whether a failed transition restored the domain state that existed before the attempt.

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
