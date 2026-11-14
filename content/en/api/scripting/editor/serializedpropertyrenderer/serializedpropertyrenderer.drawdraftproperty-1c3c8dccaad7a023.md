---
uid: api.1c3c8dccaad7a023bf75397c2c862115054f1d94fd550b1fb86046f2780aac66
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(InnoEditor.Core.EditorContext,System.Object,System.Object,System.String,InnoEngine.Serialization.SerializedProperty,InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean)"
source: xml
reviewed: bd9de5bc7462cda29e5e536aff1a4b6faa1d9254b764e10eb4135a413d098100
title: "SerializedPropertyRenderer.DrawDraftProperty"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws a detached serialized property with its attributes and a feature-owned draft transaction.

## Parameters

**Parameter `editorContext`:** Current Editor frame.

**Parameter `stateOwner`:** Stable host-owned presentation state, containing no collectible objects.

**Parameter `valueOwner`:** Invocation-local detached value declaring the property and attributes.

**Parameter `ownerPath`:** Stable document or settings path.

**Parameter `property`:** Detached native serialized property.

**Parameter `edits`:** Draft mutation and shared History boundary.

**Parameter `readOnly`:** Whether source ownership prohibits edits.
