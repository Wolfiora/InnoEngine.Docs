---
uid: api.8ca8a8abeac729d6ac158f8f55321fabde6a5bdea9cada8d419fd3ac3598603a
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource\u0060\u00601(System.String,\u0060\u00600@,System.Action,System.Boolean)"
source: xml
reviewed: e745f260ab84db0ccc1919e874b7a8dafd9a454ca537c8ac0795a9f6aaa3b510
title: "DragDropSource"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Publishes an unmanaged drag payload for the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Payload value.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

**Returns:** `true` while the item is an active drag source.

**Exception `T:System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.
