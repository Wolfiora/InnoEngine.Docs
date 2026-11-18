---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.core.editor-script.e38bde66627dc4bb
symbol: scripting:Inno.Editor.Core:T:InnoEditor.Core.EditorState
title: EditorState
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 670978bc80168a3ee6cdce276f4b30d2cc51f872e2d74b69c776790db1dabe3e
apiScope: Editor
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
- manual.scripting.use-script-api

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The editor supplies this object to the protected state hooks on `T:InnoEditor.Core.EditorModule` and `T:InnoEditor.Core.EditorPanel`. Extensions should write values during capture and read values during restore; storage format and persistence remain private runtime details.
