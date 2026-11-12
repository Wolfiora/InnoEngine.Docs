---
title: "ImGui — Method: InputTextWithHint"
description: "Exact Method: InputTextWithHint contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.9d1c3a8e4b92b787
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: InputTextWithHint

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InputTextWithHint`

<a id="api-5c4433e9664fe9b2"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags) 16b1bfea81d0b0f5634d459c02357bf0161e0b3072967d550606c1b7025c81f2 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.InputTextWithHint(string label, string hint, ref string value, int capacity = 1024, InnoEditor.ImGui.ImGuiInputTextFlags flags = InnoEditor.ImGui.ImGuiInputTextFlags.None)
```

Draws and edits a bounded UTF-8 text value with placeholder text.

**Parameter `label`:** The control label.

**Parameter `hint`:** The placeholder shown while the value is empty.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L136).
