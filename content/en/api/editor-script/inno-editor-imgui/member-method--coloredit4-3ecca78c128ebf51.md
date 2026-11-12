---
title: "ImGui — Method: ColorEdit4"
description: "Exact Method: ColorEdit4 contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.3ecca78c128ebf51
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: ColorEdit4

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ColorEdit4`

<a id="api-a23cfb2b1ce02766"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.ColorEdit4(System.String,System.Numerics.Vector4@,InnoEditor.ImGui.ImGuiColorEditFlags) f7637fd0debbe1dfe6dfa25c2537597640a2e5d743a461a712e3cb5bd55af7db -->

```csharp
public static bool InnoEditor.ImGui.ImGui.ColorEdit4(string label, ref System.Numerics.Vector4 value, InnoEditor.ImGui.ImGuiColorEditFlags flags = InnoEditor.ImGui.ImGuiColorEditFlags.None)
```

Draws and edits a four-component color.

**Parameter `label`:** The control label.

**Parameter `value`:** The RGBA value to display and update.

**Parameter `flags`:** Color editing behavior.

**Returns:** `true` when the value changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L278).
