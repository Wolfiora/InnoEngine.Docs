---
title: "ImGui — Method: Selectable"
description: "Exact Method: Selectable contracts in ImGui."
uid: api.inno.editor.imgui.a792c96b2349197b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: Selectable

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Selectable`

<a id="api-1e49e587e9894f93"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.Selectable(System.String,System.Boolean,Inno.Editor.ImGui.ImGuiSelectableFlags,System.Numerics.Vector2) e05cd3be3f22efcff10e09b62d55a3efee02548b500a7cbf4bf957cbd9bed65b -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.Selectable(string label, bool selected = false, Inno.Editor.ImGui.ImGuiSelectableFlags flags = Inno.Editor.ImGui.ImGuiSelectableFlags.None, System.Numerics.Vector2 size = default(System.Numerics.Vector2))
```

Draws one selectable item.

**Parameter `label`:** The visible label and identity.

**Parameter `selected`:** Whether the item is currently selected.

**Parameter `flags`:** Selectable behavior.

**Returns:** `true` when the item is activated.

**Parameter `size`:** The interaction bounds, or zero for the ordinary content size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L516).
