---
uid: api.394f1fd362be97b74db8db58be497a3c36554bc5822a2e05de1152f056a1cbf7
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.GetClipBounds"
source: xml
reviewed: c44f8a32d7946b881e023368d60ce4a221e587d5e8dda0b9762db6acf1fb36d3
title: "ImGui.GetClipBounds"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Copies the current window's effective clip after parent and viewport clipping.

**Returns:** Screen-space minimum and maximum values for bounding frame-local submission work.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
