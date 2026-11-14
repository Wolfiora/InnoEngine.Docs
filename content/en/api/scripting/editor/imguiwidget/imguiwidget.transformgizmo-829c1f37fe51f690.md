---
uid: api.829c1f37fe51f690873e4f36698eaa08fb62f9a738a9650cba2a78b1a7f1250c
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.TransformGizmo(InnoEngine.Mathematics.Matrix,InnoEditor.ImGui.TransformGizmoOptions)"
source: xml
reviewed: 6da777b787c9ae451e0e214612efaaa14ce3aa72613a798254148e7841bc584a
title: "ImGuiWidget.TransformGizmo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a transform handle using stack-owned ABI buffers and restores native global style and masks before returning.

## Parameters

**Parameter `world`:** The current world matrix, copied into the native call.

**Parameter `options`:** The explicit viewport and interaction policy.

## Returns

Copied output with no native pointer or domain object.
