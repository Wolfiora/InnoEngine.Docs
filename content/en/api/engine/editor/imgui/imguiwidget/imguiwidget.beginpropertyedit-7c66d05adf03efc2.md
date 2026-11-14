---
uid: api.7c66d05adf03efc26e506649f482ba4b3c6ae54c250fecbef7c5c9941450958b
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginPropertyEdit(Inno.Editor.Interactions.IEditorHistory,System.String,System.String)"
source: xml
reviewed: 96aae3856e2b31668d3bfa2ca8383cbc12a4f71da5b813f56f5ed4b88a3d470e
title: "ImGuiWidget.BeginPropertyEdit"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Starts a History boundary only when a changed control is actively producing continuous input.

## Parameters

**Parameter `history`:** The authoritative domain History receiving the control's existing mutation records.

**Parameter `path`:** The stable owner-qualified property path.

**Parameter `name`:** The operation name shown by Undo and Redo.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A previous gesture cannot complete or History rejects the transaction.
