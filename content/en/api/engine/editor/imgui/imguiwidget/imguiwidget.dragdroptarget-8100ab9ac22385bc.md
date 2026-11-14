---
uid: api.8100ab9ac22385bc807bb29c314af1bea273bcfa500ad681de6887d9e9a9500e
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@,System.Boolean@)"
source: xml
reviewed: 3cf892b48de48ecf3f0e2d1e91c8d06afe171bc9998de60f967a83bdd8bb5fc8
title: "ImGuiWidget.DragDropTarget"
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
