---
uid: api.41312e70570ef5ff508689e5096dd48f6bc40bbe94cb5067878f84f3db060d55
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DrawDialog(InnoEditor.ImGui.DialogPresentation,InnoEditor.ImGui.DialogLayout)"
source: xml
reviewed: 281ce6e1a9b67431dbbb25a8fd02af1e49ce45358022e4503f7b94937da26e26
title: "DrawDialog"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws one prepared message dialog. Text owns one bounded scroll region and actions remain outside it.

**Parameter `presentation`:** The same immutable content used for measurement.

**Parameter `layout`:** The measurement captured in this frame and context.

**Returns:** True when the enabled action was activated by native button input or its explicitly enabled Escape policy.

**Exception `T:System.ArgumentNullException`:** The message is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The layout is invalid.

**Exception `T:System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
