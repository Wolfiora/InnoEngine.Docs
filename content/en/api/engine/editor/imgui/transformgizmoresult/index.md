---
uid: api.inno.editor.imgui.7edcecb10221ed24
symbol: "engine:Inno.Editor.ImGui:T:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult"
source: xml
reviewed: d54e3a61918a7a807514dee00da8abb49c33ed206eec6f0380f2a440cf0ab170
title: "TransformGizmoResult"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
contracts:
- project.inno-editor-imgui
aliases: []
---

Returns copied manipulation output; the domain owner decides how to apply and record it.

## Parameters

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.
