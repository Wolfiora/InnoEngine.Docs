---
uid: api.6a4022354533862553d26c75da01ab6942611a4e19a0ad31d79ceaa553dda750
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean)"
source: xml
reviewed: 6b0da3566004b332bafca227443f0002a73e646bb284dedb9c0f2647576656e0
title: "ConstrainedContent"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a vertically auto-sized content region that is constrained to the current available width and cannot create an independent scroll range.

**Parameter `id`:** Stable identifier used by ImGui to track the content region.

**Parameter `drawContent`:** Callback that draws the complete region contents.

**Parameter `useWindowPadding`:** Whether the region should apply the centralized standard window padding exactly once.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
