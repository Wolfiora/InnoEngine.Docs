---
uid: api.6c59097739f6fa9527df5d47f112d1b08c5352d415bcb17ca5bc06904e2fecb4
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginPropertyEdit(InnoEditor.Interactions.IEditorHistory,System.String,System.String)"
source: xml
reviewed: b78552ed6a867512db702322d3852f73e6487e4eab8ccd61d368c9b453f1670e
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
