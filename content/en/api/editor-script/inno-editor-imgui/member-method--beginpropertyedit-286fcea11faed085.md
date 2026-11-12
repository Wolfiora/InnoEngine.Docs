---
title: "ImGuiWidget — Method: BeginPropertyEdit"
description: "Exact Method: BeginPropertyEdit contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.286fcea11faed085
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginPropertyEdit

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginPropertyEdit`

<a id="api-e039ebdc2429ca57"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginPropertyEdit(InnoEditor.Interactions.IEditorHistory,System.String,System.String) 783ea2fee6b90991560d44a29360bf1f64c80c4918b223e593f833ac3192b579 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.BeginPropertyEdit(InnoEditor.Interactions.IEditorHistory history, string path, string name)
```

Starts a History boundary only when a changed control is actively producing continuous input.

**Parameter `history`:** The authoritative domain History receiving the control's existing mutation records.

**Parameter `path`:** The stable owner-qualified property path.

**Parameter `name`:** The operation name shown by Undo and Redo.

**Throws `System.InvalidOperationException`:** A previous gesture cannot complete or History rejects the transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L38).
