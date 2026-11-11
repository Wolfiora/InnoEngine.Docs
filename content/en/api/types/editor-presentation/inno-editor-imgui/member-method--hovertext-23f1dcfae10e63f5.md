---
title: "ImGuiWidget.ImGuiWidget — Method: HoverText"
description: "Exact Method: HoverText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.23f1dcfae10e63f5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: HoverText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HoverText`

<a id="api-eadabb0d1ce7d346"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HoverText(System.String,System.String) d46873d18b263c67221d3c3cac8f54fe53cc25ad799266b887f89d06d6b6722d -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HoverText(string id, string text)
```

Draws a text link with no button background and highlights it only through text presentation.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible link text.

**Returns:** `true` when the link is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L205).
