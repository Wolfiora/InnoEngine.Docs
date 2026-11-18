---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2084a74ace92b364f7f5ef09abab5490c48655955be340b3bd1c1c130d637c9e
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,Inno.Editor.ImGui.ImGuiWidget.DialogLayout)
title: ImGuiWidget.DrawDialog
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: ca53e3555479a64731e984ab45adec5fedb6176f9a27d487bab71c04b5fdd38d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `presentation`:** The same immutable content used for measurement.

**Parameter `layout`:** The measurement captured in this frame and context.

## Returns

True when the enabled action was activated by native button input or its explicitly enabled Escape policy.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The message is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The layout is invalid.

**Exception `T:System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
