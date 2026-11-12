---
title: "ImGui — Method: InputFloat"
description: "Exact Method: InputFloat contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.878c3c92de0f4bc8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: InputFloat

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InputFloat`

<a id="api-34e00afd6a574c31"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.InputFloat(System.String,System.Single@) 3c8f64315477e8ee1a6b1c4bb1f2193ae7c0129dcebc15a9a4ad50811dbdbe29 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.InputFloat(string label, ref float value)
```

Draws and edits a floating-point value.

**Parameter `label`:** The control label.

**Returns:** `true` when the value changes.

**Parameter `value`:** The number displayed with three fractional digits and replaced after an accepted edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L191).
