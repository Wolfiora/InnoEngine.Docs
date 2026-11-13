---
uid: api.c8d60e58ecc6058e87c377718032804bd2e3a1cd66d5d4a3d1b3588badd7e691
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,\u0060\u00600@,System.Boolean@,System.Boolean)"
source: xml
reviewed: fc79ac9d1ff201439c9335bf232e2c80794e10de790575ab75a8fe1dc6848497
title: "DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
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
