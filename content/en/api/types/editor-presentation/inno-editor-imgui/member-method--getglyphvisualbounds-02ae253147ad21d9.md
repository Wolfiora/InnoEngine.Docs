---
title: "ImGuiWidget.ImGuiWidget — Method: GetGlyphVisualBounds"
description: "Exact Method: GetGlyphVisualBounds contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.02ae253147ad21d9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: GetGlyphVisualBounds

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGlyphVisualBounds`

<a id="api-ae48c4c610d9f56b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String) 3d1d0abfbc007a645d58e76ac34f73ec868b0f2ac9584d7dc9c2f1026b0c2c5d -->

```csharp
public System.Numerics.Vector4 Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetGlyphVisualBounds(float fontSize, string text)
```

Measures a glyph using the current font without exposing its native font handle.

**Parameter `fontSize`:** The positive baked font size.

**Parameter `text`:** A nonempty string whose first Unicode scalar identifies the glyph.

**Returns:** The glyph's visible left, top, right and bottom offsets.

**Throws `System.ArgumentException`:** The glyph text is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L55).
