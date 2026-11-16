---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c59097739f6fa9527df5d47f112d1b08c5352d415bcb17ca5bc06904e2fecb4
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginPropertyEdit(InnoEditor.Interactions.IEditorHistory,System.String,System.String)
title: ImGuiWidget.BeginPropertyEdit
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 240c2f13200526d8c7f26dce30e08ff51a2ef45413b1881ceb5f37e0dc103b5a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `history`:** The authoritative domain History receiving the control's existing mutation records.

**Parameter `path`:** The stable owner-qualified property path.

**Parameter `name`:** The operation name shown by Undo and Redo.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A previous gesture cannot complete or History rejects the transaction.
