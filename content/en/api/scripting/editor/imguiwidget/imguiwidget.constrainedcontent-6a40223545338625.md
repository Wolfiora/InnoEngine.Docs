---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6a4022354533862553d26c75da01ab6942611a4e19a0ad31d79ceaa553dda750
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)
title: ImGuiWidget.ConstrainedContent
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 98995a72b81a07a4624e3726373860d48884212eee484b789de1a2e6c079feff
apiScope: Editor
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
