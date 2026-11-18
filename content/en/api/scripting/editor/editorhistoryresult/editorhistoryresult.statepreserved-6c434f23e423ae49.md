---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6c434f23e423ae49652fc869bc587abc41e3e87a7c344ef0a633ef16658a7a43
symbol: scripting:Inno.Editor.Interactions:P:InnoEditor.Interactions.EditorHistoryResult.statePreserved
title: EditorHistoryResult.statePreserved
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: e41a3f0e698547e7b06de614fb86804187ec609621935cab47ff5d04526da0c7
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
