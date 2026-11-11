---
title: "ImGuiWidget.ImGuiWidget — Method: DrawItemTooltip"
description: "Exact Method: DrawItemTooltip contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.babb28532f7e5486
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: DrawItemTooltip

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawItemTooltip`

<a id="api-f01112ce231d0f24"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawItemTooltip(System.String) 2c54f9a108139b0e343cd58cea15e7ae714ea16290bc9c4e52f61b84bd5847a2 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawItemTooltip(string? text)
```

Draws a consistently sized, wrapped editor tooltip for the most recently submitted item.

**Parameter `text`:** Tooltip text. Empty values do not draw a tooltip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L88).
