---
title: "ImGuiWidget — Method: BeginContextMenu"
description: "Exact Method: BeginContextMenu contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.788d28f7e3ccb9d9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginContextMenu

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginContextMenu`

<a id="api-70fc90e06acdcc16"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginContextMenu(System.String) a6102025821abc8875ad102cec1c843b0a73671731d121b7c736040186fe75ad -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginContextMenu(string id)
```

Begins a parent-viewport styled right-click context menu for the most recently submitted item.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Returns:** `true` when context-menu content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L161).
