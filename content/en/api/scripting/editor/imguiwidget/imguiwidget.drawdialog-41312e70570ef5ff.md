---
uid: api.41312e70570ef5ff508689e5096dd48f6bc40bbe94cb5067878f84f3db060d55
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DrawDialog(InnoEditor.ImGui.DialogPresentation,InnoEditor.ImGui.DialogLayout)"
source: xml
reviewed: d687583af63f5f32503a270a5eee0e88070328947f8192b94a6e90235d7498bb
title: "ImGuiWidget.DrawDialog"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws one prepared message dialog. Text owns one bounded scroll region and actions remain outside it.

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
