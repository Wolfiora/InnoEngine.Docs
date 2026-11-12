---
title: "ImGui — Method: IsMouseClicked"
description: "Exact Method: IsMouseClicked contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.e40284309419e208
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsMouseClicked

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsMouseClicked`

<a id="api-1eb71fd5dd8747d7"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsMouseClicked(InnoEditor.ImGui.ImGuiMouseButton,System.Boolean) b1b56aefc1ba05dfd1c30f9a11e5d9266cf8a07d3e6d2c1a2894e8d07ef34982 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsMouseClicked(InnoEditor.ImGui.ImGuiMouseButton button, bool repeat = false)
```

Checks a pointer-button press in the current frame.

**Parameter `button`:** The pointer button to inspect.

**Parameter `repeat`:** Whether a held key or button may produce repeats.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L35).
