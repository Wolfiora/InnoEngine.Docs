---
title: "ImGui — Method: DrawText"
description: "Exact Method: DrawText contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.6e5cd2a8f4913f05
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DrawText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawText`

<a id="api-6078bba453f87154"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DrawText(System.Numerics.Vector2,System.UInt32,System.String) daff3789b4c8ec9f3f3eace7ca2cd16160e046cad6f8ecc3a3258a3cb34f971f -->

```csharp
public static void InnoEditor.ImGui.ImGui.DrawText(System.Numerics.Vector2 position, uint color, string text)
```

Adds text to the current window draw list.

**Parameter `position`:** The screen-space text origin.

**Parameter `color`:** The packed ImGui color.

**Parameter `text`:** The text to draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1304).
