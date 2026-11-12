---
title: "ImGui — Method: Checkbox"
description: "Exact Method: Checkbox contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.05ced33db069a80d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Checkbox

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Checkbox`

<a id="api-03282e9e14e76ae3"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Checkbox(System.String,System.Boolean@) f6796daef9c27c6451e5545dce6cd42c426f75bae131c2f2e4fa657002bcff47 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.Checkbox(string label, ref bool value)
```

Draws and edits a Boolean value.

**Parameter `label`:** The control label.

**Returns:** `true` when the value changes.

**Parameter `value`:** The checked state, updated when the user toggles the control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L73).
