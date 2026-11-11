---
title: "ImGuiWidget.ImGuiWidget — Method: GetClickableTextSize"
description: "Exact Method: GetClickableTextSize contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.3fdd156ecfa31265
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: GetClickableTextSize

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetClickableTextSize`

<a id="api-87d59e32db89458c"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2) 326288f04095c9c9aa4c4834214461ee653f95ef3557974128da6e80c6c034ae -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetClickableTextSize(string text, System.Numerics.Vector2 padding)
```

Calculates a clickable text area from visible text and requested inner padding.

**Parameter `text`:** Visible text whose dimensions determine the content size.

**Parameter `padding`:** Horizontal and vertical padding surrounding the text.

**Returns:** The complete transparent interaction area size.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when either component of `padding` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L538).
