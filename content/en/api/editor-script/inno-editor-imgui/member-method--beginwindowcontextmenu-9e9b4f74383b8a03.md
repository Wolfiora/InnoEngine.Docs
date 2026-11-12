---
title: "ImGuiWidget — Method: BeginWindowContextMenu"
description: "Exact Method: BeginWindowContextMenu contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.9e9b4f74383b8a03
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginWindowContextMenu

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginWindowContextMenu`

<a id="api-1f88f925c3b85a16"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginWindowContextMenu(System.String) 09f21905dfdf5f95b9058065208301dd854648c5772dbb2610830f24803116d0 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginWindowContextMenu(string id)
```

Begins a parent-viewport styled right-click context menu for the current window's unoccupied background.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Returns:** `true` when context-menu content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L183).
