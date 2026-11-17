---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7e077fd7342934972dffad52deaf072c9e8d1db9a93eaa217998885683cc2df3
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.Trend(System.String,System.ReadOnlySpan{System.Single},System.Int32)
title: ImGuiWidget.Trend
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: d1ca856b1059f1d38f4877d112704e955394bbaf2117d8114974da4cbfc137d9
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
