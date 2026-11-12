---
title: "ImGui — Method: DrawCubicCurve"
description: "Exact Method: DrawCubicCurve contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.6758e5a0e5bb19d3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DrawCubicCurve

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawCubicCurve`

<a id="api-7846c31668001728"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DrawCubicCurve(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) 5b9cd4fe755cfc219b9181cc0ad99de6176f1961380dc27aa9e4dce000670dc0 -->

```csharp
public static void InnoEditor.ImGui.ImGui.DrawCubicCurve(System.Numerics.Vector2 start, System.Numerics.Vector2 firstControl, System.Numerics.Vector2 secondControl, System.Numerics.Vector2 end, uint color, float thickness = 1)
```

Draws a cubic curve without exposing a native draw list or borrowed pointer.

**Parameter `start`:** The first screen-space endpoint.

**Parameter `firstControl`:** The control point beside the first endpoint.

**Parameter `secondControl`:** The control point beside the final endpoint.

**Parameter `end`:** The final screen-space endpoint.

**Parameter `color`:** The packed presentation color.

**Parameter `thickness`:** The positive stroke width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1279).
