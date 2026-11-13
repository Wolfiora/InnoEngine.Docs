---
uid: api.215567b1d64d46c49fe23e64f1489e2cd88484231f5dcd8465eaf6f05901c54d
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean)"
source: xml
reviewed: 8e243176b5f72b65ed6b8f13c9c3c9501e8011b2d47a470a7598a413d9c7a1c8
title: "ImGuiWidget.SetTreeNodeOpen"
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
