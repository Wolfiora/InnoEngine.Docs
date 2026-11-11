---
title: "ImGuiWidget.ImGuiWidget — Method: CompactDragFloat"
description: "Exact Method: CompactDragFloat contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.1101e9af46f1a122
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CompactDragFloat

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompactDragFloat`

<a id="api-e9dc88d855a91031"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactDragFloat(System.String,System.Single@,System.Single,System.Nullable{System.Single},System.Nullable{System.Single}) 1bbb86ba1396c8697f6e6a2fca3fa0f69c4bd1d2f4782ee07387999203616f46 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactDragFloat(string label, ref float value, float speed = 0.1, float? minimum = null, float? maximum = null)
```

Draws a floating-point drag field with a compact one-decimal presentation and precise text editing.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `speed`:** Drag speed.

**Parameter `minimum`:** Optional inclusive lower bound.

**Parameter `maximum`:** Optional inclusive upper bound.

**Returns:** `true` when the exact value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L254).
