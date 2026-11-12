---
title: "ImGuiWidget — Method: IconText"
description: "Exact Method: IconText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.f58a13d5fed6db56
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: IconText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IconText`

<a id="api-11f66d6f1c0b0570"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.IconText(System.String,System.String,System.Boolean) b1ff820d276983a20cd441f45ef59c3bea4a21dbe6f927c129c259a11dcc8f19 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.IconText(string icon, string text, bool highlight)
```

Draws icon and text with the icon's visible glyph bounds centered in a slot that expands
when the glyph is wider than the normal editor icon slot.

**Parameter `icon`:** Icon text.

**Parameter `text`:** Main text.

**Parameter `highlight`:** Whether to underline and emphasize the drawn icon and text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L605).
