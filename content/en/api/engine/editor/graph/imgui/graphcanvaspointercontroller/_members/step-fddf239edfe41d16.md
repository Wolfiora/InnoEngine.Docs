---
uid: api.fddf239edfe41d162b950e7f8cdbec8c8cd4e086294c7509d92e1146ad19331b
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.Step(Inno.Editor.Graph.ImGui.GraphCanvasView,Inno.Editor.Graph.ImGui.GraphCanvasLayout,Inno.Editor.Graph.ImGui.GraphCanvasPointerInput)"
source: xml
reviewed: fc7909e3645359d1b923d6ae3dbda4ae6df9f3a8789d2bb448c8b951b9dc7093
title: "Step"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Consumes one routed frame and returns data-editing intents without invoking domain code.

**Parameter `view`:** The current canvas projection.

**Parameter `layout`:** The immutable neutral node snapshot used by drawing and hit testing.

**Parameter `input`:** Current pointer input after the caller's focus, navigation and overlay routing.

**Returns:** Completed neutral intents. The feature owns validation, atomic mutation and History recording.

**Exception `T:System.ArgumentOutOfRangeException`:** The pointer position is nonfinite.
