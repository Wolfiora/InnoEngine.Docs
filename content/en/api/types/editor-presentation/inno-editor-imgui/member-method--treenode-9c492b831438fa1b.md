---
title: "ImGuiWidget.ImGuiWidget — Method: TreeNode"
description: "Exact Method: TreeNode contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.9c492b831438fa1b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: TreeNode

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TreeNode`

<a id="api-d6da867ad4329f4b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TreeNode(System.String,System.Action{Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext},Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions@) 6981811ae2ffb898d2972f9b488a8525ad91936aaa19041013de525dbac8cf0d -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TreeNode(string id, System.Action<Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext> onDraw, in Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions options)
```

Draws a full-width interactive tree row whose non-leaf content toggles expansion when
double-clicked, while preserving single-click disclosure-arrow behavior.

**Parameter `id`:** Stable row identifier.

**Parameter `onDraw`:** Frame-local content drawing for visible or explicitly preserved rows; clipped ordinary rows do not invoke it.

**Parameter `options`:** Tree row options.

**Returns:** Interaction and row geometry for the submitted item.

**Throws `System.ArgumentOutOfRangeException`:** An explicit flattened depth is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L42).
