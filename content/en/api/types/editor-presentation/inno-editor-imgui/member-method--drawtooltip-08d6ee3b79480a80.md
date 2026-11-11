---
title: "ImGuiWidget.ImGuiWidget — Method: DrawTooltip"
description: "Exact Method: DrawTooltip contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.08d6ee3b79480a80
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: DrawTooltip

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawTooltip`

<a id="api-75f9ef6d159497d3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawTooltip(System.String) b3cd02b89faf5c25d676b805a35616b5f850e1b8e50d71c85c83106b496a8ac4 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawTooltip(string? text)
```

Draws the standard viewport-clamped tooltip when a custom-drawn canvas element is hovered.

**Parameter `text`:** Tooltip contents. The caller owns hit testing; empty text draws nothing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L105).
