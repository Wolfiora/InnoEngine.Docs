---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6a4022354533862553d26c75da01ab6942611a4e19a0ad31d79ceaa553dda750
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)
title: ImGuiWidget.ConstrainedContent
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 76da89ba504da7fdca7345cf09fd7869dfc8fadc82e368727c40be78f4beafcd
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
