---
uid: api.inno.editor.imgui.editor-script.274b62e05be48da1
symbol: "scripting:Inno.Editor.ImGui:T:InnoEditor.ImGui.TransformGizmoResult"
source: xml
reviewed: 57dcb4f5122df3f57f58452e185f9783d9bcbdc8aec4dc3bdac1b79c02c0d331
title: "TransformGizmoResult"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-imgui
aliases: []
---

Returns copied manipulation output; the domain owner decides how to apply and record it.

## Parameters

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.
