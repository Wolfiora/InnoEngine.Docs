---
uid: api.6fcb86858d03cac3966316564b062f4fdf3222c0f1b0abb75feb0e54c649de57
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDragData.#ctor(InnoEngine.Core.IdentityObject,System.String)"
source: xml
reviewed: cd272571a082312e9902be98d9c2161b24a66703e40d59058f763e8d7853880f
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates drag data for a registered identity object.

**Parameter `source`:** The registered source object resolved again for each drop query and delivery.

**Parameter `label`:** The human-readable label used by drag previews.

**Exception `T:System.ArgumentNullException`:** Thrown when `source` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when `source` is not registered in a live identity domain.
