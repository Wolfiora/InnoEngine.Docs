---
title: "ImGuiWidget.ImGuiWidget — Method: IconText"
description: "Exact Method: IconText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.5a2d0d8d82e5d6c3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: IconText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IconText`

<a id="api-7419f9d1bfaf8f81"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IconText(System.String,System.String,System.Boolean) 5518ef5f5c7426611a790f74cb8659ef5c276dc39ce773bbc52da2853716f8f6 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IconText(string icon, string text, bool highlight)
```

Draws icon and text with the icon's visible glyph bounds centered in a slot that expands
when the glyph is wider than the normal editor icon slot.

**Parameter `icon`:** Icon text.

**Parameter `text`:** Main text.

**Parameter `highlight`:** Whether to underline and emphasize the drawn icon and text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L605).
