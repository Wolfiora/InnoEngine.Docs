---
title: "ImGuiWidget.ImGuiWidget — Method: BeginBoundedCombo"
description: "Exact Method: BeginBoundedCombo contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.01fb6c0abb8e80cd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginBoundedCombo

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginBoundedCombo`

<a id="api-d22aff4bac5c5ed3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginBoundedCombo(System.String,System.String,Inno.Editor.ImGui.ImGuiComboFlags) 7fd27a25dbc33e5cc64b0e82f69fb7f57829a48bc68d38b65a390f73f20a3339 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginBoundedCombo(string id, string preview, Inno.Editor.ImGui.ImGuiComboFlags flags = Inno.Editor.ImGui.ImGuiComboFlags.None)
```

Begins a combo whose popup opens below the control and stays within its containing window.

**Parameter `id`:** Stable combo identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed combo.

**Parameter `flags`:** Native combo presentation flags. Only `Inno.Editor.ImGui.ImGuiComboFlags.WidthFitPreview` is supported.

**Returns:** `true` when the combo popup is open and its contents should be submitted;
    otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `preview` is null.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `flags` contains a presentation mode unsupported by the editor selector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selector.cs#L37).
