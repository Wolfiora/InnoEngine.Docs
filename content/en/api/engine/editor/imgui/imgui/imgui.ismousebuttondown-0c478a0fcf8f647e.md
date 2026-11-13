---
uid: api.0c478a0fcf8f647e9b56ba27b885120edcedd97286a9c245f2978f51c8a76443
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.IsMouseButtonDown(Inno.Editor.ImGui.ImGuiMouseButton)"
source: xml
reviewed: 6ee9e7dbb0c16ed5a9c944b95a6ab31bf1dab9c3d904181e9ffb6e8868cc4133
title: "ImGui.IsMouseButtonDown"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Gets whether a mouse button is held in the current Editor UI frame, including input consumed by UI controls.

**Parameter `button`:** The UI mouse button to query.

**Returns:** True while the button is held; callers must also check their item's active or hovered state before editing.
