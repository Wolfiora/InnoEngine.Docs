---
title: "ImGuiWidget.ImGuiWidget — Method: CompactSliderFloat"
description: "Exact Method: CompactSliderFloat contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.addfde33b306e53b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CompactSliderFloat

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompactSliderFloat`

<a id="api-b1e3e46ef3a08544"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single) c690dba9d94848953e084320dfb541059fd9b04fe3bce57a48ee5d05cb605a40 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactSliderFloat(string label, ref float value, float minimum, float maximum)
```

Draws a bounded slider with compact presentation and a double-click precise input mode.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.

**Returns:** `true` when the exact value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L288).
