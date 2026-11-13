---
uid: api.52b8f34bf53603cf6487e1bfef846282a63aa25f063a5576f8a398a34af2367d
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean)"
source: xml
reviewed: a3e92b5d661ca931fefb4c1086890db3750eaea7d53a3ac1452ca6a1059c7be8
title: "HeaderSurface"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a square-cornered editor header surface using the shared target-header palette, border, and padding.

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
