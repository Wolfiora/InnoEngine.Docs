---
title: "ImGui — Method: Selectable"
description: "Exact Method: Selectable contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.6d73ffea6ff5e9af
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Selectable

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Selectable`

<a id="api-350bd61ac553377a"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Selectable(System.String,System.Boolean,InnoEditor.ImGui.ImGuiSelectableFlags,System.Numerics.Vector2) 31c0e8c4111877ef24ddb46c2c24fde61f6c91a00ff7111ab7058b1366dbfcb3 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.Selectable(string label, bool selected = false, InnoEditor.ImGui.ImGuiSelectableFlags flags = InnoEditor.ImGui.ImGuiSelectableFlags.None, System.Numerics.Vector2 size = default(System.Numerics.Vector2))
```

Draws one selectable item.

**Parameter `label`:** The visible label and identity.

**Parameter `selected`:** Whether the item is currently selected.

**Parameter `flags`:** Selectable behavior.

**Returns:** `true` when the item is activated.

**Parameter `size`:** The interaction bounds, or zero for the ordinary content size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L516).
