---
title: "ImGui — Method: GetWindowPos"
description: "Exact Method: GetWindowPos contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.a16c533b6be1c4be
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetWindowPos

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetWindowPos`

<a id="api-4b9f021ced7e8067"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetWindowPos 289ed66501860bca1322f11bba6ed95f9575f89a5a9dfc1c03f745021d83f3ee -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetWindowPos()
```

Gets the current window screen-space origin.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L77).
