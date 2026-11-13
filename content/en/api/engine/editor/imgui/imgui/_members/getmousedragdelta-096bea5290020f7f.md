---
uid: api.096bea5290020f7f08e305863a6a6d114a7da5ded723d2aad9d59c4b52e673e7
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.GetMouseDragDelta(Inno.Editor.ImGui.ImGuiMouseButton,System.Single)"
source: xml
reviewed: 5b95bb156deeb1c173736f463dd549ed526e2e50dbd071fe3a44528bd565c7ac
title: "GetMouseDragDelta"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Gets accumulated pointer displacement from the current UI drag's starting position for timeline and canvas controls.

**Parameter `button`:** The button that owns the drag.

**Parameter `threshold`:** Movement required to start dragging, or a negative value to use the Editor's configured threshold.

**Returns:** Displacement in UI coordinates, or zero before the drag threshold is crossed or when no drag is available. The value is cumulative; it must be applied to a captured starting value, not added again each frame.
