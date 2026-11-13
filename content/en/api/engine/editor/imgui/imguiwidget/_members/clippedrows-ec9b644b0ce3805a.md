---
uid: api.ec9b644b0ce3805ac416b4d72e3eae9267cab764ccafd478dd5cbf59fb192e6b
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClippedRows\u0060\u00601(System.Int32,System.Single,\u0060\u00600,System.Action{\u0060\u00600,System.Int32,System.Int32},System.ReadOnlySpan{System.Int32})"
source: xml
reviewed: f00f6454ece697396ce77af361cca59a20ea848695380e94e0eb39de7f259f4f
title: "ClippedRows"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws visible row ranges and preserves native scrolling, navigation and table cursor bookkeeping.

**Type parameter `TState`:** Call-scoped drawing data, passed directly so static callbacks need no captured closure.

**Parameter `itemCount`:** The nonnegative count in the caller's current filtered and sorted view.

**Parameter `itemHeight`:** The complete fixed row advance in screen pixels, or -1 to measure the first row through the native clipper.

**Parameter `state`:** Data borrowed only for this call; it is never stored by the widget.

**Parameter `drawRange`:** A synchronous drawing callback receiving inclusive start and exclusive end indices.

**Parameter `preservedRows`:** Optional rows that must still submit an active edit, drag source or requested focus.

**Exception `T:System.ArgumentNullException`:** The drawing callback is null.

**Exception `T:System.ArgumentOutOfRangeException`:** A count, row height or preserved index is invalid.

**Exception `T:System.InvalidOperationException`:** No native frame is active in this UI session.
