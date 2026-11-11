---
title: "ImGuiWidget.ImGuiWidget — Method: PropertyLabel"
description: "Exact Method: PropertyLabel contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.3a80c0b47b260632
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: PropertyLabel

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PropertyLabel`

<a id="api-05b788c5fc7f7f54"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyLabel(System.String,System.String) a28475c438dc7081a14ec2c7794df1e9ffaa8569a79759f809cb06f89614698c -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyLabel(string label, string? tooltip = null)
```

Draws a label within its current table cell, wrapping when the column is narrow.

**Parameter `label`:** Visible label text.

**Parameter `tooltip`:** Optional explanation shown while the label is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `label` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L119).
