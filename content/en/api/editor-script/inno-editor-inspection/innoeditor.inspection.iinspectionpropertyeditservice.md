---
title: "IInspectionPropertyEditService"
description: "Reference for IInspectionPropertyEditService in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.59ee4b0aec6645e6
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `IInspectionPropertyEditService`

This reference describes `IInspectionPropertyEditService` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`ChangeProperty`](#api-f19a3f8a7d74abe1) | Method |

## Type declaration

<a id="api-59ee4b0aec6645e6"></a>
<!-- api: T:InnoEditor.Inspection.IInspectionPropertyEditService 7f9cb02e5460dbeaa262660f9be482ff478005ed1c218411819663a0d4453dcc -->

```csharp
public interface InnoEditor.Inspection.IInspectionPropertyEditService
```

Applies one root serialized-property mutation through the history mechanism owned by a feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IInspectionPropertyEditService.cs#L7).

## `ChangeProperty`

<a id="api-f19a3f8a7d74abe1"></a>
<!-- api: M:InnoEditor.Inspection.IInspectionPropertyEditService.ChangeProperty(System.Object,System.String,System.Action,System.String,System.String,System.String) 56740afe2ae9ef622272986cf0538f5cc273eb015eb154ee74734d0bee14f96e -->

```csharp
bool InnoEditor.Inspection.IInspectionPropertyEditService.ChangeProperty(object owner, string propertyName, System.Action mutation, string historyName, string? mergeKey, string? componentName)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IInspectionPropertyEditService.cs#L41).
