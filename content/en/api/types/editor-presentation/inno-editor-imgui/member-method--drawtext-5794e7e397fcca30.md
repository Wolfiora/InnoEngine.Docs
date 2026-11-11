---
title: "ImGui — Method: DrawText"
description: "Exact Method: DrawText contracts in ImGui."
uid: api.inno.editor.imgui.5794e7e397fcca30
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DrawText

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawText`

<a id="api-a6c87e97edf1effb"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DrawText(System.Numerics.Vector2,System.UInt32,System.String) 6d631601f25aec84e70ab57afce8d7e771ddab42e3ae316e453939f5da4e7209 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.DrawText(System.Numerics.Vector2 position, uint color, string text)
```

Adds text to the current window draw list.

**Parameter `position`:** The screen-space text origin.

**Parameter `color`:** The packed ImGui color.

**Parameter `text`:** The text to draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1304).
