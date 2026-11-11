---
title: "InspectionDrawerAttribute"
description: "Reference for InspectionDrawerAttribute in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.a615fad2241a5874
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectionDrawerAttribute`

This reference describes `InspectionDrawerAttribute` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-53a73716a536ff5f) | Method |
| [`conditional`](#api-bb83316734280166) | Property |
| [`priority`](#api-1598f5245a1ad3c2) | Property |
| [`targetType`](#api-dea42b64f6f37de8) | Property |
| [`useForChildren`](#api-ccd259e21c1364a4) | Property |

## Type declaration

<a id="api-a615fad2241a5874"></a>
<!-- api: T:Inno.Editor.Inspection.InspectionDrawerAttribute 10a8e7fe6ddf9ddbdbf5fde964ed9b29b424cc14852d716e9a98b7f2bdd7c6b2 -->

```csharp
public sealed class Inno.Editor.Inspection.InspectionDrawerAttribute : System.Attribute
```

Associates an inspector drawer with a selected target type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L9).

## `#ctor`

<a id="api-53a73716a536ff5f"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32,System.Boolean) 3d55ad7bb48f25fd6624f020043d032da1e60d51d66c104b1ec26850788af76c -->

```csharp
public Inno.Editor.Inspection.InspectionDrawerAttribute.InspectionDrawerAttribute(System.Type targetType, bool useForChildren = false, int priority = 0, bool conditional = false)
```

Creates an inspector drawer registration.

**Parameter `targetType`:** The selected object type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived target types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Parameter `conditional`:** Whether CanInspect is a target-dependent predicate. Equally specific accepted peers remain an explicit ambiguity error.

**Throws `System.ArgumentNullException`:** Thrown when `targetType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L49).

## `conditional`

<a id="api-bb83316734280166"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawerAttribute.conditional 2a7ab567832699903457f5503d334dbb90d2b6cf2efe59f4e70f9ddb49e75774 -->

```csharp
public bool Inno.Editor.Inspection.InspectionDrawerAttribute.conditional { get; }
```

Gets whether CanInspect selects a subset of targets, allowing peer conditional registrations at the same priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L29).

## `priority`

<a id="api-1598f5245a1ad3c2"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawerAttribute.priority 902d554ab25358c34e638f423c989fadcbd2d0ff18eb7587727da7b8466b0eda -->

```csharp
public int Inno.Editor.Inspection.InspectionDrawerAttribute.priority { get; }
```

Gets the tie-breaking registration priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L24).

## `targetType`

<a id="api-dea42b64f6f37de8"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawerAttribute.targetType 99506bbd72ce8ebcbb84c47ad4f011aa991a2cb9ba7ad6a9c755859ee9f0b50e -->

```csharp
public System.Type Inno.Editor.Inspection.InspectionDrawerAttribute.targetType { get; }
```

Gets the selected target type handled by the drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L14).

## `useForChildren`

<a id="api-ccd259e21c1364a4"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawerAttribute.useForChildren 465c12479d14202e2ff88fc7ab2325daa9cc398aa31741e5aae13a2ccbc2cb72 -->

```csharp
public bool Inno.Editor.Inspection.InspectionDrawerAttribute.useForChildren { get; }
```

Gets whether derived target types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerAttribute.cs#L19).
