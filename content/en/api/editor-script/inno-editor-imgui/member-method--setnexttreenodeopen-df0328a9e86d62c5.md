---
title: "ImGuiWidget — Method: SetNextTreeNodeOpen"
description: "Exact Method: SetNextTreeNodeOpen contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.df0328a9e86d62c5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SetNextTreeNodeOpen

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetNextTreeNodeOpen`

<a id="api-dca95afb6d914bc9"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SetNextTreeNodeOpen(System.Boolean) fae6a15be49a3fd9f71d28c5b08b09818242bfa5940739b7ae2a54233de6bcf8 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.SetNextTreeNodeOpen(bool open)
```

Overrides the retained expansion state of the next submitted non-leaf tree row.

**Parameter `open`:** Whether the next row should be expanded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L261).
