---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52b8f34bf53603cf6487e1bfef846282a63aa25f063a5576f8a398a34af2367d
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean)
title: ImGuiWidget.HeaderSurface
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: a3e92b5d661ca931fefb4c1086890db3750eaea7d53a3ac1452ca6a1059c7be8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
