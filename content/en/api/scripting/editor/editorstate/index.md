---
uid: api.inno.editor.core.editor-script.e38bde66627dc4bb
symbol: "scripting:Inno.Editor.Core:T:InnoEditor.Core.EditorState"
source: xml
reviewed: a2bd4b4b4a41695335c342ff4407107af072b114dd6bf1452b247d1c05316bf8
title: "EditorState"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
- manual.scripting.use-script-api
aliases: []
---

Provides the serialization-neutral parameter used to capture or restore one editor extension's project state.

## Remarks

The editor supplies this object to the protected state hooks on `T:InnoEditor.Core.EditorModule` and `T:InnoEditor.Core.EditorPanel`. Extensions should write values during capture and read values during restore; storage format and persistence remain private runtime details.
