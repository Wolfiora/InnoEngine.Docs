---
uid: api.5c7efa8887e2d0efaa92be104dd420d880da6cf92ec8868b070c8df98f4137b4
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.MeasureDialog(InnoEditor.ImGui.DialogPresentation,System.Numerics.Vector2)"
source: xml
reviewed: 42e86133687499ce72ea5403c765ac3dc3ee7ecc048bb065a759cb4491a9cbbc
title: "ImGuiWidget.MeasureDialog"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Measures current dialog content before its window is opened. The returned geometry must be used with the same presentation.

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
