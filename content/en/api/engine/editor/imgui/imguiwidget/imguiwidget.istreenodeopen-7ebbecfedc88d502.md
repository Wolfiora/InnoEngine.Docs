---
uid: api.7ebbecfedc88d502c561607bdc7fec107eb3718799ca6f11d919fc98d71604e8
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsTreeNodeOpen(System.String)"
source: xml
reviewed: 26aa7b2fa591bb1a406026a4d26aa4df34bada94b4c44fb91ba866f56b070ef5
title: "ImGuiWidget.IsTreeNodeOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Reads a retained expansion value without submitting a native row or retaining domain objects.

**Parameter `id`:** The stable row identifier within this window and owner.

**Returns:** True when the row was explicitly expanded; unknown rows are collapsed.

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
