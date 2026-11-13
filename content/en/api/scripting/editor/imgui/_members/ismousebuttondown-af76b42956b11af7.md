---
uid: api.af76b42956b11af74169231d3d8a9dd0878e5e1c8f54bcc812091f75e6a23e1e
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.IsMouseButtonDown(InnoEditor.ImGui.ImGuiMouseButton)"
source: xml
reviewed: 117ca9ce1e4a8d481890ad0b5303dcea0ef13a6f885fca63dd6ac793607cca94
title: "IsMouseButtonDown"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets whether a mouse button is held in the current Editor UI frame, including input consumed by UI controls.

**Parameter `button`:** The UI mouse button to query.

**Returns:** True while the button is held; callers must also check their item's active or hovered state before editing.
