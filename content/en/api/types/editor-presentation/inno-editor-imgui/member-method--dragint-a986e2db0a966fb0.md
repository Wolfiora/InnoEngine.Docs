---
title: "ImGui — Method: DragInt"
description: "Exact Method: DragInt contracts in ImGui."
uid: api.inno.editor.imgui.a986e2db0a966fb0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: DragInt

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DragInt`

<a id="api-397b54305a256f24"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.DragInt(System.String,System.Int32@,System.Single,System.Int32,System.Int32,System.String,Inno.Editor.ImGui.ImGuiSliderFlags) dbad06c1699aa4a6833d83873025510e3258cf1f2149ef2c92d02d547427335b -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.DragInt(string label, ref int value, float speed = 1, int minimum = 0, int maximum = 0, string format = "%d", Inno.Editor.ImGui.ImGuiSliderFlags flags = Inno.Editor.ImGui.ImGuiSliderFlags.None)
```

Edits an integer by pointer drag with explicit speed and optional bounds.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `value`:** The caller-owned value updated only after an accepted edit.

**Parameter `speed`:** The pointer movement multiplier.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `format`:** The numeric display format.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L126).
