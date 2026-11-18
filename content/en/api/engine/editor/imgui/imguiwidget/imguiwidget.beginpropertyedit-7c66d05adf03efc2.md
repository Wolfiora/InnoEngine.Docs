---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7c66d05adf03efc26e506649f482ba4b3c6ae54c250fecbef7c5c9941450958b
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginPropertyEdit(Inno.Editor.Interactions.IEditorHistory,System.String,System.String)
title: ImGuiWidget.BeginPropertyEdit
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 8396f2853b447b2bce060d641f7be6e19a47a2d58550b62de1d58bbbee2d6564
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
