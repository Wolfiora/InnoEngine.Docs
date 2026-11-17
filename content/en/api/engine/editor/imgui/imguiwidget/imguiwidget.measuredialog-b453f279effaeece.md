---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b453f279effaeece4105f7edcff7c99049a265306468bd6101bdb1bc25907718
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MeasureDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,System.Numerics.Vector2)
title: ImGuiWidget.MeasureDialog
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 751c2c140bfc891454f8ee26320dd2a22203999d93325fab34207d50448bf3cd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `presentation`:** The immutable content captured for this frame.

**Parameter `availableSize`:** The bounded content area in already scaled presentation coordinates.

## Returns

The bounded current-frame layout, including a single scrolling body when required.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The message is null.

**Exception `T:System.ArgumentException`:** The message, expanded details or action label contain an embedded zero code unit.

**Exception `T:System.Text.EncoderFallbackException`:** The message, expanded details or action label contain invalid Unicode.

**Exception `T:System.ArgumentOutOfRangeException`:** The available dimensions are not finite and positive, or a determinate progress fraction is outside zero through one.

**Exception `T:System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
