---
title: "ImGui — Method: DragFloat"
description: "Exact Method: DragFloat contracts in ImGui."
uid: api.inno.editor.imgui.4c494e85df0e6595
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DragFloat

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DragFloat`

<a id="api-537e7f76668aa0c7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DragFloat(System.String,System.Single@,System.Single,System.Single,System.Single) 3f59fbd583c0915c0ef9763b607e39f6686a9d4fbe1920036abdafd81f75c881 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.DragFloat(string label, ref float value, float speed = 1, float minimum = 0, float maximum = 0)
```

Draws a floating-point drag control.

**Parameter `label`:** The control label.

**Parameter `value`:** The value to display and update.

**Parameter `speed`:** The drag speed.

**Parameter `minimum`:** The inclusive minimum, or zero with a zero maximum for no clamping.

**Parameter `maximum`:** The inclusive maximum, or zero with a zero minimum for no clamping.

**Returns:** `true` when the value changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L220).
