---
title: "ImGuiWidget.ImGuiWidget — Method: AxisDragFloat"
description: "Exact Method: AxisDragFloat contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.8bdf375bb63f9d92
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: AxisDragFloat

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AxisDragFloat`

<a id="api-4f5d6b32f2bef2b6"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.AxisDragFloat(System.String,System.String,System.Single@,System.Single,System.Single) 6042b0e2ee2e854e569cd1e7c1c79b84426a0c671b705578aa9fd8de05d47a3e -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.AxisDragFloat(string id, string axis, ref float value, float width, float speed = 0.1)
```

Draws a float drag field with a compact colored axis prefix.

**Parameter `id`:** Stable control identifier.

**Parameter `axis`:** Axis label such as X, Y, Z, or W.

**Parameter `value`:** Mutable numeric value.

**Parameter `width`:** Total width including the axis prefix.

**Parameter `speed`:** Drag speed.

**Returns:** `true` when the value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L221).
