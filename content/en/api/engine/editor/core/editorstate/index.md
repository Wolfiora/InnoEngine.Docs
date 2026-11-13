---
uid: api.inno.editor.core.a350a03ecf0d89ea
symbol: "engine:Inno.Editor.Core:T:Inno.Editor.Core.EditorState"
source: xml
reviewed: 920e2e7add4981dd0fac739c8853a695c7e6e7d4055001eec39c5114e22fb0e1
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
