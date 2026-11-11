---
title: "ImGui — Method: SliderInt"
description: "Exact Method: SliderInt contracts in ImGui."
uid: api.inno.editor.imgui.e6b700edcfdd77be
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SliderInt

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SliderInt`

<a id="api-42aa8f7f2369297e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SliderInt(System.String,System.Int32@,System.Int32,System.Int32,System.String,Inno.Editor.ImGui.ImGuiSliderFlags) bf3f9a6e9664e2bdb7d8d45e30302bdc17d8ead5bb82b004106f74b920b1cfb3 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.SliderInt(string label, ref int value, int minimum, int maximum, string format = "%d", Inno.Editor.ImGui.ImGuiSliderFlags flags = Inno.Editor.ImGui.ImGuiSliderFlags.None)
```

Edits an integer within explicit inclusive bounds.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `value`:** The caller-owned value updated only after an accepted edit.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `format`:** The numeric display format.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L87).
