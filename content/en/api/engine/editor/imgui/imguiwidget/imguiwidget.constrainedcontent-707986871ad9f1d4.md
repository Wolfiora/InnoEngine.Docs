---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.707986871ad9f1d471785ec3b29b838ae47fb73a12eabe94ac9ff9e0dbf5c566
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)
title: ImGuiWidget.ConstrainedContent
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 8b9a0fe1ab64740b4995ec8e550545e97eada83fdd06b844e91845739a907da2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the content region.

**Parameter `drawContent`:** Callback that draws the complete region contents.

**Parameter `useWindowPadding`:** Whether the region should apply the centralized standard window padding exactly once.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
