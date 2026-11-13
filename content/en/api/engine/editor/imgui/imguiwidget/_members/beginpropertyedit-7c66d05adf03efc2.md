---
uid: api.7c66d05adf03efc26e506649f482ba4b3c6ae54c250fecbef7c5c9941450958b
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginPropertyEdit(Inno.Editor.Interactions.IEditorHistory,System.String,System.String)"
source: xml
reviewed: c359f760f6c44b1aba2a1cde48dc80e7d104b215c518ff59964468deef511829
title: "BeginPropertyEdit"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Starts a History boundary only when a changed control is actively producing continuous input.

**Parameter `history`:** The authoritative domain History receiving the control's existing mutation records.

**Parameter `path`:** The stable owner-qualified property path.

**Parameter `name`:** The operation name shown by Undo and Redo.

**Exception `T:System.InvalidOperationException`:** A previous gesture cannot complete or History rejects the transaction.
