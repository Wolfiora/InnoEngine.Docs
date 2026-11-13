---
uid: api.d9b6db9a993a6798d3f636ed2c182d621554abda57bb34f0c8ba900bd8143ab4
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@,System.Boolean@,System.Boolean)"
source: xml
reviewed: b2fd457a2df00aacdb8151ec7b8c1326753ba93450c76fbe9ced007a3aacd21f
title: "DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Accepts an unmanaged payload and controls whether ImGui draws its default target rectangle.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

**Returns:** `true` only when a compatible payload is delivered.
