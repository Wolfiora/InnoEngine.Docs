---
title: "ImGuiWidget — Method: AxisDragInt"
description: "Exact Method: AxisDragInt contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.4ff9e51656c976c3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: AxisDragInt

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `AxisDragInt`

<a id="api-0814d9c818562df0"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.AxisDragInt(System.String,System.String,System.Int32@,System.Single,System.Single) eac2e699b3dc735819032fa0e645b3b4684e0307de3c49cd86a6bde820780111 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.AxisDragInt(string id, string axis, ref int value, float width, float speed = 1)
```

Draws an integer drag field with a compact colored axis prefix.

**Parameter `id`:** Stable control identifier.

**Parameter `axis`:** Axis label such as X, Y, Z, or W.

**Parameter `value`:** Mutable numeric value.

**Parameter `width`:** Total width including the axis prefix.

**Parameter `speed`:** Drag speed.

**Returns:** `true` when the value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L328).
