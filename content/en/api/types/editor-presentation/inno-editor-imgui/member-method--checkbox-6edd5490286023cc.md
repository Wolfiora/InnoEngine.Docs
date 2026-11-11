---
title: "ImGui — Method: Checkbox"
description: "Exact Method: Checkbox contracts in ImGui."
uid: api.inno.editor.imgui.6edd5490286023cc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: Checkbox

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Checkbox`

<a id="api-9c6e1830074d9fd0"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.Checkbox(System.String,System.Boolean@) bbd09722e1959f9d7cb399845a94f06bcad7906ecf4fba7353b938042e8d3c3e -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.Checkbox(string label, ref bool value)
```

Draws and edits a Boolean value.

**Parameter `label`:** The control label.

**Returns:** `true` when the value changes.

**Parameter `value`:** The checked state, updated when the user toggles the control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L73).
