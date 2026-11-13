---
uid: api.9c28bc8a9014b92cb0c3456b6fc3d54d5b9884c5a487d565ea4c74ec44198b55
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: 2fb2564307d2185bf05963eb720fad192d68f5141367196b9ea3cbf1fc9f3dcf
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an action registration restricted to one exact area.

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
