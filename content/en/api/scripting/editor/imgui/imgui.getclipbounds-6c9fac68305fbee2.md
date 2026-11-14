---
uid: api.6c9fac68305fbee2ab29fbe3299d5968aceb16d4adf931d44f161067f123b415
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.GetClipBounds"
source: xml
reviewed: 2d480251ccfcccb800f1ae41d5f727975a283f2be6255013162ad6429bea89fe
title: "ImGui.GetClipBounds"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Copies the current window's effective clip after parent and viewport clipping.

**Returns:** Screen-space minimum and maximum values for bounding frame-local submission work.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
