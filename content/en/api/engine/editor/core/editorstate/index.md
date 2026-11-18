---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.core.a350a03ecf0d89ea
symbol: engine:Inno.Editor.Core:T:Inno.Editor.Core.EditorState
title: EditorState
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: aeb95cc29f8c65d8e9f2b2d970bf98487f0205bfbd840c834e4906dd2756565d
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The editor supplies this object to the protected state hooks on `T:Inno.Editor.Core.EditorModule` and `T:Inno.Editor.Core.EditorPanel`. Extensions should write values during capture and read values during restore; storage format and persistence remain private runtime details.
