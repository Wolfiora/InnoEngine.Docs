---
uid: api.f00f57c2bbbb1a9f959495da0b36984fffbe50076670afe028c5797dfa4b7c81
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@)"
source: xml
reviewed: e31d965ec50631ad8fc6d0381879a032b3d92b983a233651650e206825a0b62f
title: "ImGuiWidget.DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Accepts an unmanaged payload on the most recently submitted item.

## Type parameters

**Type parameter `TPayload`:** Unmanaged payload type.

## Parameters

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Delivered payload value.

## Returns

`true` only when a compatible payload is delivered.
