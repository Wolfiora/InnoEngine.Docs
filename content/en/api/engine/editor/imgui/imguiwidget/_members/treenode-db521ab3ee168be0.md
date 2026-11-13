---
uid: api.db521ab3ee168be0edae37bab865146b5eb0e60ff1f093f2e1f44bc727514de1
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TreeNode(System.String,System.Action{Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext},Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions@)"
source: xml
reviewed: a159264226432ee1fa5fc465bd12dea348fe2a00cd03949e7d8ae8f74d9301cb
title: "TreeNode"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a full-width interactive tree row whose non-leaf content toggles expansion when double-clicked, while preserving single-click disclosure-arrow behavior.

**Parameter `id`:** Stable row identifier.

**Parameter `onDraw`:** Frame-local content drawing for visible or explicitly preserved rows; clipped ordinary rows do not invoke it.

**Parameter `options`:** Tree row options.

**Returns:** Interaction and row geometry for the submitted item.

**Exception `T:System.ArgumentOutOfRangeException`:** An explicit flattened depth is negative.
