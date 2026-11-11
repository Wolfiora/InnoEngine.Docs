---
title: "ImGuiWidget.ImGuiWidget — Method: ColoredText"
description: "Exact Method: ColoredText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.dfd39651152f0533
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: ColoredText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ColoredText`

<a id="api-d88cfe171f06f996"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ColoredText(System.Numerics.Vector4,System.String) 77b9be75bf781ed8cb939bb1cb89979f19b505ade6c58bde5c2be2a47f9cad31 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ColoredText(System.Numerics.Vector4 color, string text)
```

Draws unformatted text with a temporary foreground color.

**Parameter `color`:** The foreground color applied only while drawing the text.

**Parameter `text`:** The literal text to draw without format-string interpretation.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L433).
