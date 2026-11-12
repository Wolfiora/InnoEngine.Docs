---
title: "ImGui — Method: InputInt"
description: "Exact Method: InputInt contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.5c0596b517a25c43
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: InputInt

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InputInt`

<a id="api-497741bed7a5b66e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.InputInt(System.String,System.Int32@,System.Int32,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags) 9051c9cb64931b79e7ca6e4d97471993f7028197ec4ad01e711d71d2861098a0 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.InputInt(string label, ref int value, int step = 1, int fastStep = 100, InnoEditor.ImGui.ImGuiInputTextFlags flags = InnoEditor.ImGui.ImGuiInputTextFlags.None)
```

Draws and edits an integer value.

**Parameter `label`:** The control label.

**Returns:** `true` when the value changes.

**Parameter `value`:** The integer displayed by the control and replaced after an accepted edit.

**Parameter `step`:** Increment used by the ordinary step button.

**Parameter `fastStep`:** Increment used by the accelerated step button.

**Parameter `flags`:** Text editing options for the numeric field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L168).
