---
title: "ImGuiWidget — Method: ColoredText"
description: "Exact Method: ColoredText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.d5fa8913401fa110
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: ColoredText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ColoredText`

<a id="api-6c367edbeecfea0d"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.ColoredText(System.Numerics.Vector4,System.String) 82f2110818d8534519888252d3d4b68a285d234de583b7c56337d7afc22897e8 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.ColoredText(System.Numerics.Vector4 color, string text)
```

Draws unformatted text with a temporary foreground color.

**Parameter `color`:** The foreground color applied only while drawing the text.

**Parameter `text`:** The literal text to draw without format-string interpretation.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L433).
