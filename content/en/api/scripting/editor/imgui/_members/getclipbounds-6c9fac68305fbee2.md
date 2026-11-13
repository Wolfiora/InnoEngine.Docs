---
uid: api.6c9fac68305fbee2ab29fbe3299d5968aceb16d4adf931d44f161067f123b415
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.GetClipBounds"
source: xml
reviewed: 1c4656eb732ee57ca5615760466850b5c9ce16a154202a3400b2fb75edb80bfa
title: "GetClipBounds"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Copies the current window's effective clip after parent and viewport clipping.

**Returns:** Screen-space minimum and maximum values for bounding frame-local submission work.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
