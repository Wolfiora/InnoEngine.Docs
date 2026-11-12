---
title: "ImGuiWidget — Method: BeginEdit"
description: "Exact Method: BeginEdit contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.e3361db169ab7cd0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginEdit

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginEdit`

<a id="api-edcf3e7e3baa300e"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginEdit(InnoEditor.Interactions.IEditorHistory,System.String,System.String) 6d3096d925149c7d59d8352e363fd51a0624b250cb93a339bdba14ec165ed283 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.BeginEdit(InnoEditor.Interactions.IEditorHistory history, string path, string name)
```

Begins or touches an explicitly captured continuous edit, such as a viewport manipulation.

**Parameter `history`:** The authoritative domain History.

**Parameter `path`:** The stable owner-qualified edit identity.

**Parameter `name`:** The user-facing Undo name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L62).
