---
title: "ImGuiWidget.ImGuiWidget — Method: CommitEdits"
description: "Exact Method: CommitEdits contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0b79e159dde643b0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CommitEdits

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CommitEdits`

<a id="api-f53a03f0df8801e9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CommitEdits 960aef9b7c1cbf63fb5b140c1b310ec19593b5c46f83cca8992b825a4e680abd -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CommitEdits()
```

Completes the current control edit before a document command, reload, Play transition or shutdown.

**Throws `System.InvalidOperationException`:** A nested transaction prevents completion; ownership is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L119).
