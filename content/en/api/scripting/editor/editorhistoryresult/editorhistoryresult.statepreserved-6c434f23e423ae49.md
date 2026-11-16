---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c434f23e423ae49652fc869bc587abc41e3e87a7c344ef0a633ef16658a7a43
symbol: scripting:Inno.Editor.Interactions:P:InnoEditor.Interactions.EditorHistoryResult.statePreserved
title: EditorHistoryResult.statePreserved
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 2e4bea5dd6712138e3da2c4683e2de23c0f9ecea8e853f3b3cf8dc71bf65ffc4
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
