---
title: "ImGuiWidget.ImGuiWidget — Method: PropertyRow"
description: "Exact Method: PropertyRow contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.a36047cdf0ba4226
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: PropertyRow

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PropertyRow`

<a id="api-b6fb6aaf5ba74f9e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action) 9124801361acc2a8dba10f3292ec743a33ba1b1d5186bf54acc5cb36b193823d -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(string id, System.Action drawLabel, System.Action drawValue)
```

Draws a two-column property row whose label is supplied by a custom presentation callback.

**Parameter `id`:** Stable row identifier.

**Parameter `drawLabel`:** Label presentation callback. It may wrap or draw badges inside the label column.

**Parameter `drawValue`:** Value control callback.

**Throws `System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Throws `System.ArgumentNullException`:** Thrown when `drawLabel` or `drawValue` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L64).

## `PropertyRow`

<a id="api-b5b91facf0c1e2c9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String) 1748d171a9b882ce60073317a7b2741bed032207db50c130f38445c7ea9186e0 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(string id, string label, System.Action drawValue, string? tooltip = null)
```

Draws a two-column property row with a stable internal identifier.

**Parameter `id`:** Stable row identifier.

**Parameter `label`:** Human-readable property label.

**Parameter `drawValue`:** Value control callback.

**Parameter `tooltip`:** Optional hover help displayed from the property label.

**Throws `System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Throws `System.ArgumentNullException`:** Thrown when `label` or `drawValue` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L35).
