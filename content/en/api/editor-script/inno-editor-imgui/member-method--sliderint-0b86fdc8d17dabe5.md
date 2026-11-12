---
title: "ImGui — Method: SliderInt"
description: "Exact Method: SliderInt contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.0b86fdc8d17dabe5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SliderInt

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SliderInt`

<a id="api-cf21369d859dcaae"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SliderInt(System.String,System.Int32@,System.Int32,System.Int32,System.String,InnoEditor.ImGui.ImGuiSliderFlags) b7ce660e981a2d10d1a299e65c2fe4cfdd6ab6bc6a36677d61cdf1e678ecc537 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.SliderInt(string label, ref int value, int minimum, int maximum, string format = "%d", InnoEditor.ImGui.ImGuiSliderFlags flags = InnoEditor.ImGui.ImGuiSliderFlags.None)
```

Edits an integer within explicit inclusive bounds.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `value`:** The caller-owned value updated only after an accepted edit.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `format`:** The numeric display format.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L87).
