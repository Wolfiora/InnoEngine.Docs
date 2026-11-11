---
title: "ImGui — Method: MenuItem"
description: "Exact Method: MenuItem contracts in ImGui."
uid: api.inno.editor.imgui.a64dd993486deebc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: MenuItem

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MenuItem`

<a id="api-f0dd8711b02ba69e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.MenuItem(System.String,System.String,System.Boolean,System.Boolean) da66e3228aa522a72a1be0a0f44f4897e91ca3c0647006bbecdf7312b8cd3842 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.MenuItem(string label, string shortcut = "", bool selected = false, bool enabled = true)
```

Draws a menu item with explicit availability and checked state.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `shortcut`:** A display label only; execution remains with the Action router.

**Parameter `selected`:** Whether the item is currently selected.

**Parameter `enabled`:** Whether the control can accept input.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L53).
