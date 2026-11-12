---
title: "ImGui — Method: PushStyleColor"
description: "Exact Method: PushStyleColor contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.4cc54221b3b0b6e1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PushStyleColor

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PushStyleColor`

<a id="api-661f9f9697b7092c"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushStyleColor(InnoEditor.ImGui.ImGuiCol,System.Numerics.Vector4) 4c5c558d3d70949c474558077d8b7225bcce20024eb1d8509919585ba241b37a -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushStyleColor(InnoEditor.ImGui.ImGuiCol color, System.Numerics.Vector4 value)
```

Pushes one color override.

**Parameter `color`:** The style color slot.

**Parameter `value`:** The linear RGBA value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L807).
