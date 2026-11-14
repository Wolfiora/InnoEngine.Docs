---
uid: api.95c3ed132af9881ffe06dcc680e8a2621e23bbecc8fb19717fc027ab91605096
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.IInspectionPropertyEditService.ChangeProperty(System.Object,System.String,System.Action,System.String,System.String,System.String)"
source: xml
reviewed: 209201126eef18672096b4f81593286742dba617e083d29b009ef5b494784f05
title: "IInspectionPropertyEditService.ChangeProperty"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Applies a property mutation and records it when the owning feature observes a value change.

## Parameters

**Parameter `owner`:** The domain object that owns the root serialized property.

**Parameter `propertyName`:** The exact root serialized member name.

**Parameter `mutation`:** The callback that assigns the requested value.

**Parameter `historyName`:** The user-facing name for the resulting history entry.

**Parameter `mergeKey`:** The current shared gesture key, or null for a discrete edit.

**Parameter `componentName`:** An optional public value component; null replaces the complete root value.

## Returns

`true` when the value changed and the owning feature recorded the edit; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `owner` or `mutation` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `propertyName` or `historyName` is empty.
