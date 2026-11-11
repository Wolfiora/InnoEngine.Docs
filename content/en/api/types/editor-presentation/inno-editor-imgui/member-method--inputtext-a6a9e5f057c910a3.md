---
title: "ImGui — Method: InputText"
description: "Exact Method: InputText contracts in ImGui."
uid: api.inno.editor.imgui.a6a9e5f057c910a3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: InputText

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InputText`

<a id="api-5ad0fd709213a964"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags) 246473f770b040037868b263f8ba968215197c6df1b26b353f6e1fbea2362449 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.InputText(string label, ref string value, int capacity = 1024, Inno.Editor.ImGui.ImGuiInputTextFlags flags = Inno.Editor.ImGui.ImGuiInputTextFlags.None)
```

Draws and edits a bounded UTF-8 text value.

**Parameter `label`:** The control label.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L102).
