---
uid: api.707986871ad9f1d471785ec3b29b838ae47fb73a12eabe94ac9ff9e0dbf5c566
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)"
source: xml
reviewed: c148a2f924f234f1ad5b62ea999c1c57e985b6eb785059221fbdea53b24b0717
title: "ConstrainedContent"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a vertically auto-sized content region that is constrained to the current available width and cannot create an independent scroll range.

**Parameter `id`:** Stable identifier used by ImGui to track the content region.

**Parameter `drawContent`:** Callback that draws the complete region contents.

**Parameter `useWindowPadding`:** Whether the region should apply the centralized standard window padding exactly once.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
