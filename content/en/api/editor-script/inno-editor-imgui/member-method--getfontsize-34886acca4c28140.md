---
title: "ImGui — Method: GetFontSize"
description: "Exact Method: GetFontSize contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.34886acca4c28140
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetFontSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetFontSize`

<a id="api-c3591f783f64bb8f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetFontSize 09949caf70eb50e5260390345a8ff80bc4787bfcb89434160afbdc47ed1009f8 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetFontSize()
```

Gets the active font size in UI units.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L101).
