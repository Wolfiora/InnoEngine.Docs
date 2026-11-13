---
uid: api.5770ed3c28a2c09a907cfe4e3da9a8e67b2b90202a85876e2c0710e7dec7b25a
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,\u0060\u00600@,System.Boolean@,System.Boolean)"
source: xml
reviewed: b9e5775586a62edc49cc2a2271e700ebea3d8e3929d55bfd26f72f3253ca0348
title: "DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Accepts an unmanaged payload on an explicit screen-space rectangle.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `minimum`:** Minimum screen coordinate of the complete target.

**Parameter `maximum`:** Maximum screen coordinate of the complete target.

**Parameter `targetId`:** ImGui identifier unique within the current window.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

**Returns:** `true` only when a compatible payload is delivered.

**Exception `T:System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.
