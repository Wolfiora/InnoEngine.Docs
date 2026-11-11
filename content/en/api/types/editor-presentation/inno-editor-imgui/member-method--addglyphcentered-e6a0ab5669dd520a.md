---
title: "ImGuiWidget.ImGuiWidget — Method: AddGlyphCentered"
description: "Exact Method: AddGlyphCentered contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.e6a0ab5669dd520a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: AddGlyphCentered

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddGlyphCentered`

<a id="api-10e36babb3d84346"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.AddGlyphCentered(System.Single,System.String,System.Numerics.Vector2,System.UInt32) b875e62dd33044500ccad4838e79c346f46aeb997aa9730afd26a929e80b2f54 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.AddGlyphCentered(float fontSize, string text, System.Numerics.Vector2 center, uint color)
```

Centers a glyph in the current window without exposing a native draw list.

**Parameter `fontSize`:** The positive baked font size.

**Parameter `text`:** The glyph text.

**Parameter `center`:** The requested visible center in screen coordinates.

**Parameter `color`:** Packed text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L78).
