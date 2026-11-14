---
uid: api.ff8ec595b8a58a1714773b8bf3cc8bc1a52b3eb572a31b117ab50df07342f6ed
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Restore(InnoEditor.Core.EditorState)"
source: xml
reviewed: e6e4bf603515f653911b385a717a8dd8c8f75e8367236509b5fce964edf28023
title: "EditorPanel.Restore"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Restores readable project state owned by this panel.

## Remarks

This method is called only when `M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)` is overridden. It runs once after the panel is attached and before the panel is allowed to capture replacement state.

## Parameters

**Parameter `state`:** The read-only state parameter for this panel. Missing or incompatible values return the fallback supplied to ```M:InnoEditor.Core.EditorState.Get``1(System.String,``0)```.
