---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1946b19996935b72999505df483cc70257f5a795c341f341ccacd2cb60956cce
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ClippedRows``1(System.Int32,System.Single,``0,System.Action{``0,System.Int32,System.Int32},System.ReadOnlySpan{System.Int32})
title: ImGuiWidget.ClippedRows
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 63f207539241a6935ced56e0243420b6917069a3b0edb8aa4505f38a574fd6f0
apiScope: Editor
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
