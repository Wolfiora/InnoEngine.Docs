---
title: "ImGui — Method: IsKeyPressed"
description: "Exact Method: IsKeyPressed contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.c2f0fee31bd963b6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsKeyPressed

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsKeyPressed`

<a id="api-d08200151f2ed249"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsKeyPressed(InnoEditor.ImGui.ImGuiKey,System.Boolean) 783c8d1d9237123c398172af75ce6b5f908b78bc44c9953603d26b87702f9056 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsKeyPressed(InnoEditor.ImGui.ImGuiKey key, bool repeat = true)
```

Checks a presentation-key press with explicit repeat policy.

**Parameter `key`:** The presentation key to inspect.

**Parameter `repeat`:** Whether a held key or button may produce repeats.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L100).
