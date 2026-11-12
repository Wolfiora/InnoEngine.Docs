---
title: "ImGui — Method: DragInt"
description: "Exact Method: DragInt contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.8e4664905bc97484
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DragInt

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DragInt`

<a id="api-6ccd374b1dd1ace2"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DragInt(System.String,System.Int32@,System.Single,System.Int32,System.Int32,System.String,InnoEditor.ImGui.ImGuiSliderFlags) c6ba3b3891998f0ea02a6470a8d9eb5c88387567282b22ec303f86c0967a47ec -->

```csharp
public static bool InnoEditor.ImGui.ImGui.DragInt(string label, ref int value, float speed = 1, int minimum = 0, int maximum = 0, string format = "%d", InnoEditor.ImGui.ImGuiSliderFlags flags = InnoEditor.ImGui.ImGuiSliderFlags.None)
```

Edits an integer by pointer drag with explicit speed and optional bounds.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `value`:** The caller-owned value updated only after an accepted edit.

**Parameter `speed`:** The pointer movement multiplier.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `format`:** The numeric display format.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L126).
