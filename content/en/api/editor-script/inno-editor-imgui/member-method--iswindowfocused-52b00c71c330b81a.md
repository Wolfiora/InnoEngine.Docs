---
title: "ImGui — Method: IsWindowFocused"
description: "Exact Method: IsWindowFocused contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.52b00c71c330b81a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsWindowFocused

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsWindowFocused`

<a id="api-01c0d8e77c6ebe26"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsWindowFocused(InnoEditor.ImGui.ImGuiFocusedFlags) ef83dd84fad5429d6d1b5ac34e35dd433ded506e0f0ece325b9c3fb6790d35cf -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsWindowFocused(InnoEditor.ImGui.ImGuiFocusedFlags flags = InnoEditor.ImGui.ImGuiFocusedFlags.None)
```

Checks keyboard focus within the declared window scope.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L180).
