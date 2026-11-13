---
uid: api.a95e5df05e32240629a4f643a35974d4dfccc64c0fd8f12085b600544bb60180
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@,System.Boolean@,System.Boolean)"
source: xml
reviewed: f77e4a500c9c132f621d0bdcd0f8f9713299181d2f0705a97592817d197f8024
title: "DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Accepts an unmanaged payload and controls whether ImGui draws its default target rectangle.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

**Returns:** `true` only when a compatible payload is delivered.
