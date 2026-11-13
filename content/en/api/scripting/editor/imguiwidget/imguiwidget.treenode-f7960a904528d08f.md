---
uid: api.f7960a904528d08f970853a5ad3eac0eeeaf1e1477651229124d3f27f559331f
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.TreeNode(System.String,System.Action{InnoEditor.ImGui.TreeNodeDrawContext},InnoEditor.ImGui.TreeNodeOptions@)"
source: xml
reviewed: e445923157e3aed5aed6ff6eeca61030175dc9c3081fde72deeef707fe2c99c0
title: "ImGuiWidget.TreeNode"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a full-width interactive tree row whose non-leaf content toggles expansion when double-clicked, while preserving single-click disclosure-arrow behavior.

**Parameter `id`:** Stable row identifier.

**Parameter `onDraw`:** Frame-local content drawing for visible or explicitly preserved rows; clipped ordinary rows do not invoke it.

**Parameter `options`:** Tree row options.

**Returns:** Interaction and row geometry for the submitted item.

**Exception `T:System.ArgumentOutOfRangeException`:** An explicit flattened depth is negative.
