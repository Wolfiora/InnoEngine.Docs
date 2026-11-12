---
title: "ImGuiWidget — Method: BeginBoundedCombo"
description: "Exact Method: BeginBoundedCombo contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.1f96070e06601357
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginBoundedCombo

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginBoundedCombo`

<a id="api-5404291c95bc68dc"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginBoundedCombo(System.String,System.String,InnoEditor.ImGui.ImGuiComboFlags) ea5d784b65ed22eecf6524361ff13c373fceb40929c3c9d4edf0e8c34cb15ccf -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginBoundedCombo(string id, string preview, InnoEditor.ImGui.ImGuiComboFlags flags = InnoEditor.ImGui.ImGuiComboFlags.None)
```

Begins a combo whose popup opens below the control and stays within its containing window.

**Parameter `id`:** Stable combo identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed combo.

**Parameter `flags`:** Native combo presentation flags. Only `InnoEditor.ImGui.ImGuiComboFlags.WidthFitPreview` is supported.

**Returns:** `true` when the combo popup is open and its contents should be submitted;
            otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `preview` is null.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `flags` contains a presentation mode unsupported by the editor selector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selector.cs#L37).
