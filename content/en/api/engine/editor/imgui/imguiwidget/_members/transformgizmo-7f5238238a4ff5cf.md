---
uid: api.7f5238238a4ff5cf065da26612184d1ac94ada8a35ca470d47c5a225ae4c5fd7
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TransformGizmo(Inno.Core.Mathematics.Matrix,Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions)"
source: xml
reviewed: 95d59ed6497a11950bcd2123276f880e8a8bc09dbb3fb8764860c00190bb1095
title: "TransformGizmo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a transform handle using stack-owned ABI buffers and restores native global style and masks before returning.

**Parameter `world`:** The current world matrix, copied into the native call.

**Parameter `options`:** The explicit viewport and interaction policy.

**Returns:** Copied output with no native pointer or domain object.
