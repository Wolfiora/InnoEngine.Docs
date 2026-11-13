---
uid: api.6c59097739f6fa9527df5d47f112d1b08c5352d415bcb17ca5bc06904e2fecb4
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginPropertyEdit(InnoEditor.Interactions.IEditorHistory,System.String,System.String)"
source: xml
reviewed: 1ca52b5920fdd53e1d8547784db8ec9eb8ef8c90f679b526befc69be603b4a77
title: "BeginPropertyEdit"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Starts a History boundary only when a changed control is actively producing continuous input.

**Parameter `history`:** The authoritative domain History receiving the control's existing mutation records.

**Parameter `path`:** The stable owner-qualified property path.

**Parameter `name`:** The operation name shown by Undo and Redo.

**Exception `T:System.InvalidOperationException`:** A previous gesture cannot complete or History rejects the transaction.
