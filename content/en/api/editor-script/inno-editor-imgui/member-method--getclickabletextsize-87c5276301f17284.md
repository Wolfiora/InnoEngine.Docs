---
title: "ImGuiWidget — Method: GetClickableTextSize"
description: "Exact Method: GetClickableTextSize contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.87c5276301f17284
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetClickableTextSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetClickableTextSize`

<a id="api-aaad5c4492df8662"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2) e21c36c98705f1452472fd9a194ef9307a64714297f641b4bd5914839695cd57 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.ImGuiWidget.GetClickableTextSize(string text, System.Numerics.Vector2 padding)
```

Calculates a clickable text area from visible text and requested inner padding.

**Parameter `text`:** Visible text whose dimensions determine the content size.

**Parameter `padding`:** Horizontal and vertical padding surrounding the text.

**Returns:** The complete transparent interaction area size.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when either component of `padding` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L538).
