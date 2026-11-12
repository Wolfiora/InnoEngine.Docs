---
title: "ImGuiWidget — Method: DrawItemTooltip"
description: "Exact Method: DrawItemTooltip contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.64abd7ffaa374cb2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DrawItemTooltip

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawItemTooltip`

<a id="api-41ad601c64c6f627"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DrawItemTooltip(System.String) 77c9a86da5064d83ef88fc0ff01e9aa221fc2eae222e4320dcf87b5b2d6566b6 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.DrawItemTooltip(string? text)
```

Draws a consistently sized, wrapped editor tooltip for the most recently submitted item.

**Parameter `text`:** Tooltip text. Empty values do not draw a tooltip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L88).
