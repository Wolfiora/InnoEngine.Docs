---
title: "ImGuiWidget.ImGuiWidget — Method: MetadataValue"
description: "Exact Method: MetadataValue contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.f0d0dda677abbdb1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: MetadataValue

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MetadataValue`

<a id="api-36e7c111f13640f3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MetadataValue(System.String,System.Action,System.String) a9948986bbc0a0b854abc1686d761ec781f14db9f0105a72f5024d75582b5d2d -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MetadataValue(string metadata, System.Action drawValue, string? tooltip = null)
```

Draws a subdued metadata prefix followed by an interactive value on the same line.

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `drawValue`:** Callback that draws the value or action following the metadata.

**Parameter `tooltip`:** Optional explanation displayed while the metadata is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `metadata` or `drawValue` is
`null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L146).

## `MetadataValue`

<a id="api-f72e3c4a5b543d47"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MetadataValue(System.String,System.String,System.String) 30e4fc4f4050ddc45577bb7d8fb8685f8180b1b58b40c684746103b4d9957d0e -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MetadataValue(string metadata, string value, string? tooltip = null)
```

Draws one wrapped, subdued value whose metadata and content remain in the value column.

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `value`:** Literal value description shown after the metadata separator.

**Parameter `tooltip`:** Optional explanation displayed while the combined value is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `metadata` or `value` is
`null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L180).
