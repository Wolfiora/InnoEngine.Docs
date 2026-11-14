---
uid: api.8d270d886eb4e7a10d0e7c3886c38dd22603d2695197f9b9dc859f6aea4b0727
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropSource\u0060\u00601(System.String,\u0060\u00600@,System.Action,System.Boolean)"
source: xml
reviewed: e5b28e51bbb8239cdde44c7b1da6b5b2f37122ad176f119b9492d8b84cfcde06
title: "ImGuiWidget.DragDropSource"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Publishes an unmanaged drag payload for the most recently submitted item.

## Type parameters

**Type parameter `TPayload`:** Unmanaged payload type.

## Parameters

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Payload value.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

## Returns

`true` while the item is an active drag source.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.
