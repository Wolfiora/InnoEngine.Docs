---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b3d6da446ebafff3192e2b3d0e26fba38a6822cef7b5518f12647c7aa41fc020
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Trend(System.String,System.ReadOnlySpan{System.Single},System.Int32)
title: ImGuiWidget.Trend
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: a4e83c6257483b45428752c15580127d4e2ab29761dba1a2b9c57986cb56c878
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** The visible plot title and stable item identifier in its current owner.

**Parameter `values`:** Finite samples borrowed only for this call; an empty span draws an empty plot.

**Parameter `offset`:** The first chronological sample in a circular buffer, or zero for empty input.

## Exceptions

**Exception `T:System.ArgumentException`:** The label is empty or a sample is not finite.

**Exception `T:System.ArgumentOutOfRangeException`:** The offset is outside the supplied sample span.

**Exception `T:System.InvalidOperationException`:** No matching owner-thread drawing session is active.
