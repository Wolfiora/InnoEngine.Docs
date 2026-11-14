---
uid: api.bc9c571ebc83b659ea3a72983326175468c53ec5e882c24688d290257a856036
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.TransformGizmoResult.#ctor(InnoEngine.Mathematics.Matrix,System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: 3197f42e6fd11fa72fdc1f6f54e202349cb79d8462cd88cfd3d73f344f89fba1
title: "TransformGizmoResult.Constructor"
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
