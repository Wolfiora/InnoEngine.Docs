---
uid: api.707986871ad9f1d471785ec3b29b838ae47fb73a12eabe94ac9ff9e0dbf5c566
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)"
source: xml
reviewed: f1e80929ad625e12b8bfdb47b9814db0805fd69b28e68b36f94760ed549d6f8a
title: "ImGuiWidget.ConstrainedContent"
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
