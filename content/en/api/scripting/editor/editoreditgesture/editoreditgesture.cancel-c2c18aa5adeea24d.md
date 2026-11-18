---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c2c18aa5adeea24dbae320bc77b84d63978d1cc8f9eee5be057886354413eadf
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.Cancel
title: EditorEditGesture.Cancel
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: c0e2065a8fc50a1e45f0255b6645e7b680ee31cd37986c9db01fcab36cfc004c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

The rollback outcome; a state-preserving failure keeps this gesture active for retry.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
