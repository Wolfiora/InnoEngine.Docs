---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7ebbecfedc88d502c561607bdc7fec107eb3718799ca6f11d919fc98d71604e8
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsTreeNodeOpen(System.String)
title: ImGuiWidget.IsTreeNodeOpen
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 7eead788fb0b149e54fc3ca5a37fa2b0d4bd3adc30dd2ca380c9c75ba31317a9
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
