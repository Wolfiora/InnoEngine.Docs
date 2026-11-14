---
uid: api.9c28bc8a9014b92cb0c3456b6fc3d54d5b9884c5a487d565ea4c74ec44198b55
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: 3d930c927fb0a99f0bef61e3a4eb66fbe2b4c410a7a5f76523706228a1ac44e8
title: "EditorActionAttribute.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an action registration restricted to one exact area.

## Parameters

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
