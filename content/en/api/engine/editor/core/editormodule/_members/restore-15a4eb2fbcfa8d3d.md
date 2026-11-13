---
uid: api.15a4eb2fbcfa8d3d98c657c6a4792b8c1a7ac54a8a9644af620bd298a543c0fe
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Restore(Inno.Editor.Core.EditorState)"
source: xml
reviewed: 743223012f7d1491e9905dc86b4085479bb35cd221c8da18a5da751e3b6b7f2f
title: "Restore"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Restores readable project state owned by this module.

## Remarks

This method is called only when `M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)` is overridden. It runs once after the module is started and before the module is allowed to capture replacement state.

**Parameter `state`:** The read-only state parameter for this module. Missing or incompatible values return the fallback supplied to ```M:Inno.Editor.Core.EditorState.Get``1(System.String,``0)```.
