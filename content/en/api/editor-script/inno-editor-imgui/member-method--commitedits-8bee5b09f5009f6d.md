---
title: "ImGuiWidget — Method: CommitEdits"
description: "Exact Method: CommitEdits contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.8bee5b09f5009f6d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CommitEdits

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CommitEdits`

<a id="api-24430bbe66921019"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CommitEdits f776289d95a8bee6fca0bec62edef8a5b80182ef34edcc4f32902aef1fe64754 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CommitEdits()
```

Completes the current control edit before a document command, reload, Play transition or shutdown.

**Throws `System.InvalidOperationException`:** A nested transaction prevents completion; ownership is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L119).
