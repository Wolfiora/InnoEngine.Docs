---
uid: api.643d3da21289712bf3b1f506684d939adcf872d7234d0425bb6e6fbe444157c6
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropSource\u0060\u00601(System.String,System.Func{\u0060\u00600},System.Action,System.Boolean)"
source: xml
reviewed: c8ec5311f91039e431e61485c600fadd3d4b96f834f607acd54b92348c97bd54
title: "DragDropSource"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Publishes a lazily created unmanaged drag payload for the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payloadFactory`:** Creates the payload only after dragging starts.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

**Returns:** `true` while the item is an active drag source.

**Exception `T:System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `payloadFactory` is `null`.
