---
title: "ImGuiWidget — Method: InsertionLine"
description: "Exact Method: InsertionLine contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.ebedf8659d20c8c5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: InsertionLine

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InsertionLine`

<a id="api-6dd0196714048cba"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.InsertionLine(System.Single,System.Single,System.Single) 2794d291f2a216e83accac93b45511e0af6ecf745e10ba3e253525dc9cf41f49 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.InsertionLine(float fromX, float toX, float y)
```

Draws a horizontal insertion marker above normal window content in screen coordinates.

**Parameter `fromX`:** Marker start X coordinate.

**Parameter `toX`:** Marker end X coordinate.

**Parameter `y`:** Marker Y coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L378).
