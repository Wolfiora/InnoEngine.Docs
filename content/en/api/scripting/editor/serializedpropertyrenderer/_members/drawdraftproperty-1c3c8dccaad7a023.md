---
uid: api.1c3c8dccaad7a023bf75397c2c862115054f1d94fd550b1fb86046f2780aac66
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(InnoEditor.Core.EditorContext,System.Object,System.Object,System.String,InnoEngine.Serialization.SerializedProperty,InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean)"
source: xml
reviewed: 42fe47c8badff3bbd080478e2190ff6b8e0be0226c3b0a8888fc468b91b3a880
title: "DrawDraftProperty"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws a detached serialized property with its attributes and a feature-owned draft transaction.

**Parameter `editorContext`:** Current Editor frame.

**Parameter `stateOwner`:** Stable host-owned presentation state, containing no collectible objects.

**Parameter `valueOwner`:** Invocation-local detached value declaring the property and attributes.

**Parameter `ownerPath`:** Stable document or settings path.

**Parameter `property`:** Detached native serialized property.

**Parameter `edits`:** Draft mutation and shared History boundary.

**Parameter `readOnly`:** Whether source ownership prohibits edits.
