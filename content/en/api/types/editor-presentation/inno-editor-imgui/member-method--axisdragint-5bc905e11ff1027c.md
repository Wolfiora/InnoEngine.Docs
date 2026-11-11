---
title: "ImGuiWidget.ImGuiWidget — Method: AxisDragInt"
description: "Exact Method: AxisDragInt contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.5bc905e11ff1027c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: AxisDragInt

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AxisDragInt`

<a id="api-f4ff7e4c83a505f3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.AxisDragInt(System.String,System.String,System.Int32@,System.Single,System.Single) 2268445817f7d7924d4e8cdaacb47a9668212d3db49a915e5d4acdc51ecbd321 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.AxisDragInt(string id, string axis, ref int value, float width, float speed = 1)
```

Draws an integer drag field with a compact colored axis prefix.

**Parameter `id`:** Stable control identifier.

**Parameter `axis`:** Axis label such as X, Y, Z, or W.

**Parameter `value`:** Mutable numeric value.

**Parameter `width`:** Total width including the axis prefix.

**Parameter `speed`:** Drag speed.

**Returns:** `true` when the value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L328).
