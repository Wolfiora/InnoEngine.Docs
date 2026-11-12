---
title: "ImGuiWidget — Method: PropertyRow"
description: "Exact Method: PropertyRow contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.58c49de2830c658e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: PropertyRow

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PropertyRow`

<a id="api-1d075cf8d7c9a3b9"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action) 4daec50601983540249f6f48f7f5c1aec2f91c9463eaabe03276d173e3ec9ed6 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.PropertyRow(string id, System.Action drawLabel, System.Action drawValue)
```

Draws a two-column property row whose label is supplied by a custom presentation callback.

**Parameter `id`:** Stable row identifier.

**Parameter `drawLabel`:** Label presentation callback. It may wrap or draw badges inside the label column.

**Parameter `drawValue`:** Value control callback.

**Throws `System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Throws `System.ArgumentNullException`:** Thrown when `drawLabel` or `drawValue` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L64).

## `PropertyRow`

<a id="api-6d5b4d5a566e5532"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String) 89df5d58198b36d6af858bef71582a05069cee02e7abe8f75f0f48cd052ca123 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.PropertyRow(string id, string label, System.Action drawValue, string? tooltip = null)
```

Draws a two-column property row with a stable internal identifier.

**Parameter `id`:** Stable row identifier.

**Parameter `label`:** Human-readable property label.

**Parameter `drawValue`:** Value control callback.

**Parameter `tooltip`:** Optional hover help displayed from the property label.

**Throws `System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Throws `System.ArgumentNullException`:** Thrown when `label` or `drawValue` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L35).
