---
uid: api.a0225ec4e5b042086712e237e5aa4605398553fece93197bbb4316238e171d49
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasPointerController.Step(InnoEditor.Graph.GraphCanvasView,InnoEditor.Graph.GraphCanvasLayout,InnoEditor.Graph.GraphCanvasPointerInput)"
source: xml
reviewed: 092d7a5ee2a87ffefae6578b12014b1465d8779f81ee551f0786c79ef4f69498
title: "GraphCanvasPointerController.Step"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Consumes one routed frame and returns data-editing intents without invoking domain code.

**Parameter `view`:** The current canvas projection.

**Parameter `layout`:** The immutable neutral node snapshot used by drawing and hit testing.

**Parameter `input`:** Current pointer input after the caller's focus, navigation and overlay routing.

**Returns:** Completed neutral intents. The feature owns validation, atomic mutation and History recording.

**Exception `T:System.ArgumentOutOfRangeException`:** The pointer position is nonfinite.
