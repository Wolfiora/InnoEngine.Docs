---
uid: api.bc9c571ebc83b659ea3a72983326175468c53ec5e882c24688d290257a856036
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.TransformGizmoResult.#ctor(InnoEngine.Mathematics.Matrix,System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: 64eb4127d102f1ef742e723366ae80085240c2c38c2a2639fb3420010c6abe21
title: "Constructor"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Returns copied manipulation output; the domain owner decides how to apply and record it.

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.
