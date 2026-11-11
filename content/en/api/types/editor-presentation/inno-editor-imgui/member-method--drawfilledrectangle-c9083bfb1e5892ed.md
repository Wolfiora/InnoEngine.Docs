---
title: "ImGui — Method: DrawFilledRectangle"
description: "Exact Method: DrawFilledRectangle contracts in ImGui."
uid: api.inno.editor.imgui.c9083bfb1e5892ed
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DrawFilledRectangle

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawFilledRectangle`

<a id="api-21d0f813f0949d51"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DrawFilledRectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) ed96a8de190f4370ba49502bf03051ad7067f560d31d1cb09827093817094826 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.DrawFilledRectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0)
```

Adds a filled rectangle to the current window draw list.

**Parameter `minimum`:** The screen-space minimum corner.

**Parameter `maximum`:** The screen-space maximum corner.

**Parameter `color`:** The packed ImGui color.

**Parameter `rounding`:** The corner rounding radius.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1248).
