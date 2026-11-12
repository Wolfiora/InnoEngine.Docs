---
title: "ImGui — Method: GetCursorPosY"
description: "Exact Method: GetCursorPosY contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.5a62ec28c698e906
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetCursorPosY

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetCursorPosY`

<a id="api-694cba1c2ec7b1ea"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetCursorPosY 19b9f0fe1db2569f5d3123eddbb9832ca2867fee2ee3757925f30979cb6195b8 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetCursorPosY()
```

Gets the local vertical layout cursor.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L65).
