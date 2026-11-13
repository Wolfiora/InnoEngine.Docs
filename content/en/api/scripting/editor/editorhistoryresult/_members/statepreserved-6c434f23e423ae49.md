---
uid: api.6c434f23e423ae49652fc869bc587abc41e3e87a7c344ef0a633ef16658a7a43
symbol: "scripting:Inno.Editor.Interactions:P:InnoEditor.Interactions.EditorHistoryResult.statePreserved"
source: xml
reviewed: 5487ac65d8f6f16782d87e0d57f67dba0f54f379172ca01d3f94f6df81760b13
title: "statePreserved"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Gets whether a failed transition restored the domain state that existed before the attempt.

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
