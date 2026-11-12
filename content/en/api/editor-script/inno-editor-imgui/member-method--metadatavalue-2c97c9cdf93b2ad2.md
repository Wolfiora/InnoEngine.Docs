---
title: "ImGuiWidget — Method: MetadataValue"
description: "Exact Method: MetadataValue contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.2c97c9cdf93b2ad2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: MetadataValue

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `MetadataValue`

<a id="api-23900cc127ba34d6"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.MetadataValue(System.String,System.Action,System.String) 781431182bf0e1dd99ef2644b6125881b2c290bd296f94a91b4c8bed1fd33e0d -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.MetadataValue(string metadata, System.Action drawValue, string? tooltip = null)
```

Draws a subdued metadata prefix followed by an interactive value on the same line.

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `drawValue`:** Callback that draws the value or action following the metadata.

**Parameter `tooltip`:** Optional explanation displayed while the metadata is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `metadata` or `drawValue` is
`null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L146).

## `MetadataValue`

<a id="api-1d5ac6c6c275c4ee"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.MetadataValue(System.String,System.String,System.String) 2d14a25e6b74ed7c26741859e4a0e1249ed336f62635c3090f6037934fc4d6f8 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.MetadataValue(string metadata, string value, string? tooltip = null)
```

Draws one wrapped, subdued value whose metadata and content remain in the value column.

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `value`:** Literal value description shown after the metadata separator.

**Parameter `tooltip`:** Optional explanation displayed while the combined value is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `metadata` or `value` is
`null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L180).
