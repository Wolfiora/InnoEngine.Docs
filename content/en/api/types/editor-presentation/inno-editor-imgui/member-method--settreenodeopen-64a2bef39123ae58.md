---
title: "ImGuiWidget.ImGuiWidget — Method: SetTreeNodeOpen"
description: "Exact Method: SetTreeNodeOpen contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.64a2bef39123ae58
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: SetTreeNodeOpen

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTreeNodeOpen`

<a id="api-80da0eb944aaf94a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean) cd1bd9699f12b47a1a5cef5c14b5974a441ff8b652a4181a01a6f19ae97a1049 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SetTreeNodeOpen(string id, bool open)
```

Changes retained expansion before a flattened view is computed, without submitting a row.

**Parameter `id`:** The stable row identifier within this window and owner.

**Parameter `open`:** The requested disclosure state.

**Throws `System.ArgumentException`:** The row identifier is empty or whitespace.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L116).
