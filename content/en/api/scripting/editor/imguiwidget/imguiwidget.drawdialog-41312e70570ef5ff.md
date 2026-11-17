---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.41312e70570ef5ff508689e5096dd48f6bc40bbe94cb5067878f84f3db060d55
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DrawDialog(InnoEditor.ImGui.DialogPresentation,InnoEditor.ImGui.DialogLayout)
title: ImGuiWidget.DrawDialog
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 33f656cf7afbeb8b372cf6b91c76e49c982ddbf31aa0d0b49011b8a5be684b3e
apiScope: Editor
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
