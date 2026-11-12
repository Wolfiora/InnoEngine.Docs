---
title: "ImGuiWidget — Method: GetGlyphVisualBounds"
description: "Exact Method: GetGlyphVisualBounds contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.912b9d72a49291dc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetGlyphVisualBounds

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetGlyphVisualBounds`

<a id="api-a0a73dcfa5306fee"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String) 5e077ded60ff077267a085a02f070dce6d5c80289a92f867852065cf5da8a46f -->

```csharp
public System.Numerics.Vector4 InnoEditor.ImGui.ImGuiWidget.GetGlyphVisualBounds(float fontSize, string text)
```

Measures a glyph using the current font without exposing its native font handle.

**Parameter `fontSize`:** The positive baked font size.

**Parameter `text`:** A nonempty string whose first Unicode scalar identifies the glyph.

**Returns:** The glyph's visible left, top, right and bottom offsets.

**Throws `System.ArgumentException`:** The glyph text is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L55).
