---
title: "ImGui — Method: GetFrameCount"
description: "Exact Method: GetFrameCount contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.fabd19ac5f112767
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetFrameCount

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetFrameCount`

<a id="api-357fb5ec1792411f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetFrameCount 42df171658a3b659bdf7c109461a3d8ffd177addb804d4c55cadf994ce052c5d -->

```csharp
public static int InnoEditor.ImGui.ImGui.GetFrameCount()
```

Gets the current native frame identity for transient diagnostics.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L273).
