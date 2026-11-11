---
title: "ImGui — Method: DrawRectangle"
description: "Exact Method: DrawRectangle contracts in ImGui."
uid: api.inno.editor.imgui.e0c762172ec967ac
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DrawRectangle

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawRectangle`

<a id="api-de93f8fdd54e0591"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DrawRectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single,System.Single) cad8f1f72350a63302ac794d4741f9d0f3c36b56394afa201eef40f1668cae1a -->

```csharp
public static void Inno.Editor.ImGui.ImGui.DrawRectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0, float thickness = 1)
```

Adds a rectangle outline to the current window draw list.

**Parameter `minimum`:** The screen-space minimum corner.

**Parameter `maximum`:** The screen-space maximum corner.

**Parameter `color`:** The packed ImGui color.

**Parameter `rounding`:** The corner rounding radius.

**Parameter `thickness`:** The outline thickness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1222).
