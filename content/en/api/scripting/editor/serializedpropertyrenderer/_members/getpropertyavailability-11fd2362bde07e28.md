---
uid: api.11fd2362bde07e283653024484c4c45e356e6f3db7cc01448c817f8570be669a
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,InnoEngine.Serialization.SerializedProperty)"
source: xml
reviewed: 61ba686908227891a0ae5a1c8af93630b286547a96ad328b2cd9cec412fc3a15
title: "GetPropertyAvailability"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Evaluates the same current-generation presentation attributes used by drawing without creating any UI state.

**Parameter `owner`:** The current object declaring the property's conditional metadata.

**Parameter `property`:** The root serialized property to inspect.

**Returns:** Visibility and editability for this exact owner; callers must combine all selected owners before a batch edit.
