---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8780411a43494cafba601adfba603b3bcae2d0e1928ffde2c1528433864fbbb5
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Restore(Inno.Editor.Core.EditorState)
title: EditorPanel.Restore
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 95292568c24baeb93a254ac4fddcb2f1a8332257e66fe4bbe25a23e141921c0d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This method is called only when `M:Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState)` is overridden. It runs once after the panel is attached and before the panel is allowed to capture replacement state.

## Parameters

**Parameter `state`:** The read-only state parameter for this panel. Missing or incompatible values return the fallback supplied to ```M:Inno.Editor.Core.EditorState.Get``1(System.String,``0)```.
