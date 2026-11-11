---
title: "ImGui — Method: ColorEdit4"
description: "Exact Method: ColorEdit4 contracts in ImGui."
uid: api.inno.editor.imgui.8a0be76ef6b94f50
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: ColorEdit4

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ColorEdit4`

<a id="api-fe281fed4e3d88a2"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.ColorEdit4(System.String,System.Numerics.Vector4@,Inno.Editor.ImGui.ImGuiColorEditFlags) 2a86b9cd7b46d34be08d9ba94f5a9284d98971c019bb4b7ee8a67cdade0ce0e9 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.ColorEdit4(string label, ref System.Numerics.Vector4 value, Inno.Editor.ImGui.ImGuiColorEditFlags flags = Inno.Editor.ImGui.ImGuiColorEditFlags.None)
```

Draws and edits a four-component color.

**Parameter `label`:** The control label.

**Parameter `value`:** The RGBA value to display and update.

**Parameter `flags`:** Color editing behavior.

**Returns:** `true` when the value changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L278).
