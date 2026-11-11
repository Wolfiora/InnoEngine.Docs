---
title: "ImGuiWidget.ImGuiWidget — Method: IsTreeNodeOpen"
description: "Exact Method: IsTreeNodeOpen contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.ebceb33862558d90
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: IsTreeNodeOpen

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTreeNodeOpen`

<a id="api-ccf391059e126e4a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsTreeNodeOpen(System.String) 0274d4494901bc3ee7e47ed6226ac3032043b48b3372fc1289a529765f027f55 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsTreeNodeOpen(string id)
```

Reads a retained expansion value without submitting a native row or retaining domain objects.

**Parameter `id`:** The stable row identifier within this window and owner.

**Returns:** True when the row was explicitly expanded; unknown rows are collapsed.

**Throws `System.ArgumentException`:** The row identifier is empty or whitespace.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L94).
