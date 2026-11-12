---
title: "ImGuiWidget — Method: EndContextMenu"
description: "Exact Method: EndContextMenu contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.a44066f6ee5e3d4a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EndContextMenu

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EndContextMenu`

<a id="api-ed4d2e70e155e83e"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EndContextMenu a0c0834198d065e33d3d554425000c55e7ac1354ff0e6cffc3fce1df3fe803e7 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.EndContextMenu()
```

Ends a context menu opened by `InnoEditor.ImGui.ImGuiWidget.BeginContextMenu(System.String)` or `InnoEditor.ImGui.ImGuiWidget.BeginWindowContextMenu(System.String)`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L202).
