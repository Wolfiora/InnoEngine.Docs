---
title: "ImGuiWidget — Method: NavigateList"
description: "Exact Method: NavigateList contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.136d2715eb7aabe5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: NavigateList

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `NavigateList`

<a id="api-4128b1bf134c2a71"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.NavigateList(InnoEditor.Interactions.EditorInteractions,System.Int32,System.Int32,System.Int32) 7c5c2f5147508d87763db0127b05c6f2e85b5f489b011ece1e48e1c934f5e9e1 -->

```csharp
public InnoEditor.ImGui.ListNavigationResult InnoEditor.ImGui.ImGuiWidget.NavigateList(InnoEditor.Interactions.EditorInteractions interactions, int itemCount, int focusedIndex, int pageSize = 10)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L74).
