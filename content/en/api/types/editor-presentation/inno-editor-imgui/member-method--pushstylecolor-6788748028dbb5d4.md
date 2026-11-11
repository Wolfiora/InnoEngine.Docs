---
title: "ImGui — Method: PushStyleColor"
description: "Exact Method: PushStyleColor contracts in ImGui."
uid: api.inno.editor.imgui.6788748028dbb5d4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: PushStyleColor

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushStyleColor`

<a id="api-7ac7803bbe6eebc1"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.PushStyleColor(Inno.Editor.ImGui.ImGuiCol,System.Numerics.Vector4) c66f3af240b69bbdbf29c3bac875578b75cc867298e068679cb19597f909f93c -->

```csharp
public static void Inno.Editor.ImGui.ImGui.PushStyleColor(Inno.Editor.ImGui.ImGuiCol color, System.Numerics.Vector4 value)
```

Pushes one color override.

**Parameter `color`:** The style color slot.

**Parameter `value`:** The linear RGBA value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L807).
