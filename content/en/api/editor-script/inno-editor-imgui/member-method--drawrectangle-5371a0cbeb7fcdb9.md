---
title: "ImGui — Method: DrawRectangle"
description: "Exact Method: DrawRectangle contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.5371a0cbeb7fcdb9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DrawRectangle

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawRectangle`

<a id="api-b786d9bf48c81dce"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DrawRectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single,System.Single) 7a233742abe36aff649ea527a0d4ecb7a9312b94d04b0d3ab0263ca840834f31 -->

```csharp
public static void InnoEditor.ImGui.ImGui.DrawRectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0, float thickness = 1)
```

Adds a rectangle outline to the current window draw list.

**Parameter `minimum`:** The screen-space minimum corner.

**Parameter `maximum`:** The screen-space maximum corner.

**Parameter `color`:** The packed ImGui color.

**Parameter `rounding`:** The corner rounding radius.

**Parameter `thickness`:** The outline thickness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1222).
