---
uid: api.b3d6da446ebafff3192e2b3d0e26fba38a6822cef7b5518f12647c7aa41fc020
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Trend(System.String,System.ReadOnlySpan{System.Single},System.Int32)"
source: xml
reviewed: e2ce6b05828cb91df7204304a20da765a9a15a298d87ac1efa8848332970bb42
title: "Trend"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a bounded line plot from borrowed numeric samples without copying their buffer.

**Parameter `label`:** The visible plot title and stable item identifier in its current owner.

**Parameter `values`:** Finite samples borrowed only for this call; an empty span draws an empty plot.

**Parameter `offset`:** The first chronological sample in a circular buffer, or zero for empty input.

**Exception `T:System.ArgumentException`:** The label is empty or a sample is not finite.

**Exception `T:System.ArgumentOutOfRangeException`:** The offset is outside the supplied sample span.

**Exception `T:System.InvalidOperationException`:** No matching owner-thread drawing session is active.
