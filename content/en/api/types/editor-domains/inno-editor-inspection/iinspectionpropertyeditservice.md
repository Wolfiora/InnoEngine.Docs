---
title: "IInspectionPropertyEditService"
description: "Reference for IInspectionPropertyEditService in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.91ed65d66592eaf6
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `IInspectionPropertyEditService`

This reference describes `IInspectionPropertyEditService` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ChangeProperty`](#api-2ffd06eae1f681cd) | Method |

## Type declaration

<a id="api-91ed65d66592eaf6"></a>
<!-- api: T:Inno.Editor.Inspection.IInspectionPropertyEditService 8ceb2f6119943474d6163fe8201f1437d96c6f6d7c816da8f0707323912210e0 -->

```csharp
public interface Inno.Editor.Inspection.IInspectionPropertyEditService
```

Applies one root serialized-property mutation through the history mechanism owned by a feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IInspectionPropertyEditService.cs#L7).

## `ChangeProperty`

<a id="api-2ffd06eae1f681cd"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionPropertyEditService.ChangeProperty(System.Object,System.String,System.Action,System.String,System.String,System.String) ecb4fa76aeb0c5fac0debb6f06c99c84d8f608747a9acfcf3bd4ee57930e7cf4 -->

```csharp
bool Inno.Editor.Inspection.IInspectionPropertyEditService.ChangeProperty(object owner, string propertyName, System.Action mutation, string historyName, string? mergeKey, string? componentName)
```

Applies a property mutation and records it when the owning feature observes a value change.

**Parameter `owner`:** The domain object that owns the root serialized property.

**Parameter `propertyName`:** The exact root serialized member name.

**Parameter `mutation`:** The callback that assigns the requested value.

**Parameter `historyName`:** The user-facing name for the resulting history entry.

**Parameter `mergeKey`:** The current shared gesture key, or null for a discrete edit.

**Parameter `componentName`:** An optional public value component; null replaces the complete root value.

**Returns:** `true` when the value changed and the owning feature recorded the edit;
    otherwise, `false`.

**Throws `System.ArgumentNullException`:** Thrown when `owner` or `mutation` is
`null`.

**Throws `System.ArgumentException`:** Thrown when `propertyName` or `historyName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IInspectionPropertyEditService.cs#L41).
