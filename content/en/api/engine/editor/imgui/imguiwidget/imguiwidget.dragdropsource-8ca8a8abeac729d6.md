---
uid: api.8ca8a8abeac729d6ac158f8f55321fabde6a5bdea9cada8d419fd3ac3598603a
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource\u0060\u00601(System.String,\u0060\u00600@,System.Action,System.Boolean)"
source: xml
reviewed: 62b2daa5d3e3d32556d13c607c031d2fbd67814ef3872353dc748939848226c0
title: "ImGuiWidget.DragDropSource"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
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
