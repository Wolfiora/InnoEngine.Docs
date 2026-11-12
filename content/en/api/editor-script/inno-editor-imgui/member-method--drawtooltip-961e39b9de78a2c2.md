---
title: "ImGuiWidget — Method: DrawTooltip"
description: "Exact Method: DrawTooltip contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.961e39b9de78a2c2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DrawTooltip

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawTooltip`

<a id="api-75f86931dace3905"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DrawTooltip(System.String) c308cbf688fcf724660579874ecd70d6208d77acd486e8ba4b93112259776bd9 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.DrawTooltip(string? text)
```

Draws the standard viewport-clamped tooltip when a custom-drawn canvas element is hovered.

**Parameter `text`:** Tooltip contents. The caller owns hit testing; empty text draws nothing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L105).
