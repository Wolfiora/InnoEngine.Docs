---
title: "ImGuiWidget — Method: TreeNode"
description: "Exact Method: TreeNode contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.a13c99d5d042092d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: TreeNode

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TreeNode`

<a id="api-1bd9e2c79119bc6e"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.TreeNode(System.String,System.Action{InnoEditor.ImGui.TreeNodeDrawContext},InnoEditor.ImGui.TreeNodeOptions@) a373e792023ff98fac35638de5875ff928bc56922fddd3291541476daa73bc98 -->

```csharp
public InnoEditor.ImGui.TreeNodeResult InnoEditor.ImGui.ImGuiWidget.TreeNode(string id, System.Action<InnoEditor.ImGui.TreeNodeDrawContext> onDraw, in InnoEditor.ImGui.TreeNodeOptions options)
```

Draws a full-width interactive tree row whose non-leaf content toggles expansion when
double-clicked, while preserving single-click disclosure-arrow behavior.

**Parameter `id`:** Stable row identifier.

**Parameter `onDraw`:** Frame-local content drawing for visible or explicitly preserved rows; clipped ordinary rows do not invoke it.

**Parameter `options`:** Tree row options.

**Returns:** Interaction and row geometry for the submitted item.

**Throws `System.ArgumentOutOfRangeException`:** An explicit flattened depth is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L42).
