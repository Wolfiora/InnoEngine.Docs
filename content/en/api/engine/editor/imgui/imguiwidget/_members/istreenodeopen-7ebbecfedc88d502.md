---
uid: api.7ebbecfedc88d502c561607bdc7fec107eb3718799ca6f11d919fc98d71604e8
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsTreeNodeOpen(System.String)"
source: xml
reviewed: f30032dfdb56cb1bb210fe3899f253615c5644dc5000e308cb117683a5dc9142
title: "IsTreeNodeOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Reads a retained expansion value without submitting a native row or retaining domain objects.

**Parameter `id`:** The stable row identifier within this window and owner.

**Returns:** True when the row was explicitly expanded; unknown rows are collapsed.

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
