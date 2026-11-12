---
title: "ImGui — Method: DrawLine"
description: "Exact Method: DrawLine contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.7515d5561c4e3b98
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DrawLine

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawLine`

<a id="api-fa457d46f7cd2054"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DrawLine(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) 4b0afe1329dbaa942921bbc0a3b54aa6e98c89a0b0673abc67bd9a75365b514c -->

```csharp
public static void InnoEditor.ImGui.ImGui.DrawLine(System.Numerics.Vector2 start, System.Numerics.Vector2 end, uint color, float thickness = 1)
```

Adds a line to the current window draw list.

**Parameter `start`:** The screen-space start point.

**Parameter `end`:** The screen-space end point.

**Parameter `color`:** The packed ImGui color.

**Parameter `thickness`:** The line thickness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1194).
