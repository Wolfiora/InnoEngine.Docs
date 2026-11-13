---
uid: api.inno.editor.imgui.7edcecb10221ed24
symbol: "engine:Inno.Editor.ImGui:T:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult"
source: xml
reviewed: 1512375ffe8d9c168e66da95d11cdcb645460ff727ff0688492cb7ad117d4e52
title: "TransformGizmoResult"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
contracts:
- project.inno-editor-imgui
aliases: []
---

Returns copied manipulation output; the domain owner decides how to apply and record it.

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.
