---
uid: api.8100ab9ac22385bc807bb29c314af1bea273bcfa500ad681de6887d9e9a9500e
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@,System.Boolean@)"
source: xml
reviewed: f7eecd34b75dc126539c9da54454e0fb7b57f7ffe889f661b1d838f70590a550
title: "DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Accepts an unmanaged payload and reports its preview state on the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Returns:** `true` only when a compatible payload is delivered.
