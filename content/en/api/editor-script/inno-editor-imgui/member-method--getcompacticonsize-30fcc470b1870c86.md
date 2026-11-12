---
title: "ImGuiWidget — Method: GetCompactIconSize"
description: "Exact Method: GetCompactIconSize contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.30fcc470b1870c86
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetCompactIconSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetCompactIconSize`

<a id="api-8d61b2bbadb88784"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetCompactIconSize 96c1b31fced4631f179e6e6ad536da563d4c153f1b712eab475b7610e9f30008 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.ImGuiWidget.GetCompactIconSize()
```

Gets the square icon interaction size shared by dock-header close controls and compact editor icons.

**Returns:** A square size based on the current ImGui font size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L572).
