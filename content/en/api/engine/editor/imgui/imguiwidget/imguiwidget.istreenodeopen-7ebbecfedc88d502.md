---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7ebbecfedc88d502c561607bdc7fec107eb3718799ca6f11d919fc98d71604e8
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsTreeNodeOpen(System.String)
title: ImGuiWidget.IsTreeNodeOpen
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: b4bba397b545bdde7fc430cb0bac93a7da612703dac9bf7c3bbe317998894878
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable row identifier within this window and owner.

## Returns

True when the row was explicitly expanded; unknown rows are collapsed.

## Exceptions

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
