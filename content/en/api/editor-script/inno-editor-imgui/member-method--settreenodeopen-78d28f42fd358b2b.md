---
title: "ImGuiWidget — Method: SetTreeNodeOpen"
description: "Exact Method: SetTreeNodeOpen contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.78d28f42fd358b2b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SetTreeNodeOpen

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetTreeNodeOpen`

<a id="api-29091f5bb436fa7f"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean) c141e6740accfa2dd667a8c0e935cc6427c9f7955ec1282434c46c8aab05670f -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.SetTreeNodeOpen(string id, bool open)
```

Changes retained expansion before a flattened view is computed, without submitting a row.

**Parameter `id`:** The stable row identifier within this window and owner.

**Parameter `open`:** The requested disclosure state.

**Throws `System.ArgumentException`:** The row identifier is empty or whitespace.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L116).
