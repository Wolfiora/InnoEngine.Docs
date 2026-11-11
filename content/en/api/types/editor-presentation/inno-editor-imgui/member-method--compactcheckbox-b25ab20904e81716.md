---
title: "ImGuiWidget.ImGuiWidget — Method: CompactCheckbox"
description: "Exact Method: CompactCheckbox contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.b25ab20904e81716
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CompactCheckbox

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompactCheckbox`

<a id="api-c3d0dd9affafb96f"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactCheckbox(System.String,System.Boolean@,System.Single,System.String) 1d0279f697e181cc2228aa64dbbaf2b87b0d6c9478ada3b6f5259d7bbcf21b8b -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactCheckbox(string id, ref bool value, float size = -1, string? tooltip = null)
```

Draws a compact checkbox whose checked fill uses the current text color.

**Parameter `id`:** Stable control identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `size`:** Visual square size in pixels.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

**Returns:** `true` when the value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L134).
