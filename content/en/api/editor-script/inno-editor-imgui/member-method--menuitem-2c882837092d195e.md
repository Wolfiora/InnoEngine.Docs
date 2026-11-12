---
title: "ImGui — Method: MenuItem"
description: "Exact Method: MenuItem contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.2c882837092d195e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: MenuItem

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `MenuItem`

<a id="api-cb603347ff6f0ba0"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.MenuItem(System.String,System.String,System.Boolean,System.Boolean) a7663ce6506f75e5e15a722164283a3aabe47c15075b2be1fb13006f5215ac27 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.MenuItem(string label, string shortcut = "", bool selected = false, bool enabled = true)
```

Draws a menu item with explicit availability and checked state.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `shortcut`:** A display label only; execution remains with the Action router.

**Parameter `selected`:** Whether the item is currently selected.

**Parameter `enabled`:** Whether the control can accept input.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L53).
