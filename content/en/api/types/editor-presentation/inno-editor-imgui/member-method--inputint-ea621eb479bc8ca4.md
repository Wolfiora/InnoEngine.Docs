---
title: "ImGui — Method: InputInt"
description: "Exact Method: InputInt contracts in ImGui."
uid: api.inno.editor.imgui.ea621eb479bc8ca4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: InputInt

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InputInt`

<a id="api-f56b5ea1ce137adc"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.InputInt(System.String,System.Int32@,System.Int32,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags) dfcc6d70bf266c68f4b6ad737c5c79f18b97a0443454788e7ac020db265e1165 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.InputInt(string label, ref int value, int step = 1, int fastStep = 100, Inno.Editor.ImGui.ImGuiInputTextFlags flags = Inno.Editor.ImGui.ImGuiInputTextFlags.None)
```

Draws and edits an integer value.

**Parameter `label`:** The control label.

**Returns:** `true` when the value changes.

**Parameter `value`:** The integer displayed by the control and replaced after an accepted edit.

**Parameter `step`:** Increment used by the ordinary step button.

**Parameter `fastStep`:** Increment used by the accelerated step button.

**Parameter `flags`:** Text editing options for the numeric field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L168).
