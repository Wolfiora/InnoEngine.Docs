---
title: "ImGui — Method: GetCursorPosition"
description: "Exact Method: GetCursorPosition contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ddffb71d74147c29
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetCursorPosition

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetCursorPosition`

<a id="api-6366b4bdc805143e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetCursorPosition 8d710ce0b54de8ae765673baaf6eec2f27293957fb3d04d158ddef822d76d0b9 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetCursorPosition()
```

Gets the current local cursor position.

**Returns:** The local cursor position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L974).
