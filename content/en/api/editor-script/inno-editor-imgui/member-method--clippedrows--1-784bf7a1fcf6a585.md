---
title: "ImGuiWidget — Method: ClippedRows``1"
description: "Exact Method: ClippedRows``1 contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.784bf7a1fcf6a585
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: ClippedRows``1

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## ```ClippedRows``1```

<a id="api-61a672aace9b63f8"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.ClippedRows``1(System.Int32,System.Single,``0,System.Action{``0,System.Int32,System.Int32},System.ReadOnlySpan{System.Int32}) b9a80e613fa5e902978ce677225760815f05396258fb698f6bd54f9365d10d72 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.ClippedRows<TState>(int itemCount, float itemHeight, TState state, System.Action<TState, int, int> drawRange, System.ReadOnlySpan<int> preservedRows = default(System.ReadOnlySpan<int>))
```

Draws visible row ranges and preserves native scrolling, navigation and table cursor bookkeeping.

**Type parameter `TState`:** Call-scoped drawing data, passed directly so static callbacks need no captured closure.

**Parameter `itemCount`:** The nonnegative count in the caller's current filtered and sorted view.

**Parameter `itemHeight`:** The complete fixed row advance in screen pixels, or -1 to measure the first row through the native clipper.

**Parameter `state`:** Data borrowed only for this call; it is never stored by the widget.

**Parameter `drawRange`:** A synchronous drawing callback receiving inclusive start and exclusive end indices.

**Parameter `preservedRows`:** Optional rows that must still submit an active edit, drag source or requested focus.

**Throws `System.ArgumentNullException`:** The drawing callback is null.

**Throws `System.ArgumentOutOfRangeException`:** A count, row height or preserved index is invalid.

**Throws `System.InvalidOperationException`:** No native frame is active in this UI session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Clipping.cs#L42).
