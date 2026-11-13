---
uid: api.2084a74ace92b364f7f5ef09abab5490c48655955be340b3bd1c1c130d637c9e
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,Inno.Editor.ImGui.ImGuiWidget.DialogLayout)"
source: xml
reviewed: b3b44885fee59b4a5c87630d4791796c3a3486e77fe48b95b7418d821f88303a
title: "DrawDialog"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws one prepared message dialog. Text owns one bounded scroll region and actions remain outside it.

**Parameter `presentation`:** The same immutable content used for measurement.

**Parameter `layout`:** The measurement captured in this frame and context.

**Returns:** True when the enabled action was activated by native button input or its explicitly enabled Escape policy.

**Exception `T:System.ArgumentNullException`:** The message is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The layout is invalid.

**Exception `T:System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
