---
title: "ImGui — Method: InputText"
description: "Exact Method: InputText contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.e89f046ee5e32a94
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: InputText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InputText`

<a id="api-779040399c63629f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags) d8bd9aed37d1e1103e81132154463ccfc41011f8c45f2818d445c1810a1b5b4f -->

```csharp
public static bool InnoEditor.ImGui.ImGui.InputText(string label, ref string value, int capacity = 1024, InnoEditor.ImGui.ImGuiInputTextFlags flags = InnoEditor.ImGui.ImGuiInputTextFlags.None)
```

Draws and edits a bounded UTF-8 text value.

**Parameter `label`:** The control label.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L102).
