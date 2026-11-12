---
title: "ImGui — Method: GetWindowSize"
description: "Exact Method: GetWindowSize contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.32a63ddc2d6668e0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetWindowSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetWindowSize`

<a id="api-f713b8a9475755ab"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetWindowSize b0d2428e7352bd6e51d6b5eb32a5392d53eaa0caf502a068f0a2c1b806a7949d -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetWindowSize()
```

Gets the current window size in UI units.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L89).
