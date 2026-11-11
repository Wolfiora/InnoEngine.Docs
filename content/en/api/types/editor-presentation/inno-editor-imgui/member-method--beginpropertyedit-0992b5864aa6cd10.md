---
title: "ImGuiWidget.ImGuiWidget — Method: BeginPropertyEdit"
description: "Exact Method: BeginPropertyEdit contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0992b5864aa6cd10
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginPropertyEdit

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginPropertyEdit`

<a id="api-91bb85dbec9fc8d4"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginPropertyEdit(Inno.Editor.Interactions.IEditorHistory,System.String,System.String) 00b036ed5451c9f713a6f33c9da6aabe9c20f9cad2a619ba2c0f86fc579924c7 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginPropertyEdit(Inno.Editor.Interactions.IEditorHistory history, string path, string name)
```

Starts a History boundary only when a changed control is actively producing continuous input.

**Parameter `history`:** The authoritative domain History receiving the control's existing mutation records.

**Parameter `path`:** The stable owner-qualified property path.

**Parameter `name`:** The operation name shown by Undo and Redo.

**Throws `System.InvalidOperationException`:** A previous gesture cannot complete or History rejects the transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L38).
