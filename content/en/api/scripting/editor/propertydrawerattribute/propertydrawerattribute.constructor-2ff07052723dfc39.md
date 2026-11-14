---
uid: api.2ff07052723dfc3918c4d4b051992bdae6b78a387e8379efd8c2c1e92e25b95e
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32)"
source: xml
reviewed: b45ed166aa013b5a5152594bad38b42980acf05ab0fd5ceb28327c96b7c2e233
title: "PropertyDrawerAttribute.Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Creates a property drawer registration.

**Parameter `targetType`:** The declared serialized property type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived property types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Exception `T:System.ArgumentNullException`:** Thrown when `targetType` is `null`.
