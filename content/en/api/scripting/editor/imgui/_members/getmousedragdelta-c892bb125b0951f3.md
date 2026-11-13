---
uid: api.c892bb125b0951f3f2a84d68acbfb77d7ad789976121d46ada16f2c5619db4cc
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.GetMouseDragDelta(InnoEditor.ImGui.ImGuiMouseButton,System.Single)"
source: xml
reviewed: ecd68c83ae854c68023e8b0010dacb5eeb556e3044ea28f26b69c68ed5e9fe97
title: "GetMouseDragDelta"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets accumulated pointer displacement from the current UI drag's starting position for timeline and canvas controls.

**Parameter `button`:** The button that owns the drag.

**Parameter `threshold`:** Movement required to start dragging, or a negative value to use the Editor's configured threshold.

**Returns:** Displacement in UI coordinates, or zero before the drag threshold is crossed or when no drag is available. The value is cumulative; it must be applied to a captured starting value, not added again each frame.
