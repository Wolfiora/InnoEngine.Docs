---
title: "PropertyDrawerAttribute"
description: "Reference for PropertyDrawerAttribute in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.5d459635b7133dc8
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `PropertyDrawerAttribute`

This reference describes `PropertyDrawerAttribute` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ff3c5603ed80c0e6) | Method |
| [`priority`](#api-c0bed46c82d28385) | Property |
| [`targetType`](#api-f0d559c52e216e52) | Property |
| [`useForChildren`](#api-81b0dfcd650c0233) | Property |

## Type declaration

<a id="api-5d459635b7133dc8"></a>
<!-- api: T:Inno.Editor.Inspection.PropertyDrawerAttribute cdf6cf8391e11455d430b9267e4f977e625bafa300c7ace1741034142e26f602 -->

```csharp
public sealed class Inno.Editor.Inspection.PropertyDrawerAttribute : System.Attribute
```

Associates a property drawer with a declared property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L9).

## `#ctor`

<a id="api-ff3c5603ed80c0e6"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32) 20c8a13cbb53e0d089923394303b77b96aa7e713d2f59646c919c39bf7a1511d -->

```csharp
public Inno.Editor.Inspection.PropertyDrawerAttribute.PropertyDrawerAttribute(System.Type targetType, bool useForChildren = false, int priority = 0)
```

Creates a property drawer registration.

**Parameter `targetType`:** The declared serialized property type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived property types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Throws `System.ArgumentNullException`:** Thrown when `targetType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L41).

## `priority`

<a id="api-c0bed46c82d28385"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawerAttribute.priority 94dd6c2a9d7532a7050ed7b24699b701a009c7dfbf438baa2ccd3a2283a2638d -->

```csharp
public int Inno.Editor.Inspection.PropertyDrawerAttribute.priority { get; }
```

Gets the tie-breaking registration priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L24).

## `targetType`

<a id="api-f0d559c52e216e52"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawerAttribute.targetType 46bc38f1b43f4f0316caa1eca4d19c37d99afb15276a9189939ef06c7118a533 -->

```csharp
public System.Type Inno.Editor.Inspection.PropertyDrawerAttribute.targetType { get; }
```

Gets the declared property type handled by the drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L14).

## `useForChildren`

<a id="api-81b0dfcd650c0233"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawerAttribute.useForChildren 5d70033480ebc1a31d07c1b513cc972b69646c65819aa16ff43718a39a885c5d -->

```csharp
public bool Inno.Editor.Inspection.PropertyDrawerAttribute.useForChildren { get; }
```

Gets whether assignable derived types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L19).
