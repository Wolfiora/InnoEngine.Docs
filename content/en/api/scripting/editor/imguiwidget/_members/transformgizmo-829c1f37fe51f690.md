---
uid: api.829c1f37fe51f690873e4f36698eaa08fb62f9a738a9650cba2a78b1a7f1250c
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.TransformGizmo(InnoEngine.Mathematics.Matrix,InnoEditor.ImGui.TransformGizmoOptions)"
source: xml
reviewed: 70f18a6fb6fa828d2928e0dcfd9c806a3dd1c1cb51daf9cab5a192f413cbc5bc
title: "TransformGizmo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a transform handle using stack-owned ABI buffers and restores native global style and masks before returning.

**Parameter `world`:** The current world matrix, copied into the native call.

**Parameter `options`:** The explicit viewport and interaction policy.

**Returns:** Copied output with no native pointer or domain object.
