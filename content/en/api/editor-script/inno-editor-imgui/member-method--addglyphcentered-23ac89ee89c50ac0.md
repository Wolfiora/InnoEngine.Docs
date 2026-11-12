---
title: "ImGuiWidget — Method: AddGlyphCentered"
description: "Exact Method: AddGlyphCentered contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.23ac89ee89c50ac0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: AddGlyphCentered

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `AddGlyphCentered`

<a id="api-ec7f4616b37c9ad7"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.AddGlyphCentered(System.Single,System.String,System.Numerics.Vector2,System.UInt32) de53534899b9f42d6284dcb0de7147a6df2c088be27cfe8c553627f32dc08944 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.AddGlyphCentered(float fontSize, string text, System.Numerics.Vector2 center, uint color)
```

Centers a glyph in the current window without exposing a native draw list.

**Parameter `fontSize`:** The positive baked font size.

**Parameter `text`:** The glyph text.

**Parameter `center`:** The requested visible center in screen coordinates.

**Parameter `color`:** Packed text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L78).
