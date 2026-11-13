---
uid: api.3efd7e4bb2febae7cf9620784fd9d3d53b8f46a6b80546541e6eba17cdab26f3
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean)"
source: xml
reviewed: f6a09e10f07679586ecb26ed34014c5b2bdd772f434b846b925e312273618b41
title: "SetTreeNodeOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Changes retained expansion before a flattened view is computed, without submitting a row.

**Parameter `id`:** The stable row identifier within this window and owner.

**Parameter `open`:** The requested disclosure state.

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
