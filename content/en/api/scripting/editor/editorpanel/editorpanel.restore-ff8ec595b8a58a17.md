---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ff8ec595b8a58a1714773b8bf3cc8bc1a52b3eb572a31b117ab50df07342f6ed
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Restore(InnoEditor.Core.EditorState)
title: EditorPanel.Restore
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 81ca846717278ddcb6ff319f6f10f4a44c0c5b975de41d098a36273dbfa77a2b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This method is called only when `M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)` is overridden. It runs once after the panel is attached and before the panel is allowed to capture replacement state.

## Parameters

**Parameter `state`:** The read-only state parameter for this panel. Missing or incompatible values return the fallback supplied to ```M:InnoEditor.Core.EditorState.Get``1(System.String,``0)```.
