---
title: "ImGuiWidget — Method: IsEditing"
description: "Exact Method: IsEditing contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.2d4673f269a994e3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: IsEditing

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsEditing`

<a id="api-3dffdcf62669863f"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.IsEditing(System.String) afaa1e280a95f0cbd47c94ce294ddcb105888d3b673f555725773a2f69150582 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.IsEditing(string path)
```

Checks whether this owner still owns a particular edit, including after a close or generation boundary.

**Parameter `path`:** The stable edit identity.

**Returns:** True only while the matching owner still has an active transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L92).
