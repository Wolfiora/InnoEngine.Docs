---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7e077fd7342934972dffad52deaf072c9e8d1db9a93eaa217998885683cc2df3
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.Trend(System.String,System.ReadOnlySpan{System.Single},System.Int32)
title: ImGuiWidget.Trend
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 0e32f859730798aab63e52c2cf57adf49c65295f501c5c1af603a0e392bb07af
apiScope: Editor
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
