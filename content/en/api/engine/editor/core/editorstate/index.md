---
uid: api.inno.editor.core.a350a03ecf0d89ea
symbol: "engine:Inno.Editor.Core:T:Inno.Editor.Core.EditorState"
source: xml
reviewed: 4ec7992f7b782923cc7cb0223273d0bbf8836a1c6f6209dbd57a521c712d638c
title: "EditorState"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
aliases: []
---

Provides the serialization-neutral parameter used to capture or restore one editor extension's project state.

## Remarks

The editor supplies this object to the protected state hooks on `T:Inno.Editor.Core.EditorModule` and `T:Inno.Editor.Core.EditorPanel`. Extensions should write values during capture and read values during restore; storage format and persistence remain private runtime details.
