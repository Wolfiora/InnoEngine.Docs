---
uid: api.b453f279effaeece4105f7edcff7c99049a265306468bd6101bdb1bc25907718
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MeasureDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,System.Numerics.Vector2)"
source: xml
reviewed: 3b275ffbcba3860d477253bb77e672e7c8fd95599ddb3d1743ab91695ef3dc84
title: "MeasureDialog"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Measures current dialog content before its window is opened. The returned geometry must be used with the same presentation.

**Parameter `presentation`:** The immutable content captured for this frame.

**Parameter `availableSize`:** The bounded content area in already scaled presentation coordinates.

**Returns:** The bounded current-frame layout, including a single scrolling body when required.

**Exception `T:System.ArgumentNullException`:** The message is null.

**Exception `T:System.ArgumentException`:** The message, expanded details or action label contain an embedded zero code unit.

**Exception `T:System.Text.EncoderFallbackException`:** The message, expanded details or action label contain invalid Unicode.

**Exception `T:System.ArgumentOutOfRangeException`:** The available dimensions are not finite and positive, or a determinate progress fraction is outside zero through one.

**Exception `T:System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
