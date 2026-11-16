---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.core.editor-script.e38bde66627dc4bb
symbol: scripting:Inno.Editor.Core:T:InnoEditor.Core.EditorState
title: EditorState
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 0d040087f41e96de056558b66d18b336bdbfb928d2190e1d6f52783a20cec88e
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
