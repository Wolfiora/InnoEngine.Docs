---
uid: api.inno.editor.imgui.editor-script.274b62e05be48da1
symbol: "scripting:Inno.Editor.ImGui:T:InnoEditor.ImGui.TransformGizmoResult"
source: xml
reviewed: e58305fdfab24842ee28b64bad9a64f60995cec06f1ad8a7b13429d345703190
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

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.
