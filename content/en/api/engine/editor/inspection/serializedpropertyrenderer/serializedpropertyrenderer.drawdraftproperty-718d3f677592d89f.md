---
uid: api.718d3f677592d89f985a4d3cc90aa60e11633e29e2494baee81961cdb43d7fbf
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(Inno.Editor.Core.EditorContext,System.Object,System.Object,System.String,Inno.Core.Serialization.SerializedProperty,Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean)"
source: xml
reviewed: 9e8231a4bb38b55cb761068e3d2c48f8edc884453647f794c903a788cc186ef6
title: "SerializedPropertyRenderer.DrawDraftProperty"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
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
