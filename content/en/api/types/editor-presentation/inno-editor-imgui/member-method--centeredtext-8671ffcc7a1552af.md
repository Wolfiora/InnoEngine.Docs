---
title: "ImGuiWidget.ImGuiWidget — Method: CenteredText"
description: "Exact Method: CenteredText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.8671ffcc7a1552af
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CenteredText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CenteredText`

<a id="api-c9ae9558da043809"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredText(System.String,System.Numerics.Vector2) dcb4f6f0eee31318fbd2f26525f5d1b29e760c90fbb29ae0bbbff6a3a3ccf37b -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredText(string text, System.Numerics.Vector2 areaSize)
```

Draws non-interactive text centered inside a reserved layout area.

**Parameter `text`:** Visible text.

**Parameter `areaSize`:** Size of the layout area that contains the text.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when either component of `areaSize` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L347).
