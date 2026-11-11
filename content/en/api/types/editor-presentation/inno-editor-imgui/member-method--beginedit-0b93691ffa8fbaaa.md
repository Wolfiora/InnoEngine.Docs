---
title: "ImGuiWidget.ImGuiWidget — Method: BeginEdit"
description: "Exact Method: BeginEdit contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0b93691ffa8fbaaa
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginEdit

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginEdit`

<a id="api-9e10a6b661646d42"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginEdit(Inno.Editor.Interactions.IEditorHistory,System.String,System.String) 24713df480a9023fe164c2466d9028dff6f84330dc80404d82b7990668466a48 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginEdit(Inno.Editor.Interactions.IEditorHistory history, string path, string name)
```

Begins or touches an explicitly captured continuous edit, such as a viewport manipulation.

**Parameter `history`:** The authoritative domain History.

**Parameter `path`:** The stable owner-qualified edit identity.

**Parameter `name`:** The user-facing Undo name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L62).
