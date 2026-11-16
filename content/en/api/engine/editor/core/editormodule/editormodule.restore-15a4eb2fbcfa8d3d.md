---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.15a4eb2fbcfa8d3d98c657c6a4792b8c1a7ac54a8a9644af620bd298a543c0fe
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Restore(Inno.Editor.Core.EditorState)
title: EditorModule.Restore
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 33b0429f991aad7d0c6151a80b29deada2387fe0f14c04cb424ba4664579083a
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
