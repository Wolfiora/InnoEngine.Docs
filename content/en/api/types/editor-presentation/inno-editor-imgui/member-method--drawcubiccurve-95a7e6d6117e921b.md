---
title: "ImGui — Method: DrawCubicCurve"
description: "Exact Method: DrawCubicCurve contracts in ImGui."
uid: api.inno.editor.imgui.95a7e6d6117e921b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DrawCubicCurve

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawCubicCurve`

<a id="api-728868927bbe02a3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DrawCubicCurve(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) d7d26156256c1a508b87e20dae5f82f69dfd409ff119e9f42971772200467832 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.DrawCubicCurve(System.Numerics.Vector2 start, System.Numerics.Vector2 firstControl, System.Numerics.Vector2 secondControl, System.Numerics.Vector2 end, uint color, float thickness = 1)
```

Draws a cubic curve without exposing a native draw list or borrowed pointer.

**Parameter `start`:** The first screen-space endpoint.

**Parameter `firstControl`:** The control point beside the first endpoint.

**Parameter `secondControl`:** The control point beside the final endpoint.

**Parameter `end`:** The final screen-space endpoint.

**Parameter `color`:** The packed presentation color.

**Parameter `thickness`:** The positive stroke width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1279).
