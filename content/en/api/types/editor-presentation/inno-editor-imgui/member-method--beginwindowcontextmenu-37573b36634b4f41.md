---
title: "ImGuiWidget.ImGuiWidget — Method: BeginWindowContextMenu"
description: "Exact Method: BeginWindowContextMenu contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.37573b36634b4f41
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginWindowContextMenu

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginWindowContextMenu`

<a id="api-35d0cf36d4aaf5c2"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginWindowContextMenu(System.String) 2854e4ba98736da1862a92d5fa0685af17e56a109bbb070d3a3899006c1600a5 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginWindowContextMenu(string id)
```

Begins a parent-viewport styled right-click context menu for the current window's unoccupied background.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Returns:** `true` when context-menu content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L183).
