---
title: "ImGuiWidget — Method: AxisDragFloat"
description: "Exact Method: AxisDragFloat contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.c9999249b6c12e1b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: AxisDragFloat

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `AxisDragFloat`

<a id="api-ef14e1aec8b0bcb6"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.AxisDragFloat(System.String,System.String,System.Single@,System.Single,System.Single) b6e8c609802e3019b4696d6eda0b169cd8673898686e4f850dc686162f7e0080 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.AxisDragFloat(string id, string axis, ref float value, float width, float speed = 0.1)
```

Draws a float drag field with a compact colored axis prefix.

**Parameter `id`:** Stable control identifier.

**Parameter `axis`:** Axis label such as X, Y, Z, or W.

**Parameter `value`:** Mutable numeric value.

**Parameter `width`:** Total width including the axis prefix.

**Parameter `speed`:** Drag speed.

**Returns:** `true` when the value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L221).
