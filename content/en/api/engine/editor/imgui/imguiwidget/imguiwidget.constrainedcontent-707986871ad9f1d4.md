---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.707986871ad9f1d471785ec3b29b838ae47fb73a12eabe94ac9ff9e0dbf5c566
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)
title: ImGuiWidget.ConstrainedContent
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 5cd65e6b63aafc815270fbd4af8762f4a395a8fc6f2828b260d8c648a9b74bd6
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
