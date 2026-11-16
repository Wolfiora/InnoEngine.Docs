---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52b8f34bf53603cf6487e1bfef846282a63aa25f063a5576f8a398a34af2367d
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean)
title: ImGuiWidget.HeaderSurface
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 000b500c11a0bbe01c74575a41ed8db9c11fdf0b0c7a163876d1425122dbf7b3
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
