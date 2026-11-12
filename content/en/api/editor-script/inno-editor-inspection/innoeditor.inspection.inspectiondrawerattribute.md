---
title: "InspectionDrawerAttribute"
description: "Reference for InspectionDrawerAttribute in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.a89639b83cb83a2b
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `InspectionDrawerAttribute`

This reference describes `InspectionDrawerAttribute` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9269b54c5955c3aa) | Method |
| [`conditional`](#api-0408041df9909a63) | Property |
| [`priority`](#api-6bdeb12209aa788f) | Property |
| [`targetType`](#api-0b12a998064570ee) | Property |
| [`useForChildren`](#api-9c7097262268d27d) | Property |

## Type declaration

<a id="api-a89639b83cb83a2b"></a>
<!-- api: T:InnoEditor.Inspection.InspectionDrawerAttribute 83534cc2e26687b11b28f0ab7a9fdab6945d3bf80231b992094838da20ec3995 -->

```csharp
public sealed class InnoEditor.Inspection.InspectionDrawerAttribute : System.Attribute
```

Associates an inspector drawer with a selected target type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L9).

## `#ctor`

<a id="api-9269b54c5955c3aa"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32,System.Boolean) 8565b948e1a2f8d393296de567a7d2015e7156181926d77ff0da47ba6cde0060 -->

```csharp
public InnoEditor.Inspection.InspectionDrawerAttribute.InspectionDrawerAttribute(System.Type targetType, bool useForChildren = false, int priority = 0, bool conditional = false)
```

Creates an inspector drawer registration.

**Parameter `targetType`:** The selected object type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived target types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Parameter `conditional`:** Whether CanInspect is a target-dependent predicate. Equally specific accepted peers remain an explicit ambiguity error.

**Throws `System.ArgumentNullException`:** Thrown when `targetType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L49).

## `conditional`

<a id="api-0408041df9909a63"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawerAttribute.conditional 318c18e4422c4b7a8e57cfe0f774b2d9b18dd164c79682af2714c70c44edcb12 -->

```csharp
public bool InnoEditor.Inspection.InspectionDrawerAttribute.conditional { get; }
```

Gets whether CanInspect selects a subset of targets, allowing peer conditional registrations at the same priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L29).

## `priority`

<a id="api-6bdeb12209aa788f"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawerAttribute.priority dcdedfb097abc0751afe081bc529aaeedf2d170d8b5943ecce58b9a62af15aa9 -->

```csharp
public int InnoEditor.Inspection.InspectionDrawerAttribute.priority { get; }
```

Gets the tie-breaking registration priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L24).

## `targetType`

<a id="api-0b12a998064570ee"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawerAttribute.targetType 6fdb6e837e3526c809100df0d6259b02c7f3bd22affb69873a247780a66aa8a3 -->

```csharp
public System.Type InnoEditor.Inspection.InspectionDrawerAttribute.targetType { get; }
```

Gets the selected target type handled by the drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L14).

## `useForChildren`

<a id="api-9c7097262268d27d"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawerAttribute.useForChildren 8098a17a9ae01a2470622555c37ae943f83a5275932516430c7e7c25860d5f8b -->

```csharp
public bool InnoEditor.Inspection.InspectionDrawerAttribute.useForChildren { get; }
```

Gets whether derived target types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L19).
