---
title: "ImGuiWidget — Property: editMergeKey"
description: "Exact Property: editMergeKey contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.fd2d14806a5dff57
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Property: editMergeKey

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `editMergeKey`

<a id="api-fa9d7e04585ed552"></a>
<!-- api: P:InnoEditor.ImGui.ImGuiWidget.editMergeKey c98a231fde2dc625a1d81d8e32296f960fc284230ed9502caeaddbdd15114e72 -->

```csharp
public string? InnoEditor.ImGui.ImGuiWidget.editMergeKey { get; }
```

Gets the current continuous-edit merge boundary, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L20).
