---
title: "ImGuiWidget.ImGuiWidget — Method: BeginContextMenu"
description: "Exact Method: BeginContextMenu contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.2e2053fd71ab1362
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginContextMenu

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginContextMenu`

<a id="api-112e4e894e136dda"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginContextMenu(System.String) acdce8acd2855b1d0956d0c171b450745f2663e60c97b4c91bf039c2b5aa3ef0 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginContextMenu(string id)
```

Begins a parent-viewport styled right-click context menu for the most recently submitted item.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Returns:** `true` when context-menu content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L161).
