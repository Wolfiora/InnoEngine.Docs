---
title: "ImGui — Method: SliderFloat"
description: "Exact Method: SliderFloat contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.a88540350c2fab0d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SliderFloat

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SliderFloat`

<a id="api-6f6724f38b2bb8a1"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SliderFloat(System.String,System.Single@,System.Single,System.Single,InnoEditor.ImGui.ImGuiSliderFlags) aa84a72292e2b787fd9e32718e78386ddd4b1b5f410e3cbdfcbabd974979a89a -->

```csharp
public static bool InnoEditor.ImGui.ImGui.SliderFloat(string label, ref float value, float minimum, float maximum, InnoEditor.ImGui.ImGuiSliderFlags flags = InnoEditor.ImGui.ImGuiSliderFlags.None)
```

Draws a bounded floating-point slider.

**Parameter `label`:** The control label.

**Parameter `value`:** The value to display and update.

**Parameter `minimum`:** The inclusive minimum.

**Parameter `maximum`:** The inclusive maximum.

**Parameter `flags`:** Slider behavior.

**Returns:** `true` when the value changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L252).
