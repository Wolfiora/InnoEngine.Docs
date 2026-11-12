---
title: "ImGui — Method: GetStyleColorValue"
description: "Exact Method: GetStyleColorValue contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.4f888c899d3cc0b5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetStyleColorValue

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetStyleColorValue`

<a id="api-5842f9f86db84a80"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetStyleColorValue(InnoEditor.ImGui.ImGuiCol) 0cfed4db5511a82360b552e8a52bab75e5165acc443d63dcf9a50bcd0e45c018 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.ImGui.GetStyleColorValue(InnoEditor.ImGui.ImGuiCol color)
```

Copies an unmodulated style color for compound presentation.

**Parameter `color`:** The semantic style color slot.

**Returns:** The copied linear vector of UI color components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L43).
