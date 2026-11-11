---
title: "ImGui — Method: InputTextWithHint"
description: "Exact Method: InputTextWithHint contracts in ImGui."
uid: api.inno.editor.imgui.472855794516d2d4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: InputTextWithHint

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InputTextWithHint`

<a id="api-359391d6a79b9c72"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags) eb0e0fa4197555f63a40905df2e6e2c0ec2acbed7d7142c445662ad464734a02 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.InputTextWithHint(string label, string hint, ref string value, int capacity = 1024, Inno.Editor.ImGui.ImGuiInputTextFlags flags = Inno.Editor.ImGui.ImGuiInputTextFlags.None)
```

Draws and edits a bounded UTF-8 text value with placeholder text.

**Parameter `label`:** The control label.

**Parameter `hint`:** The placeholder shown while the value is empty.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L136).
