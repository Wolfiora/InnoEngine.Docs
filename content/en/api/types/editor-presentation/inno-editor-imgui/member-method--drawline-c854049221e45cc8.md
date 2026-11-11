---
title: "ImGui — Method: DrawLine"
description: "Exact Method: DrawLine contracts in ImGui."
uid: api.inno.editor.imgui.c854049221e45cc8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DrawLine

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawLine`

<a id="api-66b562f445a0d1da"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DrawLine(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) df55f058fe9d897369ca8032bba0587633057ac3ae9dac77bc28b39b8a021a15 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.DrawLine(System.Numerics.Vector2 start, System.Numerics.Vector2 end, uint color, float thickness = 1)
```

Adds a line to the current window draw list.

**Parameter `start`:** The screen-space start point.

**Parameter `end`:** The screen-space end point.

**Parameter `color`:** The packed ImGui color.

**Parameter `thickness`:** The line thickness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1194).
