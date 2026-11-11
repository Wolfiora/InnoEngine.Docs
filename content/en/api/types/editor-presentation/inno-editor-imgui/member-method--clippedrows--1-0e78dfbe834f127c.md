---
title: "ImGuiWidget.ImGuiWidget — Method: ClippedRows``1"
description: "Exact Method: ClippedRows``1 contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0e78dfbe834f127c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: ClippedRows``1

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## ```ClippedRows``1```

<a id="api-7486162b2184c027"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClippedRows``1(System.Int32,System.Single,``0,System.Action{``0,System.Int32,System.Int32},System.ReadOnlySpan{System.Int32}) 5a8027f2321d869d9d7f7fd290346d108396b1aeda033f5854f87df081558783 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClippedRows<TState>(int itemCount, float itemHeight, TState state, System.Action<TState, int, int> drawRange, System.ReadOnlySpan<int> preservedRows = default(System.ReadOnlySpan<int>))
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Clipping.cs#L42).
