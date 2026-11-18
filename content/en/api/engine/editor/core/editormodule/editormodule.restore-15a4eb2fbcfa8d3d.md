---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.15a4eb2fbcfa8d3d98c657c6a4792b8c1a7ac54a8a9644af620bd298a543c0fe
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Restore(Inno.Editor.Core.EditorState)
title: EditorModule.Restore
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 8e1b9dd16dd3855a53e25fa3766054f564051f95c27950a2e70ba669bf02dd2d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This method is called only when `M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)` is overridden. It runs once after the module is started and before the module is allowed to capture replacement state.

## Parameters

**Parameter `state`:** The read-only state parameter for this module. Missing or incompatible values return the fallback supplied to ```M:Inno.Editor.Core.EditorState.Get``1(System.String,``0)```.
