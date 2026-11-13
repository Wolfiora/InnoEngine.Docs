---
uid: api.215567b1d64d46c49fe23e64f1489e2cd88484231f5dcd8465eaf6f05901c54d
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean)"
source: xml
reviewed: 72e02f31f07aaba2f250f6b33d33f5c80c5a3111a33ee1a73837e72a8e560c75
title: "SetTreeNodeOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Changes retained expansion before a flattened view is computed, without submitting a row.

**Parameter `id`:** The stable row identifier within this window and owner.

**Parameter `open`:** The requested disclosure state.

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
