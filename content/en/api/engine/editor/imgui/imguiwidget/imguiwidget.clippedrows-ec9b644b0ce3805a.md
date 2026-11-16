---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ec9b644b0ce3805ac416b4d72e3eae9267cab764ccafd478dd5cbf59fb192e6b
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClippedRows``1(System.Int32,System.Single,``0,System.Action{``0,System.Int32,System.Int32},System.ReadOnlySpan{System.Int32})
title: ImGuiWidget.ClippedRows
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 8096f92de73261469e51f0d761abf6368b5b0e9cfb34f3c65d66ba204f36ab7e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TState`:** Call-scoped drawing data, passed directly so static callbacks need no captured closure.

## Parameters

**Parameter `itemCount`:** The nonnegative count in the caller's current filtered and sorted view.

**Parameter `itemHeight`:** The complete fixed row advance in screen pixels, or -1 to measure the first row through the native clipper.

**Parameter `state`:** Data borrowed only for this call; it is never stored by the widget.

**Parameter `drawRange`:** A synchronous drawing callback receiving inclusive start and exclusive end indices.

**Parameter `preservedRows`:** Optional rows that must still submit an active edit, drag source or requested focus.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The drawing callback is null.

**Exception `T:System.ArgumentOutOfRangeException`:** A count, row height or preserved index is invalid.

**Exception `T:System.InvalidOperationException`:** No native frame is active in this UI session.
