---
uid: api.20ae3c2018797714ddb36d352ec71e75dc53a1902dbcfd1d9cee05bad8ecd1d0
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource\u0060\u00601(System.String,System.Func{\u0060\u00600},System.Action,System.Boolean)"
source: xml
reviewed: a4542ec2297e4b3f898f28193a104ce4adf9d9abc195ce50bb85f7b38ce4995e
title: "DragDropSource"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
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
