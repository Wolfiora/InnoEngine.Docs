---
title: "ImGuiWidget.ImGuiWidget — Method: Checkbox"
description: "Exact Method: Checkbox contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.45063cad640e5e99
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: Checkbox

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Checkbox`

<a id="api-95a527ababeedb42"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String) 0f02193737397533ffbbc94edef322ab6fa8d7f29ad7420c50dda65899d82079 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Checkbox(string label, ref bool value, string? tooltip = null)
```

Draws a standard checkbox with the shared editor tooltip behavior.

**Parameter `label`:** Visible label and stable ImGui identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

**Returns:** `true` when the value changed.

**Throws `System.ArgumentException`:** Thrown when `label` is empty or whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L202).
