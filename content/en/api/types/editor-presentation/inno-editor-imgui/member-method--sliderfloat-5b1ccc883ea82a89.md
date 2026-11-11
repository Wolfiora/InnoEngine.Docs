---
title: "ImGui — Method: SliderFloat"
description: "Exact Method: SliderFloat contracts in ImGui."
uid: api.inno.editor.imgui.5b1ccc883ea82a89
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SliderFloat

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SliderFloat`

<a id="api-f8f5d1b644545bf9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SliderFloat(System.String,System.Single@,System.Single,System.Single,Inno.Editor.ImGui.ImGuiSliderFlags) 1cb725878e7ef407d16404dce64ace911b32572b25a33ebda2c551fda15bb36f -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.SliderFloat(string label, ref float value, float minimum, float maximum, Inno.Editor.ImGui.ImGuiSliderFlags flags = Inno.Editor.ImGui.ImGuiSliderFlags.None)
```

Draws a bounded floating-point slider.

**Parameter `label`:** The control label.

**Parameter `value`:** The value to display and update.

**Parameter `minimum`:** The inclusive minimum.

**Parameter `maximum`:** The inclusive maximum.

**Parameter `flags`:** Slider behavior.

**Returns:** `true` when the value changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L252).
