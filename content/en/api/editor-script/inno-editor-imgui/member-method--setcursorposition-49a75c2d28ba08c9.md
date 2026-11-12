---
title: "ImGui — Method: SetCursorPosition"
description: "Exact Method: SetCursorPosition contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.49a75c2d28ba08c9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetCursorPosition

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetCursorPosition`

<a id="api-c5eec7a3ee2c615d"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetCursorPosition(System.Numerics.Vector2) 395191960329185437dbd942f94c7a6e4a74c7ae190a9ed9bde71e53a32c0a72 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetCursorPosition(System.Numerics.Vector2 position)
```

Sets the current local cursor position.

**Parameter `position`:** The position consumed by set cursor position; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L986).
