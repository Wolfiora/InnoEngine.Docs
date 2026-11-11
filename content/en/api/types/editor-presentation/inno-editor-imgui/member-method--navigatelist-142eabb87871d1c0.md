---
title: "ImGuiWidget.ImGuiWidget — Method: NavigateList"
description: "Exact Method: NavigateList contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.142eabb87871d1c0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: NavigateList

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `NavigateList`

<a id="api-5b4555286b2fa7cc"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.NavigateList(Inno.Editor.Interactions.EditorInteractions,System.Int32,System.Int32,System.Int32) 87d3ca949645b9286ee26d3235b7073191c3727788920f9a883885ea7bd16217 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.NavigateList(Inno.Editor.Interactions.EditorInteractions interactions, int itemCount, int focusedIndex, int pageSize = 10)
```

Reads one focused list's keyboard navigation without retaining its entries or changing domain selection.

**Parameter `interactions`:** The authoritative interaction owner supplying the product modifier policy.

**Parameter `itemCount`:** The number of currently visible, ordered entries.

**Parameter `focusedIndex`:** The current visible focus index, or minus one when absent.

**Parameter `pageSize`:** The positive number of visible rows advanced by Page Up or Page Down.

**Returns:** Neutral focus and selection intents; text editing, active controls and popups produce no intent.

**Throws `System.ArgumentNullException`:** The interaction owner is null.

**Throws `System.ArgumentOutOfRangeException`:** The count, focus index or page size is invalid.

**Throws `System.InvalidOperationException`:** No matching owner-thread drawing session is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L74).
