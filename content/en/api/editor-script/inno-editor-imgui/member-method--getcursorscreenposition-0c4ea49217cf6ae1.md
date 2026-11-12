---
title: "ImGui — Method: GetCursorScreenPosition"
description: "Exact Method: GetCursorScreenPosition contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.0c4ea49217cf6ae1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetCursorScreenPosition

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetCursorScreenPosition`

<a id="api-ec3f5ed3919f968b"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetCursorScreenPosition f1bab6926e2ae7c869d528c98dab95ff5bf84899d012db54a2e9c75e58ffcd30 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetCursorScreenPosition()
```

Gets the current screen-space cursor position.

**Returns:** The screen-space cursor position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L998).
