---
title: "ImGui — Method: DrawFilledRectangle"
description: "Exact Method: DrawFilledRectangle contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.acdfa7683afcaac0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DrawFilledRectangle

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawFilledRectangle`

<a id="api-015ca17b78f4bec1"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DrawFilledRectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) 0f0404e438350ad9cb7ef405002781c58456dfe65e3b04ba774a7b07b805518e -->

```csharp
public static void InnoEditor.ImGui.ImGui.DrawFilledRectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0)
```

Adds a filled rectangle to the current window draw list.

**Parameter `minimum`:** The screen-space minimum corner.

**Parameter `maximum`:** The screen-space maximum corner.

**Parameter `color`:** The packed ImGui color.

**Parameter `rounding`:** The corner rounding radius.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1248).
